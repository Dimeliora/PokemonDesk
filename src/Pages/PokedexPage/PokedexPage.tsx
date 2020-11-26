import React, { FC, useState } from 'react';
import useGetData from '../../Hooks/useGetData';
import IAPIData from '../../Configs/apiDataInterface';
import s from './PokedexPage.module.scss';
import Heading from '../../Components/Heading';
import SearchInput from '../../Components/SearchInput';
import Layout from '../../Components/Layout';
import PokemonCard from '../../Components/PokemonCard';
import Loader from '../../Components/Loader';
import Notification from '../../Components/Notification';
import Footer from '../../Components/Footer';

const PokedexPage: FC = () => {
  const initDataState: IAPIData = {
    total: 0,
    count: 0,
    offset: 0,
    limit: 0,
    pokemons: [],
  };

  const [searchName, getSearchName] = useState('');
  const [query, getQuery] = useState({});
  const { data, isFetching, fetchError } = useGetData('getPokemons', query, initDataState, [searchName]);

  const onSearchNameInput = (template: string) => {
    getSearchName(template);
    getQuery((query) => ({
      ...query,
      name: template,
    }));
  };

  const total = data?.total;
  const pokemons = data?.pokemons || [];
  const isData = pokemons.length > 0;

  const headingText = isFetching ? (
    'Cathing all the pokemons...'
  ) : (
    <>
      {total} <b>Pokemons</b> for you to choose your favorite
    </>
  );

  const cardsLayout = (
    <div className={s.pokemonCardsWrap}>
      {pokemons.map((pokemon) => {
        const {
          id,
          name,
          stats: { attack, defense },
          types,
          img,
        } = pokemon;
        return <PokemonCard key={id} name={name} attack={attack} defense={defense} types={types} img={img} />;
      })}
    </div>
  );

  let pokemonCardsOutput;
  if (isFetching) {
    pokemonCardsOutput = <Loader classname={s.loader} />;
  } else if (!isData) {
    pokemonCardsOutput = <Notification classname={s.noPokemonsNotice}>Sorry, there is no pokemons</Notification>;
  } else {
    pokemonCardsOutput = cardsLayout;
  }

  const mainPageContent = (
    <Layout className={s.contentWrap}>
      <Heading className={s.heading} type="h3" weight="normal">
        {headingText}
      </Heading>
      <SearchInput
        className={s.searchNameInput}
        placeholder="Encuentra tu pokémon..."
        onSearchInput={onSearchNameInput}
      />
      {pokemonCardsOutput}
    </Layout>
  );

  return (
    <div className={s.root}>
      {fetchError ? (
        <Notification classname={s.getPokemonsError}>
          Sorry, something went wrong. We are already working on it!
        </Notification>
      ) : (
        mainPageContent
      )}
      <Footer />
    </div>
  );
};

export default PokedexPage;

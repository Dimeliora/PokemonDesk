import React, { FC, useState } from 'react';
import useGetData from '../../Hooks/useGetData';
import useDebounce from '../../Hooks/useDebounce';
import IAPIData, { IPokemons } from '../../Interfaces/apiDataInterface';
import s from './PokedexPage.module.scss';
import Heading from '../../Components/Heading';
import SearchInput from '../../Components/SearchInput';
import Layout from '../../Components/Layout';
import PokemonCard from '../../Components/PokemonCard';
import Loader from '../../Components/Loader';
import Notification from '../../Components/Notification';
import Footer from '../../Components/Footer';

interface IQuery {
  name?: string;
}

const PokedexPage: FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const debouncedValue = useDebounce(searchName, 500);
  const [query, setQuery] = useState<IQuery>({});
  const { data, isFetching, fetchError } = useGetData<IAPIData>('getPokemons', query, [debouncedValue]);

  const onSearchNameInput = (template: string) => {
    setSearchName(template);
    setQuery((query: IQuery) => ({
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
      {pokemons.map((pokemon: IPokemons) => {
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

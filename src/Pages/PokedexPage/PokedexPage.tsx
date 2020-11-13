<<<<<<< Updated upstream
import React from 'react';
import s from './PokedexPage.module.scss';

import Header from '../../Components/Header';
=======
import React, { FC, useEffect, useState } from 'react';
import s from './PokedexPage.module.scss';

import Heading from '../../Components/Heading';
import Layout from '../../Components/Layout';
import PokemonCard from '../../Components/PokemonCard';
>>>>>>> Stashed changes
import Footer from '../../Components/Footer';
import Loader from '../../Components/Loader';
import ErrorNotice from '../../Components/ErrorNotice';

<<<<<<< Updated upstream
const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.mock}>Page is under construction...</div>
=======
interface IData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Array<IPokemons>;
}

interface IPokemons {
  name_clean: string;
  abilities: Array<string>;
  stats: IPokemonStats;
  types: Array<string>;
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

interface IPokemonStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

const usePokemons = () => {
  const [data, setData] = useState<IData | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isFetchError, setIsFetchError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsFetching(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=50');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setIsFetchError(true);
      } finally {
        setIsFetching(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isFetching,
    isFetchError,
  };
};

const PokedexPage: FC = () => {
  const { data, isFetching, isFetchError } = usePokemons();
  const total = data?.total;
  const pokemons = data?.pokemons || [];

  if (isFetching) {
    return <Loader />;
  }

  if (isFetchError) {
    return <ErrorNotice />;
  }

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <Heading className={s.heading} type="h3" weight="normal">
          {total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.pokemonCardsWrap}>
          {pokemons.map(({ id, name, stats: { attack, defense }, types, img }) => {
            return <PokemonCard key={id} name={name} attack={attack} defense={defense} types={types} img={img} />;
          })}
        </div>
      </Layout>
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
};

export default PokedexPage;

import React, { FC } from 'react';
import s from './PokedexPage.module.scss';

import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
import Layout from '../../Components/Layout';
import PokemonCard from '../../Components/PokemonCard';
import Footer from '../../Components/Footer';

import pokemons from './pokemons';

const PokedexPage: FC = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <Heading className={s.heading} type="h3" weight="normal">800 <b>Pokemons</b> for you to choose your favorite</Heading>
        <div className={s.pokemonCardsWrap}>
          {pokemons.map((pokemon) => {
            const { id, name, stats, types, img } = pokemon;
            return <PokemonCard key={id} name={name} stats={stats} types={types} img={img} />;
          })}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;

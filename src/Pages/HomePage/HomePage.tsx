<<<<<<< Updated upstream
import React from 'react';
import Header from '../../Components/Header';
=======
import React, { FC } from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../Configs/routes';
import s from './HomePage.module.scss';

>>>>>>> Stashed changes
import Heading from '../../Components/Heading';
import Layout from '../../Components/Layout';
import Button from '../../Components/Button';
import Parallax from '../../Components/Parallax';
import Footer from '../../Components/Footer';


const HomePage = () => {
  return (
    <div className={s.root}>
<<<<<<< Updated upstream
      <Header />
=======
>>>>>>> Stashed changes
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1" className={s.heading}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={s.description}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
<<<<<<< Updated upstream
          {/* eslint-disable-next-line no-console */}
          <Button onClick={(e) => console.log('Clicked', e)}>See pokemons</Button>
=======
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
>>>>>>> Stashed changes
        </div>
        <Parallax />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;

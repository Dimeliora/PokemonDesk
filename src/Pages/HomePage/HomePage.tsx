import React from 'react';
import Header from '../../Components/Header';
import Heading from '../../Components/Heading';
import Layout from '../../Components/Layout';
import Button from '../../Components/Button';
import Parallax from '../../Components/Parallax';
import Footer from '../../Components/Footer';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1" className={s.heading}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={s.description}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          {/* eslint-disable-next-line no-console */}
          <Button onClick={(e) => console.log('Clicked', e)}>See pokemons</Button>
        </div>
        <Parallax />
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;

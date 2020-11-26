import React, { FC } from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../Configs/routes';
import s from './HomePage.module.scss';
import Heading from '../../Components/Heading';
import Layout from '../../Components/Layout';
import Button from '../../Components/Button';
import Parallax from '../../Components/Parallax';
import Footer from '../../Components/Footer';

const HomePage: FC = () => {
  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1" weight="normal" className={s.heading}>
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <p className={s.description}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See pokemons</Button>
        </div>
        <Parallax />
      </Layout>
      <Footer/>
    </div>
  );
};

export default HomePage;

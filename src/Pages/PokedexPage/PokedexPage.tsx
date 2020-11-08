import React from 'react';
import s from './PokedexPage.module.scss';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const PokedexPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.mock}>Page is under construction...</div>
      <Footer />
    </div>
  );
};

export default PokedexPage;

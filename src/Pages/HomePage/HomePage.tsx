import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import s from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.mock} />
      <Footer />
    </div>
  );
};

export default HomePage;

import React from 'react';
import s from './App.module.scss';
import Header from '../Header';
import Footer from '../Footer';

const App = () => {
  return (
    <div className={s.wrap}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;

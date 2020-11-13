import React from 'react';
import s from './Loader.module.scss';

import Heading from '../Heading';
import rollingBallImg from '../../Images/rollingBall.gif';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Heading type="h3" weight="bold" className={s.loaderTitle}>
        Catching all the Pokemons...
      </Heading>
      <img src={rollingBallImg} alt="Spinning Pokeball" />
    </div>
  );
};

export default Loader;

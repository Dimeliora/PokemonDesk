import React, { useState, useEffect } from 'react';
import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/pokeball1.png';
import CloudPng from './assets/clouds1.png';
import PokeBallPng from './assets/pokeball2.png';
import CloudBigPng from './assets/clouds2.png';
import PikachuPng from './assets/pikachu.png';

const Parallax = () => {
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCoordX(event.clientX);
      setCoordY(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coordX, coordY]);

  return (
    <div className={s.root}>
      <div className={s.smallPokeBall} style={{ transform: `translate(${coordX * -0.02}px, ${coordY * -0.03}px)` }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={s.cloud} style={{ transform: `translate(${coordX * 0.015}px, ${coordY * 0.0}px)` }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={s.cloudBig} style={{ transform: `translate(${coordX * -0.01}px, ${coordY * 0.0}px)` }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div className={s.pokeBall} style={{ transform: `translate(${coordX * 0.07}px, ${coordY * 0.08}px)` }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={s.pikachu} style={{ transform: `translate(${coordX * 0.03}px, ${coordY * 0.02}px)` }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;

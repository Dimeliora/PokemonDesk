import React from 'react';
import s from './Logo.module.scss';
import PokeLogo from './logo.svg';

const Logo = () => {
  return (
    <div className={s.logo}>
      <a href="#">
        <img src={PokeLogo} alt="Pokemon" className={s.logoImage} />
      </a>
    </div>
  );
};

export default Logo;

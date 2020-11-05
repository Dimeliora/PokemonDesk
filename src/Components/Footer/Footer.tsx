import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.wrapper}>
        <span className={s.slogan} role="img" aria-label="Make with love">
          Make with ❤️
        </span>
        <span className={s.copyright}>Ours Team</span>
      </div>
    </footer>
  );
};

export default Footer;

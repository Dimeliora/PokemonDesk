import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.wrapper}>
          <span className={s.slogan} role="img" aria-label="Make with love">
            Make with ❤️
          </span>
          <span className={s.copy}>Ours Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

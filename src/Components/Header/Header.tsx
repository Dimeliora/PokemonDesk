import React from 'react';
import s from './Header.module.scss';
import Logo from '../Logo';
import MainNavigation from '../MainNavigation';

const Header = () => {
  const mainNavItems: { label: string; href: string }[] = [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Pokédex',
      href: '#',
    },
    {
      label: 'Legendaries',
      href: '#',
    },
    {
      label: 'Documentation',
      href: '#',
    },
  ];

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <Logo />
          <MainNavigation items={mainNavItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

import s from './Header.module.scss';

import { ReactComponent as PokeLogo } from './assets/PokeLogo.svg';

interface IntMenu {
  id: number;
  title: string;
  href: string;
}

const MENU: IntMenu[] = [
  { id: 1, title: 'Home', href: '#' },
  { id: 2, title: 'Pokédex', href: '#' },
  { id: 3, title: 'Legendaries', href: '#' },
  { id: 4, title: 'Documentation', href: '#' },
];

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.pokemonLogo}>
          <PokeLogo />
        </div>
        <nav className={s.menuWrap}>
          {MENU.map(({ id, title, href }) => (
            <a key={id} className={s.menuLink} href={href}>
              {title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

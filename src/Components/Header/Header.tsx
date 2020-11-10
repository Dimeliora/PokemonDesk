import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

import { ReactComponent as PokeLogo } from './assets/PokeLogo.svg';

interface HeaderProps {
  className?: string;
}

interface IntMenu {
  id: number;
  title: string;
  href: string;
}

const MENU: Array<IntMenu> = [
  { id: 1, title: 'Home', href: '/home' },
  { id: 2, title: 'Pokédex', href: '/pokedex' },
  { id: 3, title: 'Legendaries', href: '/legendaries' },
  { id: 4, title: 'Documentation', href: '/documentation' },
];

const Header: React.FC<HeaderProps> = ({ className = null }) => {
  return (
    <header className={cn(s.root, className)}>
      <div className={s.wrapper}>
        <div className={s.pokemonLogo}>
          <PokeLogo />
        </div>
        <nav className={s.menuWrap}>
          {MENU.map(({ id, title, href }) => (
            <Link key={id} className={s.menuLink} to={href}>
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { FC } from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import s from './Header.module.scss';

import { MAIN_MENU } from '../../Configs/routes';
import { ReactComponent as PokeLogo } from '../../Images/PokeLogo.svg';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = null }) => {
  const path = usePath();
  return (
    <header className={cn(s.root, className)}>
      <div className={s.wrapper}>
        <div className={s.pokemonLogo}>
          <PokeLogo />
        </div>
        <nav className={s.menuWrap}>
          {MAIN_MENU.map(({ title, href }) => (
            <A key={title} className={cn(s.menuLink, { [s.activeLink]: href === path })} href={href}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

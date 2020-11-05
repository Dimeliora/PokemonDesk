import React from 'react';
import s from './MainNavigation.module.scss';
import NavigationItem from '../NavigationItem';

type mainNavigationProps = {
  items: { label: string; href: string }[];
};

const MainNavigation = ({ items }: mainNavigationProps) => {
  return (
    <nav>
      <ul className={s.mainNavigationList}>
        {items.map(({ label, href }) => (
          <NavigationItem key={label} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;

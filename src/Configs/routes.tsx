import React from 'react';
import HomePage from '../Pages/HomePage';
import PokedexPage from '../Pages/PokedexPage';
import LegendariesPage from '../Pages/LegendariesPage';
import DocumentationPage from '../Pages/DocumentationPage';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IMainMenu {
  title: string;
  href: LinkEnum;
  component: () => JSX.Element;
}

export const MAIN_MENU: Array<IMainMenu> = [
  {
    title: 'Home',
    href: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    href: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    href: LinkEnum.LEGENDARIES,
    component: () => <LegendariesPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    href: LinkEnum.DOCUMENTATION,
    component: () => <DocumentationPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = MAIN_MENU.reduce((acc: IAccMenu, { href, component }) => {
  acc[href] = component;
  return acc;
}, {});

export default routes;

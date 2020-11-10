import React from 'react';
import HomePage from '../Pages/HomePage';
import PokedexPage from '../Pages/PokedexPage';
import LegendariesPage from '../Pages/LegendariesPage';
import DocumentationPage from '../Pages/DocumentationPage';

interface IMainMenu {
  title: string;
  href: string;
  component: () => JSX.Element;
}

export const MAIN_MENU: Array<IMainMenu> = [
  {
    title: 'Home',
    href: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    href: '/pokedex',
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    href: '/legendaries',
    component: () => <LegendariesPage title="Legendaries"/>,
  },
  {
    title: 'Documentation',
    href: '/documentation',
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

import React, { PropsWithChildren } from 'react';
import HomePage from '../Pages/HomePage';
import PokedexPage from '../Pages/PokedexPage';
import PokemonPage, { IPokemonPageProps } from '../Pages/PokemonPage';
import LegendariesPage from '../Pages/LegendariesPage';
import DocumentationPage from '../Pages/DocumentationPage';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  POKEMON = '/pokedex/:id',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IMainMenu {
  title: string;
  href: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
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

const SECONDARY_ROUTES: Array<IMainMenu> = [
  {
    title: 'Pokemon',
    href: LinkEnum.POKEMON,
    component: ({ id }: IPokemonPageProps) => <PokemonPage id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...MAIN_MENU, ...SECONDARY_ROUTES].reduce((acc: IAccMenu, { href, component }) => {
  acc[href] = component;
  return acc;
}, {});

export default routes;

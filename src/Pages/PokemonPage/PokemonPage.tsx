import React, { FC } from 'react';
import useGetData from '../../Hooks/useGetData';
import { IPokemons } from '../../Interfaces/apiDataInterface';
import s from './PokemonPage.module.scss';
import Loader from '../../Components/Loader';
import Footer from '../../Components/Footer';

import capitalize from '../../Utils/toCapitalizeFirstLetter';

export interface IPokemonPageProps {
  id: string | number;
}

const PokemonPage: FC<IPokemonPageProps> = ({ id }) => {
  const { data, isFetching, fetchError } = useGetData<IPokemons>('getPokemon', { id });
  const name = data?.name || '';

  return (
    <div className={s.root}>
      <div className={s.mock}>{isFetching ? <Loader /> : <span>This is {capitalize(name)} Page</span>}</div>
      <Footer />
    </div>
  );
};

export default PokemonPage;

import React, { FC } from 'react';
import cn from 'classnames';
import s from './Loader.module.scss';
import loaderImg from '../../Images/loader.gif';

interface ILoaderProps {
  classname?: string;
}

const Loader: FC<ILoaderProps> = ({ classname = null }) => {
  return (
    <div className={cn(s.loader, classname)}>
      <img className={s.loaderImage} src={loaderImg} alt="Pokeball" />
    </div>
  );
};

export default Loader;
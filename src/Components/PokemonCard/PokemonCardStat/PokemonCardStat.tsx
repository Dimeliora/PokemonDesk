import React, { FC } from 'react';
import cn from 'classnames';

import s from './PokemonCardStat.module.scss';

interface iPokemonCardStatProps {
  label: string;
  statValue: number;
  className?: string;
}

const PokemonCardStat: FC<iPokemonCardStatProps> = ({ label, statValue, className = null }) => {
  return (
    <div className={cn(s.statItem, className)}>
      <div className={s.statValue}>{statValue}</div>
      {label}
    </div>
  );
};

export default PokemonCardStat;

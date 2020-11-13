import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';

import s from './PokemonCardLabel.module.scss';

import BG_TYPES from '../BGConstants';

interface iPokemonCardLabelProps {
  type: string;
  className?: string;
}

const PokemonCardLabel: FC<iPokemonCardLabelProps> = ({ type, className = null }) => {
  const BGStyle: CSSProperties = {
    background: `${BG_TYPES[type]}`,
  };

  return (
    <span key={type} className={cn(s.label, className)} style={BGStyle}>
      {type}
    </span>
  );
};

export default PokemonCardLabel;

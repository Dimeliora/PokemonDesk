import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';

import s from './PokemonCardLabel.module.scss';

import { BG_TYPES } from '../BGConstants';

interface iPokemonCardLabelProps {
  type: string;
  className?: string;
}

const PokemonCardLabel: FC<iPokemonCardLabelProps> = ({ type, className = null }) => {
  const bgColor: number = BG_TYPES[type];
  const BGStyle: CSSProperties = {
    background: `#${bgColor.toString(16)}`,
  };

  return (
    <span key={type} className={cn(s.label, className)} style={BGStyle}>
      {type}
    </span>
  );
};

export default PokemonCardLabel;

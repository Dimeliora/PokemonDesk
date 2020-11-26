import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';
import s from './PokemonCardLabel.module.scss';
import BG_TYPES from '../../../Configs/bgConstants'

interface IPokemonCardLabelProps {
  type: string;
  className?: string;
}

const PokemonCardLabel: FC<IPokemonCardLabelProps> = ({ type, className = null }) => {
  const bgStyle: CSSProperties = {
    background: `${BG_TYPES[type]}`,
  };

  return (
    <span key={type} className={cn(s.label, className)} style={bgStyle}>
      {type}
    </span>
  );
};

export default PokemonCardLabel;

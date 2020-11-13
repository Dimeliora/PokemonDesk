import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';

import Heading from '../Heading';
import PokemonCardLabel from './PokemonCardLabel';
import PokemonCardStat from './PokemonCardStat';

import s from './PokemonCard.module.scss';

import BG_TYPES from './BGConstants';

interface iPokemonCardProps {
  name: string;
  attack: number;
  defense: number;
  types: Array<string>;
  img: string;
  className?: string;
}

const PokemonCard: FC<iPokemonCardProps> = ({ name, attack, defense, types, img, className = null }) => {
  const [firstType, secondType] = types;
  const bgFirstColor: string = BG_TYPES[firstType];
  const bgSecondColor: string = BG_TYPES[secondType] || BG_TYPES[firstType];
  const BGStyle: CSSProperties = {
    background: `linear-gradient(45deg, ${bgFirstColor} 0.15%, ${bgSecondColor} 100%)`,
  };

  return (
    <div className={cn(s.root, className)}>
      <div className={s.infoWrap}>
        <Heading type="h5" weight="bold" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <PokemonCardStat label="Attack" statValue={attack} />
          <PokemonCardStat label="Defense" statValue={defense} />
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <PokemonCardLabel key={type} type={type} />
          ))}
        </div>
      </div>
      <div className={s.pictureWrap} style={BGStyle}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;

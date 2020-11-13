import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';

import Heading from '../Heading';
import PokemonCardLabel from './PokemonCardLabel';
import PokemonCardStat from './PokemonCardStat';

import s from './PokemonCard.module.scss';
import { BG_TYPES, GRADIENT_DIFF } from './BGConstants';

interface iPokemonStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface iPokemonCardProps {
  name: string;
  stats: iPokemonStats;
  types: Array<string>;
  img: string;
  className?: string;
}

const PokemonCard: FC<iPokemonCardProps> = ({ name, stats, types, img, className = null }) => {
  const { attack, defense } = stats;

  const [firstType, secondType] = types;
  const bgFirstColor: number = BG_TYPES[firstType];
  const bgSecondColor: number = BG_TYPES[secondType] || BG_TYPES[firstType] - GRADIENT_DIFF;
  const BGStyle: CSSProperties = {
    background: `linear-gradient(45deg, #${bgFirstColor.toString(16)} 0.15%, #${bgSecondColor.toString(16)} 100%)`,
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

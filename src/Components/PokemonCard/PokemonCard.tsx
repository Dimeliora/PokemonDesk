import React, { CSSProperties, FC } from 'react';
import cn from 'classnames';
import s from './PokemonCard.module.scss';
import Heading from '../Heading';
import PokemonCardLabel from './PokemonCardLabel';
import PokemonCardStat from './PokemonCardStat';
import BG_TYPES from '../../Configs/bgConstants';

interface IPokemonCardProps {
  name: string;
  attack: number, 
  defense: number,
  types: Array<string>;
  img: string;
  className?: string;
}

const PokemonCard: FC<IPokemonCardProps> = ({ name, attack, defense, types, img, className = null }) => {
  let bgStyle: CSSProperties;
  if (types.length > 1) {
    bgStyle = {background: `linear-gradient(45deg, ${types.map(type => BG_TYPES[type]).join(', ')})`}
  } else {
    bgStyle = {background: `${BG_TYPES[types[0]]}`}
  }


  
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
      <div className={s.pictureWrap} style={bgStyle}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;

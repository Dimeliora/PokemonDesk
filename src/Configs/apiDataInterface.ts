interface IAPIData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: Array<IPokemons>;
}

export interface IPokemons {
  name_clean: string;
  abilities: Array<string>;
  stats: IPokemonStats;
  types: Array<string>;
  img: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface IPokemonStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export default IAPIData;

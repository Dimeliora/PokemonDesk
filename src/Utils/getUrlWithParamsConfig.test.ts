import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна: принимать два аргумента ("getPokemons" и пустой объект); вернуть объект с ключами protocol, host, pathname и query (пустым)', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemons',
      query: {},
    });
  });

  test('Должна: принимать два аргумента ("getPokemons" и { name: "Pikachu"}); вернуть объект с ключами protocol, host, pathname и query, равным {name: "Pikachu"}', () => {
    const url = getUrlWithParamsConfig('getPokemons', {name: 'Pikachu'});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemons',
      query: {name: 'Pikachu'},
    });
  });

  test('Должна: принимать два аргумента ("getPokemons" и { id: 25}); вернуть объект с ключами protocol, host, pathname и query (пустым)', () => {
    const url = getUrlWithParamsConfig('getPokemon', {id: 25});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemon/25',
      query: {},
    });
  });
});

interface IConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: IEndPoint;
  };
}

interface IEndPoint {
  [key: string]: {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    uri: {
      pathname: string;
    };
  };
}

const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/pokemons',
        },
      },
    },
  },
};

export default config;

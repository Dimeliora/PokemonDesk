import config from '../Configs/apiUrlConfig';

const getUrlWithParamsConfig = (endpoint: string, query: any) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].uri,
    query: {},
  };

  const queryToModify = { ...query };

  const pathname = Object.keys(queryToModify).reduce((acc, value) => {
    if (acc.includes(`{${value}}`)) {
      const result = acc.replace(`{${value}}`, queryToModify[value]);
      delete queryToModify[value];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = { ...queryToModify };

  return url;
};

export default getUrlWithParamsConfig;

import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const request = async (endpoint: string, query: object) => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};

export default request;

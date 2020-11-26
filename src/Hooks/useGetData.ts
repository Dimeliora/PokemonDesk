import { useState, useEffect } from 'react';
import request from '../Utils/request';
import IInitState from '../Configs/apiDataInterface';

const useGetData = (endpoint: string, query: object, initState: IInitState, deps: any[] = []) => {
  const [data, setData] = useState(initState);
  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setIsFetchError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const result = await request(endpoint, query);
        setData(result);
      } catch (err) {
        setIsFetchError(true);
      } finally {
        setIsFetching(false);
      }
    };

    getData();
  }, deps);

  return {
    data,
    isFetching,
    fetchError,
  };
};

export default useGetData;

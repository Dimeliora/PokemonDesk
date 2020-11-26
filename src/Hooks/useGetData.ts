import { useState, useEffect } from 'react';
import request from '../Utils/request';

const useGetData = <T>(endpoint: string, query: object, deps: any[] = []): { data: T | null; isFetching: boolean; fetchError: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [fetchError, setIsFetchError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsFetching(true);
      try {
        const result = await request<T>(endpoint, query);
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

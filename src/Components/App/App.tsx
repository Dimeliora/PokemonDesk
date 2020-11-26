import React, { FC } from 'react';
import { useRoutes } from 'hookrouter';
import routes from '../../Configs/routes';
import Header from '../Header';
import ErrorPage from '../../Pages/ErrorPage';

const App: FC = () => {
  const match = useRoutes(routes);
  
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <ErrorPage />
  );
};

export default App;
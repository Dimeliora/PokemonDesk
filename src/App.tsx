import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import s from './App.module.scss';
import HomePage from './Pages/HomePage';
import PokedexPage from './Pages/PokedexPage';
import ErrorPage from './Pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/pokedex" component={PokedexPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;

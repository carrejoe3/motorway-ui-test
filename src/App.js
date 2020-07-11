import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {

  return (
    <main>
      <Switch>
        <Route path="/" component={Gallery} exact />
      </Switch>
    </main>
  );
}

export default App;

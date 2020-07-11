import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Form from './components/Form';
import BottomNavbar from './components/BottomNavbar';
import './App.css';

const App = () => {

  return (
    <main>
      <Switch>
        <Route path="/" component={Gallery} exact />
        <Route path="/form" component={Form} exact />
      </Switch>
      <BottomNavbar />
    </main>
  );
}

export default App;

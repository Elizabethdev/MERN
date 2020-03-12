import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/tailwind.scss';
import Login from "./components/auth/login";
import NuevaCuenta from "./components/auth/nuevaCuenta";
import Books from "./components/books/books";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
 
library.add(fas,fab)

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/books" component={Books} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;

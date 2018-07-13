import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Wizard from './Component/Wizard/Wizard';
import Header from './Component/Header/Header';

import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Dashboard />
        <Wizard /> */}
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;

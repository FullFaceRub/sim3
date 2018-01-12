import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;

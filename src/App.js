import React from 'react';
import './App.css';
import Home from './cmps/home/Home';
import {Switch,Route} from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return(
      <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
    )
  }
}


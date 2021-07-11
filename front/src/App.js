import './App.css';
import {Switch,Route} from 'react-router-dom';
import React,{useState} from 'react';
import Home from './pages/Home/index.jsx';

function App() {
  return (
    <>
        <Switch>
          <Route path="/" component={Home}>

          </Route>
        </Switch>
    </>
  );
}

export default App;

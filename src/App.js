import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import StartGame from './components/StartGame'
import Questions from './components/Questions'
import Category from './components/category/Category'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StartGame} />
        <Route path="/questions" exact component={Questions} />
        <Route path="/category" exact component={Category} />
      </Switch>
    </Router>
  );
}

export default App;

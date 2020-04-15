import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FetchRandomMovieStar from './components/FetchRandomMovieStar';
import GameOver from './components/GameOver';


function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage}/>
      <Route path='/guesswho' component={FetchRandomMovieStar}/>
      <Route path='/gameover' component={GameOver}/>
    </Router>
  );
}

export default App;

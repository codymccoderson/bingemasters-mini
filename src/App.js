import React from 'react';
import FetchRandomMovieStar from './components/FetchRandomMovieStar';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Bingemasters</h1>
      <FetchRandomMovieStar/>
      <Timer startCount='15'/>
    </div>
  );
}

export default App;

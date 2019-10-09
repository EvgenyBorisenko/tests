import React from 'react';
import s from './App.module.css';
import GameBoard from './Components/GameBoard/GameBoard';

function App() {
  return (
    <div className={s.containerApp}>
      <GameBoard />
    </div>
  );
}

export default App;

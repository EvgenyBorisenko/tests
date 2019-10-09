import React, { Component } from 'react';
import s from './gameBoard.module.css';
// import Fild from '../Fild/Fild';

const gameFilds = [
  { coordinates: 'a1' },
  { coordinates: 'b1' },
  { coordinates: 'c1' },
  { coordinates: 'a2' },
  { coordinates: 'b2' },
  { coordinates: 'c2' },
  { coordinates: 'c1' },
  { coordinates: 'c2' },
  { coordinates: 'c3' },
];

const fildsArr = gameFilds.map(filed => (
  <div className={s.gameFiled}>{filed.coordinates}</div>
));

class GameBoard extends Component {
  state = {};

  render() {
    return (
      <div className={s.gameBoard}>
        <div className={s.box}>{fildsArr}</div>
      </div>
    );
  }
}

export default GameBoard;

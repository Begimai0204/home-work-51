import {useState} from 'react';
import './App.css';
import './Ball.tsx';
import Ball from './Ball.tsx';

function App() {
  interface Props {
    number: number;
  }

  const [ball, setBall] = useState<Props[]>([
    {number: 5},
    {number: 11},
    {number: 16},
    {number: 23},
    {number: 32},
  ])
  const generateUniqueRandomNumbers = () => {
    const newNumbers = [];
    const existingNumbers = ball.map((num) => num.number);

    for (let i = 0; i < ball.length; i++) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      } while (existingNumbers.includes(randomNumber));

      newNumbers.push(randomNumber);
      existingNumbers.push(randomNumber);
    }

    return newNumbers;
  };


  const changeNumber = () => {
    const newNumbers = generateUniqueRandomNumbers();
    newNumbers.sort((a, b) => a - b)
    setBall([
      {number: newNumbers[0]},
      {number: newNumbers[1]},
      {number: newNumbers[1]},
      {number: newNumbers[1]},
      {number: newNumbers[2]},
      {number: newNumbers[3]},
      {number: newNumbers[4]},
    ]);

  }
  return (
      <div className="App">
        <h1>Lottery</h1>
        <div className="balls">
          <Ball number={ball[0].number}/>
          <Ball number={ball[1].number}/>
          <Ball number={ball[2].number}/>
          <Ball number={ball[3].number}/>
          <Ball number={ball[4].number}/>
        </div>
        <div>
          <button onClick={changeNumber}>New numbers</button>
        </div>
      </div>
  )
}

export default App

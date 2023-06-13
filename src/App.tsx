import React from 'react';
import logo from './logo.svg';
import './App.css';
import monotoneChainConvexHull from 'monotone-chain-convex-hull'
type Point = [number, number];

const App = () => {
  let aa: Point[] = [
    [1, 1],
    [3, 0],
    [2, 1],
    [3, 2],
    [1, 2],
    [0, 2],
    [0, 0],
  ];
  let aa1: Point[] = [
    [0, 3],
    [2, 3],
    [1, 1],
    [2, 1],
    [3, 0],
    [0, 0],
    [3, 3],
  ];

  let aa2: Point[] = [
    [0, 0],
    [0, 4],
    [-4, 0],
    [5, 0],
    [0, -6],
    [1, 0]
  ];
  let aa3: Point[] = [
    [0, 0],
    [1, -4],
    [-1, -5],
    [-5, -3],
    [-3, -1],
    [-1, -3],
    [-2, -2], 
    [-1, -1], 
    [-2, -1], 
    [-1, 1]
  ];

  let a = monotoneChainConvexHull(aa);
  let a1 = monotoneChainConvexHull(aa1);
  let a2 = monotoneChainConvexHull(aa2);
  let a3 = monotoneChainConvexHull(aa3);
  // console.log('First', a);
  // console.log('Second', a1);
  // console.log('Third', a2);
  console.log('Four', a3);

  return (
    <div className="App">
    </div>
  );
}

export default App;

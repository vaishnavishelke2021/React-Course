import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    console.log("clicked", index);
    let copyState = [...state];
    setState(copyState);
    copyState[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    let winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let w of winner) {
      const [a, b, c] = w;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  function handlePlayAgain() {
    setState(Array(9).fill(null));
  }

  return (
    <div className="board">
      {isWinner ? (
        <div className="winnerBox">
          <h2>
            {" "}
            &nbsp;<span style={{ color: "green" }}>{isWinner} Won </span> The
            Game!&nbsp;
          </h2>
          <button className="button" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      ) : (
        <>
          <h1 className="turn">Player {isXTurn ? "X's" : "O's"} Turn!</h1>
          <div className="row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default Board;

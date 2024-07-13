import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Block from "./components/block";

function App() {
  const [cellValue, setCellValue] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  const checkWinner = () => {
    for (let row = 0; row < 9; row = row + 3) {
      if (
        cellValue[row] != null &&
        cellValue[row] === cellValue[row + 1] &&
        cellValue[row + 1] === cellValue[row + 2]
      ) {
        return true;
      }
    }
    for (let column = 0; column < 3; column++) {
      if (
        cellValue[column] != null &&
        cellValue[column] === cellValue[column + 3] &&
        cellValue[column + 3] === cellValue[column + 6]
      ) {
        return true;
      }
    }
    if (
      cellValue[0] != null &&
      cellValue[0] === cellValue[4] &&
      cellValue[4] === cellValue[8]
    )
      return true;
    if (
      cellValue[2] != null &&
      cellValue[2] === cellValue[4] &&
      cellValue[4] === cellValue[6]
    )
      return true;
    return false;
  };

  const handleOnClick = (index: number) => {
    if (cellValue[index] != null) return;
    if (!checkWinner()) {
      cellValue[index] = player;
      setPlayer(player === "X" ? "O" : "X");
    }
    if (checkWinner()) {
      alert(`${player} won the game`);
    }
  };

  console.log("state", cellValue);
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Block onClick={() => handleOnClick(0)} value={cellValue[0]} />
          <Block onClick={() => handleOnClick(1)} value={cellValue[1]} />
          <Block onClick={() => handleOnClick(2)} value={cellValue[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleOnClick(3)} value={cellValue[3]} />
          <Block onClick={() => handleOnClick(4)} value={cellValue[4]} />
          <Block onClick={() => handleOnClick(5)} value={cellValue[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleOnClick(6)} value={cellValue[6]} />
          <Block onClick={() => handleOnClick(7)} value={cellValue[7]} />
          <Block onClick={() => handleOnClick(8)} value={cellValue[8]} />
        </div>
      </div>
    </div>
  );
}

export default App;

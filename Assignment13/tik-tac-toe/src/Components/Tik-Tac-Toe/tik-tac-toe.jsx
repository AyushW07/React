import React, { useState } from "react";
import "./tik-tac-toe.css";

const TikTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleSquareClick = (index) => {
    if (board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  };

  const checkWinner = (board) => {
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningMoves.length; i++) {
      const [a, b, c] = winningMoves[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return "";
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("X");
    setWinner("");
  };

  return (
    <div className="container">
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next player: ${player}`}
      </div>
      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleSquareClick(index)}>
            {square}
          </button>
        ))}
      </div>
      {winner && (
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      )}
    </div>
  );
};

export default TikTacToe;

import React, { Component } from "react";

/** React Component used to formulate all 9 squares of the game. */
function Square(props) {
  return (
    <div className="square" onClick={() => props.click()}>
      {props.move === 0 ? "" : props.move === 1 ? "X" : "O"}
    </div>
  );
}

/**React component used to display the winner of a round. */
function Round(props) {
  return (
    <div className="round">
      Round {props.round}: {props.winner === 1 ? "X" : "O"}
    </div>
  );
}

/**React Component used to forumate the tic-tac-toe page. */
class TicTacToePage extends Component {
  state = {
    /**
     * The game state refers to the current state of a game at any given time. If a user from either side clicks a box, the game state will change to represent that click.
     * 0 = Square not filled.
     * 1 = X
     * 2 = O
     */
    gameState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    /**Whose turn it is.*/
    turn: "X",
    /* The winner of the round. */
    winner: null,
    /* The storage structure used to temporarily store all recorded tic-tac-toe round, this will be wiped if the website is reloaded. */
    rounds: [
      {
        round: 1,
        winner: "X"
      }
    ],
    /* Keeps track of what round the user(s) are on */
    round: 1
  };

  /** Attempts to caluclate the winner using the game state after every move. If a winner is determined the game will log a record, using the React Component, and reset the game. */
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  /* Used to signify whose turn it is*/
  renderTurn() {
    let turn = this.state.turn;
    let entityX = document.getElementById("entryX");
    let entityO = document.getElementById("entryO");

    if (turn === "X") {
      entityX.style.background = "lightpink";
      entityO.style.background = "purple";
    } else {
      entityO.style.background = "lightpink";
      entityX.style.background = "purple";
    }
  }

  /* Invoked when a user clicks a square. */
  clickedSquare(squareId) {
    let copy = this.state;
    if (copy.gameState[squareId] !== 0) return;

    copy.gameState[squareId] = copy.turn === "X" ? 1 : 2;
    copy.turn = copy.turn === "X" ? "O" : "X";
    this.renderTurn();
    let winner = this.calculateWinner(copy.gameState);
    if (winner !== null) {
      console.log(`Winner: ${winner}.`);
      copy.round += 1;

      copy.rounds.push({ round: copy.round, winner: winner });
      copy.gameState = [0, 0, 0, 0, 0, 0, 0, 0, 0];

      if (copy.round >= 5) {
        alert(`The overrall winner is ${this.getModeWinner(copy) === 'D' ? 'nobody! It was a draw.' : this.getModeWinner(copy)}.`);
        copy.rounds = [];
        copy.round = 1;
      }
    }
    this.setState(copy);
  }

  getModeWinner(copy) {
    let x = 0;
    let o = 0;

    for (let i = 0; i < copy.rounds.length; i++) {
      const round = copy.rounds[i];

      if (round.winner === 1) {
        ++x;
      } else {
        ++o;
      }
    }

    return x > o ? "X" : x === o ? "D" : "O";
  }

  /* Renders all recorded rounds. */
  renderRounds() {
    return this.state.rounds.map(o => (
      <Round round={o.round} winner={o.winner} />
    ));
  }

  /** Function used to render the page. */
  render() {
    return (
      <div id="tic-tac-toe">
        <div id="wrapper">
          <div id="turn" className="inline">
            <div className="entry" id="entryX">
              X
            </div>
            <div className="entry" id="entryO">
              O
            </div>
          </div>
          <div id="gameboard" className="inline">
            <Square
              move={this.state.gameState[0]}
              click={() => this.clickedSquare(0)}
            />
            <Square
              move={this.state.gameState[1]}
              click={() => this.clickedSquare(1)}
            />
            <Square
              move={this.state.gameState[2]}
              click={() => this.clickedSquare(2)}
            />
            <Square
              move={this.state.gameState[3]}
              click={() => this.clickedSquare(3)}
            />
            <Square
              move={this.state.gameState[4]}
              click={() => this.clickedSquare(4)}
            />
            <Square
              move={this.state.gameState[5]}
              click={() => this.clickedSquare(5)}
            />
            <Square
              move={this.state.gameState[6]}
              click={() => this.clickedSquare(6)}
            />
            <Square
              move={this.state.gameState[7]}
              click={() => this.clickedSquare(7)}
            />
            <Square
              move={this.state.gameState[8]}
              click={() => this.clickedSquare(8)}
            />
          </div>
          <div id="scoreboard" className="inline">
            {this.renderRounds()}
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToePage;

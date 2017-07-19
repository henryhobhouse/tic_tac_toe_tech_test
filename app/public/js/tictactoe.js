'use strict';

// game logic controller for tic tac toe
function TicTacToe () {
  this.xIsNext = true;
  this.winner = null;
  this.board = new Board();
  this.winCombo = new WinCombo();
}

// Controls player turn
TicTacToe.prototype.playTurn = function(squareIndex) {
  if (this.turnAvailable(squareIndex)) return;
  this.changeState(squareIndex);
  this.winner = this.winCombo.check(this.board.squares);
  this.swapPlayer();
};

// Changes player go
TicTacToe.prototype.swapPlayer = function() {
  this.xIsNext = !this.xIsNext;
};

// updates state of square with whose turn it is
TicTacToe.prototype.changeState = function(squareIndex) {
  this.board.squares[squareIndex] = this.xIsNext ? 'X' : 'O';
};

// checks if game finished or square already used
TicTacToe.prototype.turnAvailable = function(squareIndex) {
  return this.board.squares[squareIndex] !== null || this.winner !== null;
};

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
  if (this.notAbleToPlay(squareIndex)) return;
  this.updateSquareState(squareIndex);
  this.winner = this.winCombo.check(this.board.squares);
  this.swapPlayer();
};

// Changes player go
TicTacToe.prototype.swapPlayer = function() {
  this.xIsNext = !this.xIsNext;
};

// updates state of square with whose turn it is
TicTacToe.prototype.updateSquareState = function(squareIndex) {
  var newState = this.xIsNext ? 'X' : 'O';
  this.board.updateSquare(squareIndex, newState);
};

// checks if game finished or square already used
TicTacToe.prototype.notAbleToPlay = function(squareIndex) {
  return this.board.getSquare(squareIndex) !== null || this.winner !== null;
};

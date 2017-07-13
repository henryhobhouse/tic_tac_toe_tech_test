'use strict';

// game logic controller for tic tac toe
function TicTacToe () {
  this.xIsNext = true;
  this.winner = null;
  this.board = new Board();
  this.winCombo = new WinCombo();
}

// Controls player turn
TicTacToe.prototype.playTurn = function(sqr) {
  if (this.turnAvailable(sqr)) return;
  this.changeState(sqr);
  this.winner = this.winCombo.check(this.board.squares);
  this.swapPlayer();
};

// Changes player go
TicTacToe.prototype.swapPlayer = function() {
  this.xIsNext = this.xIsNext === true ? false : true;
};

// updates state of square
TicTacToe.prototype.changeState = function(sqr) {
  this.board.squares[sqr] = this.xIsNext === true ? 'X' : 'O';
};

// checks if game finished
TicTacToe.prototype.turnAvailable = function(sqr) {
  return this.board.squares[sqr] !== null || this.winner !== null;
};

'use strict';

function TicTacToe () {
  this.xIsNext = true;
  this.squares = [];
  this.board();
}

TicTacToe.prototype.board = function() {
  var i = '';
  for (i = 0; i < 9; i++) {
    var sqr = new this.square();
    this.squares.push(sqr);
  }
};

// Changes player go
TicTacToe.prototype.swap_player = function() {

};

// Controls player turn
TicTacToe.prototype.turn = function() {

};

// manipulates state of square
TicTacToe.prototype.change_state = function() {

};

// checks if winning combination of turns has occured
TicTacToe.prototype.check_winner = function() {

};

TicTacToe.prototype.square = function() {
  this.state = null;
};

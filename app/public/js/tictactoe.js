'use strict';

function TicTacToe () {
  this.xIsNext = true;
  this.squares = [];
  this.board();
}

TicTacToe.prototype.board = function() {
  for (let i = 0; i < 9; i++) {
    this.squares.push(null);
  }
};

// Controls player turn
TicTacToe.prototype.play_turn = function(sqr) {
  
};

// Changes player go
TicTacToe.prototype.swap_player = function() {
  this.xIsNext = this.xIsNext === true ? false : true;
};

// manipulates state of square
TicTacToe.prototype.change_state = function(sqr) {
  this.squares[sqr] = this.xIsNext === true ? 'X' : 'O';
};

// checks if winning combination of turns has occured
TicTacToe.prototype.check_winner = function() {
  var win_comb = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];
  for (let i = 0; i < win_comb.length; i++) {
    var [a, b, c] = win_comb[i];
    if(this.squares[a] === this.squares[b] &&
       this.squares[c] === this.squares[b] &&
       this.squares[a] !== null) {
      return this.squares[a];
    }
  }
  return null;
};

module.exports = TicTacToe;

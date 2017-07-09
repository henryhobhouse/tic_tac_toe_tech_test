'use strict';

function TicTacToe () {
  this.xIsNext = true;
  this.winner = null;
  this.board = new Board();
}

// Controls player turn
TicTacToe.prototype.play_turn = function(sqr) {
  if (this.board.squares[sqr] !== null || this.winner !== null) return;
  this.change_state(sqr);
  this.winner = this.check_winner();
  this.swap_player();
};

// Changes player go
TicTacToe.prototype.swap_player = function() {
  this.xIsNext = this.xIsNext === true ? false : true;
};

// updates state of square
TicTacToe.prototype.change_state = function(sqr) {
  this.board.squares[sqr] = this.xIsNext === true ? 'X' : 'O';
};

// checks if winning combination of moves has occured
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
    if(this.board.squares[a] === this.board.squares[b] &&
       this.board.squares[c] === this.board.squares[b] &&
       this.board.squares[a] !== null) {
      return this.board.squares[a];
    }
  }
  return null;
};

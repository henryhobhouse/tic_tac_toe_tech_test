'use strict';

function Board () {
  this.squares = [];
  this.create();
}

// Creates array of objects interpreted as playing board
Board.prototype.create = function() {
  for (let i = 0; i < 9; i++) {
    this.squares.push(null);
  }
};

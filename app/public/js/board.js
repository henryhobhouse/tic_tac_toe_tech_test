'use strict';

function Board () {
  this.size = 9;
  this.squares = [];
  this.create();
}

// Creates array of objects interpreted as playing board
Board.prototype.create = function() {
  for (let i = 0; i < this.size; i++) {
    this.squares.push(null);
  }
};

'use strict';

// Creates array of objects interpreted as playing board
function Board () {
  var SIZE = 9;
  this.squares = new Array(SIZE).fill(null);
}

Board.prototype.updateSquare = function(squareIndex, newState) {
  this.squares[squareIndex] = newState;
};

Board.prototype.getSquare = function(squareIndex) {
  return this.squares[squareIndex];
};

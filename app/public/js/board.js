'use strict';

// Creates array of objects interpreted as playing board
function Board () {
  var SIZE = 9;
  this.squares = [];

  for (let i = 0; i < SIZE; i++) {
    this.squares.push(null);
  }
}

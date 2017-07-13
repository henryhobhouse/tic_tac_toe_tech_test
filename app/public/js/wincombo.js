'use strict';

// checks if winning combination of moves has occured
function WinCombo() {
  this.WIN_COMB = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ];
}

WinCombo.prototype.check = function(squares) {
  for (let i = 0; i < this.WIN_COMB.length; i++) {
    var [a, b, c] = this.WIN_COMB[i];
    if(squares[a] === squares[b] &&
       squares[c] === squares[b] &&
       squares[a] !== null) {
      return squares[a];
    }
  }
  return null;
};

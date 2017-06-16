describe("TicTacToe", function() {
  var TicTacToe = require('../../app/public/js/tictactoe.js');
  var TicTacToe;

  beforeEach(function() {
    ttt = new TicTacToe();
  });

  it('It initializes on xIsNext as ture', function () {
    expect(ttt.xIsNext).toEqual(true);
  });

  it('It creates a board with 9 square objects', function() {
    expect(ttt.squares.length).toEqual(9);
    // expect(ttt.squares[0])toEqual(ttt.square);
  });

  it('Each square has a instance vairbable, state, set as null', function() {
    expect(ttt.squares[0].state).toEqual(null);
  });
});

var rewire = require("rewire");

describe("TicTacToe", function() {
  var tttboard = rewire('../../app/public/js/board.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      Board = tttboard.__get__('Board');
      board = new Board
    });

    it('It creates a array with 9 values', function() {
      expect(board.squares.length).toEqual(9);
    });

    it('Each array value is set to null on initialization', function() {
      const ary = new Array(9).fill(null);
      expect(board.squares).toEqual(ary);
    });
  });
});

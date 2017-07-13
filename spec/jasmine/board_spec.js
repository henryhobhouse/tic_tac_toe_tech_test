var rewire = require("rewire");

describe("Board", function() {
  var ttt_board = rewire('../../app/public/js/board.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      Board = ttt_board.__get__('Board');
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

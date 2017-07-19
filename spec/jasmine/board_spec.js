var rewire = require("rewire");

describe("Board", function() {
  var boardModule = rewire('../../app/public/js/board.js');

  describe('Post initialization', function() {
    var Board;
    var board;

    beforeEach(function() {
      Board = boardModule.__get__('Board');
      board = new Board
    });

    it('It creates a array with 9 values', function() {
      expect(board.squares.length).toEqual(9);
    });

    it('Each array value is set to null on initialization', function() {
      const ary = new Array(9).fill(null);
      expect(board.squares).toEqual(ary);
    });

    it('getSquare method will return correct square', function() {
      board.squares[3] = 'gettest';
      expect(board.getSquare(3)).toEqual('gettest');
    });

    it('updateSquare method will update correct square', function() {
      board.updateSquare(5, 'updatetest')
      expect(board.squares[5]).toEqual('updatetest');
    });
  });
});

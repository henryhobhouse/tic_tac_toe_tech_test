describe("TicTacToe", function() {
  var TicTacToe = require('../../app/public/js/tictactoe.js');
  var TicTacToe;

  describe('Post initialization', function() {
    beforeEach(function() {
      ttt = new TicTacToe();
    });

    it('It initializes on xIsNext as ture', function () {
      expect(ttt.xIsNext).toBeTruthy();
    });

    it('It creates a array with 9 values', function() {
      expect(ttt.squares.length).toEqual(9);
    });

    it('Each array value is set to null on initialization', function() {
      const ary = new Array(9).fill(null);
      expect(ttt.squares).toEqual(ary);
    });

    it('swap players changes xIsTrue', function() {
      ttt.swap_player();
      expect(ttt.xIsNext).toBeFalsy();
    });

    it('returns winner horizontal line', function() {
      ttt.squares[0] = ttt.squares[1] = ttt.squares[2] = 'X';
      expect(ttt.check_winner()).toEqual('X');
    });

    it('returns winner vertical line', function() {
      ttt.squares[2] = ttt.squares[5] = ttt.squares[8] = 'X';
      expect(ttt.check_winner()).toEqual('X');
    });

    it('returns winner diaganal line', function() {
      ttt.squares[6] = ttt.squares[4] = ttt.squares[2] = 'X';
      expect(ttt.check_winner()).toEqual('X');
    });

    it('returns no winner upon no rows', function() {
      ttt.squares[6] = ttt.squares[3] = ttt.squares[2] = 'X';
      expect(ttt.check_winner()).toBeNull();
    });

    it('returns no winner on mixed rows', function() {
      ttt.squares[0] = ttt.squares[1] = 'X';
      ttt.squares[2] = 'O';
      expect(ttt.check_winner()).toBeNull();
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var square_test = 2;
      ttt.change_state(square_test);
      expect(ttt.squares[2]).toEqual('X');
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var square_test = 2;
      ttt.swap_player();
      ttt.change_state(square_test);
      expect(ttt.squares[2]).toEqual('O');
    });
  });
});

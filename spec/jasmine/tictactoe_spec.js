var rewire = require("rewire");

describe("TicTacToe", function() {
  var tictactoe = rewire('../../app/public/js/tictactoe.js');
  var board = rewire('../../app/public/js/board.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      TicTacToe = tictactoe.__get__('TicTacToe');
      Board = board.__get__('Board');
      ttt = new TicTacToe
    });

    it('It initializes on xIsNext as ture', function () {
      expect(ttt.xIsNext).toBeTruthy();
    });

    it('swap players changes xIsTrue', function() {
      ttt.swap_player();
      expect(ttt.xIsNext).toBeFalsy();
    });

    it('returns winner horizontal line', function() {
      ttt.board.squares[0] = ttt.board.squares[1] = ttt.board.squares[2] = 'X';
      expect(ttt.check_winner()).toEqual('X');
    });

    it('returns winner vertical line', function() {
      ttt.board.squares[2] = ttt.board.squares[5] = ttt.board.squares[8] = 'X';
      expect(ttt.check_winner()).toEqual('X');
    });

    it('returns winner diaganal line', function() {
      ttt.board.squares[6] = ttt.board.squares[4] = ttt.board.squares[2] = 'X';
      expect(ttt.check_winner()).toEqual('X');
    });

    it('returns no winner upon no rows', function() {
      ttt.board.squares[6] = ttt.board.squares[3] = ttt.board.squares[2] = 'X';
      expect(ttt.check_winner()).toBeNull();
    });

    it('returns no winner on mixed rows', function() {
      ttt.board.squares[0] = ttt.board.squares[1] = 'X';
      ttt.board.squares[2] = 'O';
      expect(ttt.check_winner()).toBeNull();
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var square_test = 2;
      ttt.change_state(square_test);
      expect(ttt.board.squares[2]).toEqual('X');
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var square_test = 2;
      ttt.swap_player();
      ttt.change_state(square_test);
      expect(ttt.board.squares[2]).toEqual('O');
    });

    it('play turn changes state of choosen square and swaps player', function() {
      ttt.play_turn(2);
      expect(ttt.board.squares[2]).toEqual('X');
      expect(ttt.xIsNext).toBeFalsy();
    })
  });
});

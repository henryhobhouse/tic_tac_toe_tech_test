var rewire = require("rewire");

describe("TicTacToe", function() {
  var tictactoeModule = rewire('../../app/public/js/tictactoe.js');
  var boardModule = rewire('../../app/public/js/board.js');
  var wincomboModule = rewire('../../app/public/js/wincombo.js');


  describe('Post initialization', function() {
    var TicTacToe;
    var tictactoe;

    beforeEach(function() {
      TicTacToe = tictactoeModule.__get__('TicTacToe');
      Board = boardModule.__get__('Board');
      WinCombo = wincomboModule.__get__('WinCombo');
      tictactoe = new TicTacToe;
    });

    it('It initializes on xIsNext as ture', function () {
      expect(tictactoe.xIsNext).toBeTruthy();
    });

    it('swap players changes xIsTrue', function() {
      tictactoe.swapPlayer();
      expect(tictactoe.xIsNext).toBeFalsy();
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var squareTest = 2;
      tictactoe.updateSquareState(squareTest);
      expect(tictactoe.board.squares[2]).toEqual('X');
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var squareTest = 2;
      tictactoe.swapPlayer();
      tictactoe.updateSquareState(squareTest);
      expect(tictactoe.board.squares[2]).toEqual('O');
    });

    it('play turn changes state of choosen square and swaps player', function() {
      tictactoe.playTurn(2);
      expect(tictactoe.board.squares[2]).toEqual('X');
      expect(tictactoe.xIsNext).toBeFalsy();
    })

    it('wins when one player has a whole row', function() {
      tictactoe.playTurn(0);
      tictactoe.playTurn(4);
      tictactoe.playTurn(1);
      tictactoe.playTurn(5);
      tictactoe.playTurn(2);
      expect(tictactoe.winner).toEqual('X');
    })

    it('wins when one player has a whole column', function() {
      tictactoe.playTurn(0);
      tictactoe.playTurn(1);
      tictactoe.playTurn(3);
      tictactoe.playTurn(4);
      tictactoe.playTurn(6);
      expect(tictactoe.winner).toEqual('X');
    })

    it('wins when one player has a whole column', function() {
      tictactoe.playTurn(0);
      tictactoe.playTurn(1);
      tictactoe.playTurn(4);
      tictactoe.playTurn(5);
      tictactoe.playTurn(8);
      expect(tictactoe.winner).toEqual('X');
    })
  });
});

var rewire = require("rewire");

describe("TicTacToe", function() {
  var tictactoe = rewire('../../app/public/js/tictactoe.js');
  var board = rewire('../../app/public/js/board.js');
  var wincombo = rewire('../../app/public/js/wincombo.js');


  describe('Post initialization', function() {
    beforeEach(function() {
      TicTacToe = tictactoe.__get__('TicTacToe');
      Board = board.__get__('Board');
      WinCombo = wincombo.__get__('WinCombo');
      ttt = new TicTacToe
    });

    it('It initializes on xIsNext as ture', function () {
      expect(ttt.xIsNext).toBeTruthy();
    });

    it('swap players changes xIsTrue', function() {
      ttt.swapPlayer();
      expect(ttt.xIsNext).toBeFalsy();
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var squareTest = 2;
      ttt.changeState(squareTest);
      expect(ttt.board.squares[2]).toEqual('X');
    });

    it("'square' value in array changes to 'X' on first click", function() {
      var squareTest = 2;
      ttt.swapPlayer();
      ttt.changeState(squareTest);
      expect(ttt.board.squares[2]).toEqual('O');
    });

    it('play turn changes state of choosen square and swaps player', function() {
      ttt.playTurn(2);
      expect(ttt.board.squares[2]).toEqual('X');
      expect(ttt.xIsNext).toBeFalsy();
    })

    it('wins when one player has a whole row', function() {
      ttt.playTurn(0);
      ttt.playTurn(4);
      ttt.playTurn(1);
      ttt.playTurn(5);
      ttt.playTurn(2);
      expect(ttt.winner).toEqual('X');
    })

    it('wins when one player has a whole column', function() {
      ttt.playTurn(0);
      ttt.playTurn(1);
      ttt.playTurn(3);
      ttt.playTurn(4);
      ttt.playTurn(6);
      expect(ttt.winner).toEqual('X');
    })

    it('wins when one player has a whole column', function() {
      ttt.playTurn(0);
      ttt.playTurn(1);
      ttt.playTurn(4);
      ttt.playTurn(5);
      ttt.playTurn(8);
      expect(ttt.winner).toEqual('X');
    })
  });
});

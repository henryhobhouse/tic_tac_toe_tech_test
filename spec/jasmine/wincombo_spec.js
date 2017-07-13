var rewire = require("rewire");

describe("WinCobo", function() {
  var ttt_win_combo = rewire('../../app/public/js/wincombo.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      WinCombo = ttt_win_combo.__get__('WinCombo');
      winCombo = new WinCombo
      squares = [null,null,null,null,null,null,null,null,null];
    });

    it('returns winner horizontal line', function() {
      squares[0] = squares[1] = squares[2] = 'X';
      expect(winCombo.check(squares)).toEqual('X');
    });

    it('returns winner vertical line', function() {
      squares[2] = squares[5] = squares[8] = 'X';
      expect(winCombo.check(squares)).toEqual('X');
    });

    it('returns winner diaganal line', function() {
      squares[6] = squares[4] = squares[2] = 'X';
      expect(winCombo.check(squares)).toEqual('X');
    });

    it('returns no winner upon no rows', function() {
      squares[6] = squares[3] = squares[2] = 'X';
      expect(winCombo.check(squares)).toBeNull();
    });

    it('returns no winner on mixed rows', function() {
      squares[0] = squares[1] = 'X';
      squares[2] = 'O';
      expect(winCombo.check(squares)).toBeNull();
    });
  });
});

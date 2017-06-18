var tictactoe = new TicTacToe

function ready(fn) {

  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var squares =  document.querySelectorAll('.square');
  window['squaresOnLoad'](squares);
});

function squaresOnLoad(squares) {
  squares.forEach(function(element) {
    element.addEventListener('click', function(evt) {
      var squareId = evt.target.dataset.id;
      tictactoe.play_turn(squareId);
      squares[squareId].innerHTML = tictactoe.squares[squareId];
    });
  });
}

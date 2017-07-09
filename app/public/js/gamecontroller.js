var tictactoe = new TicTacToe;
// Checks to see if window fully loads before calling ready function
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Upon window load calls function to create dynamic content
ready(function() {
  var squares =  document.querySelectorAll('.square');
  displayStatus();
  window['squaresOnLoad'](squares);
});

// listens for click on squares and updates content and status accordingly
function squaresOnLoad(squares) {
  squares.forEach(function(element) {
    element.addEventListener('click', function(evt) {
      var squareId = evt.target.dataset.id;
      tictactoe.play_turn(squareId);
      squares[squareId].innerHTML = tictactoe.board.squares[squareId];
      displayStatus();
    });
  });
}

// displays game status and is called after each click
function displayStatus() {
  var status = document.querySelector('.status');
  if (tictactoe.winner === null) {
    status.innerHTML= 'CURRENT PLAYER IS: ' + (tictactoe.xIsNext ? 'X' : 'O');
  } else {
    status.innerHTML= 'GAME OVER. WINNER IS: ' + tictactoe.winner;
  }
}

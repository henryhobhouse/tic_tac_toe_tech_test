Tic Tac Toe Tech Test
=====================


* A simple game of TicTacToe (noughts and crosses) app that can be interacted with within a web browser.
* Written in pure Javascript using a TDD approach. The app is capable a two player game that declares the winner.
* The app is setup on a node server enviroment using the express framework for routing. This setup was purely to facilitate feature testing.

## Quick Start

The app is interacted using a browser. The following instructions are a simple method to start.

* Open console/terminal and navigate to root of the app.
* install node if you haven't already done so. [HOW TO INSTALL NODE](https://docs.npmjs.com/getting-started/installing-node)
* 'npm install' - install required dependencies
* 'npm test' - show passing tests
* 'npm start' - start server
* '[http://localhost:3000](http://localhost:3000)' - visit app index
* PLAY GAME!

### Tests

Tests can be run by navigating to the root of the app using terminal/console. Run "npm test". If this fails then run "npm install" and try again.

## Notes on functionality

The app was built with the game logic first and the DOM controller second. Each was written in pure javascript with no libaries or frameworks leaving the code easy to read without having to learn how a particuar framework operates.

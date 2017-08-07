
var TicTacToe = functoin() {
  var methods = Object.create(gameMethods);
  methods.winner = false;
  methods.currentPlayer = 'X';
  methods.moveCount = 0;
  methods.board = [
    [, , ],
    [, , ],
    [, , ]
  ];

  while(this.winner !== true) {
    playersMove();
  }

  return;
}

var gameMethods = function() {
  checkWinner: function(board) {
    if(this.board[0][0] === this.board[0][1] === this.board[0][2] && (this.board[0][0] !== undefined) ||
       this.board[1][0] === this.board[1][1] === this.board[1][2] && (this.board[1][0] !== undefined) ||
       this.board[2][0] === this.board[2][1] === this.board[2][2] && (this.board[2][0] !== undefined) ||
       this.board[0][0] === this.board[1][0] === this.board[2][0] && (this.board[0][0] !== undefined) ||
       this.board[0][1] === this.board[1][1] === this.board[2][1] && (this.board[0][1] !== undefined) ||
       this.board[0][2] === this.board[1][2] === this.board[2][2] && (this.board[0][2] !== undefined) ||
       this.board[0][0] === this.board[1][1] === this.board[2][2] && (this.board[0][0] !== undefined) ||
       this.board[0][2] === this.board[1][1] === this.board[2][0] && (this.board[0][2] !== undefined)
       ) {
        winner = true; // how to find who is winner
    }
  }

  playersMove: function() {
    if (this.moveCount % 2 === 0) {
      this.currentPlayer = 'X';
    } else {
      this.currentPlayer = 'Y';
    }

    console.log(`Player ${this.currentPlayer}'s move. Enter row: `)
    //var row = get users input
    console.log(`Player ${this.currentPlayer}'s move. Enter col: `)
    // var col = get users input

    // if valid move
      // insert move onto board
      // this.movecount++;
      // check to see if winner
      // if winner = true
        // console.log this.currentPlayer won!
    // else
      // invalid move. try again
  }

}

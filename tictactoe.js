
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
        return winner = true; // how to find who is winner
    }
  }

  playersMove: function(x,y) {
    if (this.moveCount % 2 === 0) {
      this.currentPlayer = 'X';
    } else {
      this.currentPlayer = 'Y';
    }



  }

}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

initBoard();

function validMove(oldRow, oldCol, newRow, newCol, selection, destination){
    if(selection.team === destination.team ){
        console.log("user tried to caputure their own piece. Invalid");
        return false;
    }

    if(oldRow === newRow && oldCol === newCol){
        console.log('no move');
        return false;
    }
    switch (selection.type) {
        case 'rook':
            if(oldCol != newCol && oldRow != newRow){
                console.log('failed rook');
                return false;
            }

            if(oldCol != newCol){
              //checking row
              if(newCol > oldCol){
                //moving to the right
                for(var i = oldCol + 1; i < 8; i++){
                  if(this.boardPieces[i].piece != null && i < newCol){
                    return false;
                  }
                }
              }else{
                //moving to the left
                for(var i = oldCol - 1; i >= 0; i--){
                  if(this.boardPieces[i].piece != null && i > newCol){
                    return false;
                  }
                }
              }
            }else if(oldRow != newRow){
              //checking col
              if(newRow > oldRow){
                //moving down
                for(var i = oldRow + 1; i < 8; i++){
                  if(this.boardPieces[i][oldCol].piece != null && i < newRow){
                    return false;
                  }
                }
              }else if(newCol < oldCol){
                //moving up
                for(var i = oldRow - 1; i >= 0; i--){
                  if(this.boardPieces[oldCol][i].piece != null && i > newRow){
                    return false;
                  }
                }
              }
            }
            return true;
        case 'knight':
          //this.boardPieces[col][row].piece
          console.log("Old Row: " + oldRow + " Old Col: " + oldCol + " New Row: " + newRow + " New Col: " + newCol);
          if(newRow == (oldRow - 1) && newCol == (oldCol + 2)){
            return true;
          }else if(newRow == (oldRow + 1) && newCol == (oldCol + 2)){
            return true;
          }else if(newRow == (oldRow + 2) && newCol == (oldCol + 1)){
            return true;
          }else if(newRow == (oldRow + 2) && newCol == (oldCol - 1)){
            return true;
          }else if(newRow == (oldRow - 1) && newCol == (oldCol - 2)){
            return true;
          }else if(newRow == (oldRow + 1) && newCol == (oldCol - 2)){
            return true;
          }else if(newRow == (oldRow - 2) && newCol == (oldCol - 1)){
            return true;
          }else if(newRow == (oldRow - 2) && newCol == (oldCol + 1)){
            return true;
          }
          return false;
        case 'bishop':
          var vertical = 'up';
          var horizontal = 'left';
          if(oldCol === newCol || oldRow === newRow){
            return false;
          }
          if(oldCol < newCol){
            horizontal = 'right';
          }
          if(oldRow < newRow){
            vertical = 'down';
          }

          var isValid = false;
          var i, j;

          if(vertical === 'up' && horizontal === 'left'){
            j = oldRow - 1;
            for(i = oldCol - 1; i > newCol && j > newRow; i--, j-- ){
              if(this.boardPieces[j][i].type){
                return false;
              }
            }
          }else if(vertical === 'down' && horizontal === 'right'){
            j = oldRow + 1;
            for(i = oldCol + 1; i < newCol && j < newRow; i++, j++ ){
              if(this.boardPieces[j][i].type){
                return false;
              }
            }
          }else if(vertical === 'up' && horizontal === 'right'){
            j = oldRow - 1;
            for(i = oldCol + 1; i < newCol && j > newRow; i++, j-- ){
              if(this.boardPieces[j][i].type){
                return false;
              }
            }
          }else if(vertical === 'down' && horizontal === 'left'){
            j = oldRow + 1;
            for(i = oldCol - 1; i > newCol && j < newRow; i--, j++ ){
              if(this.boardPieces[j][i].type){
                return false;
              }
            }
          }
          if(i === newCol && j === newRow){
            return true;
          }
          return false;
        case 'queen':
          return true;
        case 'king':
          return true;
        case 'pawn':
            if(oldCol !== newCol){
                if( !((oldCol === newCol + 1 || oldCol=== newCol - 1) && destination.team != selection.team) ){
                    return false;
                }
            }
            var spaces = 1;
            if(selection.moved === false){
                spaces = 2;
            }
            if(selection.team){
                if(newRow < oldRow + spaces){
                    return true;
                }
            }
            else{
                if(newRow < oldRow + spaces){
                    return true;
                }
            }
            return true;
        default:
            return false;
    }
}



function initBoard() {
  arrayBoard();

  var me = this;
  this.c.addEventListener('click',function(evt){
      if(me.currentSelection===false){
          console.log('no selection');

          if(evt.clientY < 70){
              me.currentSelection = {row:0,col:getCol(0, evt.clientX)};
          }else if(evt.clientY > 70 && evt.clientY < 140){
              me.currentSelection = {row:1,col:getCol(1, evt.clientX)};
          }else if(evt.clientY > 140 && evt.clientY < 210){
              me.currentSelection = {row:2,col:getCol(2, evt.clientX)};

          }else if(evt.clientY > 210 && evt.clientY < 280){
              me.currentSelection = {row:3,col:getCol(3, evt.clientX)};

          }else if(evt.clientY > 280 && evt.clientY < 350){
              me.currentSelection = {row:4,col:getCol(4, evt.clientX)};

          }else if(evt.clientY > 350 && evt.clientY < 420){
              me.currentSelection = {row:5,col:getCol(5, evt.clientX)};

          }else if(evt.clientY > 420 && evt.clientY < 490){
              me.currentSelection = {row:6,col:getCol(6, evt.clientX)};

          }else if(evt.clientY > 490 && evt.clientY < 560){
              me.currentSelection = {row:7,col:getCol(7, evt.clientX)};
          }
          var selection = me.boardPieces[me.currentSelection.row][me.currentSelection.col];
          if(me.currentMove !== selection.team){
              me.currentSelection = false;
              return false;
          }
          me.currentMove = !me.currentMove;

          return true;
      }
      else{
          console.log('selection', me.currentSelection);

          if(evt.clientY < 70){
            newX = 0;
            newY = getCol(0, evt.clientX);
          }else if(evt.clientY > 70 && evt.clientY < 140){
            newX = 1;
            newY = getCol(1, evt.clientX);
          }else if(evt.clientY > 140 && evt.clientY < 210){
            newX = 2;
            newY = getCol(2, evt.clientX);
          }else if(evt.clientY > 210 && evt.clientY < 280){
            newX = 3;
            newY = getCol(3, evt.clientX);
          }else if(evt.clientY > 280 && evt.clientY < 350){
            newX = 4;
            newY = getCol(4, evt.clientX);
          }else if(evt.clientY > 350 && evt.clientY < 420){
            newX = 5;
            newY = getCol(5, evt.clientX);
          }else if(evt.clientY > 420 && evt.clientY < 490){
            newX = 6;
            newY = getCol(6, evt.clientX);
          }else if(evt.clientY > 490 && evt.clientY < 560){
            newX = 7;
            newY = getCol(7, evt.clientX);
          }

          var selection = me.boardPieces[me.currentSelection.row][me.currentSelection.col];

          if(validMove(me.currentSelection.row, me.currentSelection.col, newX, newY, selection, me.boardPieces[newX][newY])){
              console.log('valid');
              if(selection.type === 'king'){

                  console.log('win condition!');
                  return true;
              }
              me.boardPieces[newX][newY] = {piece:selection.piece};

              selection.piece = null;
              selection.type = null;
              selection.team = null;
              me.currentSelection = false;

              render_board();
              return true;

          }

      }


  },false);


  render_board();

}

function getCol(y, x){
  if(x < 70){
    return 0;
  }else if(x > 70 && x < 140){
    return 1;
  }else if(x > 140 && x < 210){
    return 2;
  }else if(x > 210 && x < 280){
    return 3;
  }else if(x > 280 && x < 350){
    return 4;
  }else if(x > 350 && x < 420){
    return 5;
  }else if(x > 420 && x < 490){
    return 6;
  }else if(x > 490 && x < 560){
    return 7;
  }
}

function render_board(){
  for(i = 0; i < 8; i++){
    for(j = 0; j < 8; j++){
      ctx.moveTo(0, 70 * j);
      ctx.lineTo(560, 70 * j);
      ctx.stroke();

      ctx.moveTo(70 * i, 0);
      ctx.lineTo(70 * i, 560);
      ctx.stroke();
      var left = 0;


      for(var a = 0; a < 8; a++) {
        for(var b = 0; b < 8; b++) {
          startX = b * 70;
          if((b + a) % 2 == 0) //startX = (b + 1) * 70;
          {
              ctx.fillStyle="#FFFFFF";
          }else{
              ctx.fillStyle="#A56732";

          }
            ctx.fillRect(startX + left,(a * 70) , 70, 70);
        }
      }
    }
  }

  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      if(this.boardPieces[i][j].piece !== null){
        addPieces(this.boardPieces[i][j].piece, this.coordPieces[i][j].x,  this.coordPieces[i][j].y );
      }
    }
  }
}

function addPieces(piece, x, y){
  base_image = new Image();
  base_image.src = "img/" + piece + ".png";
  base_image.id = piece;
  base_image.onload = function(){
    ctx.drawImage(this, x, y);
  }
}

function move(initialX, initialY){
  var newX;
  var newY;
  var me = this;
  c.addEventListener('click',function(evt){


  },false);
}

function arrayBoard(){
    //black team is true, white team is false
this.boardPieces = [
  [{piece:'blackRook', type:'rook', team:true},{piece:'blackKnight', type:'knight', team:true},{piece:'blackBishop', type:'bishop', team: true},{piece:'blackQueen', type:'queen', team:true},{piece:'blackKing', type:'king', team:true},{piece:'blackBishop', type:'bishop', team:true},{piece:'blackKnight', type:'knight', team:true},{piece:'blackRook', type:'rook', team:true}],
  [{piece:'blackPawn', type:'pawn', team:true, moved:false},{piece:'blackPawn', type:'pawn', team:true, moved:false},{piece:'blackPawn', type:'pawn', team:true, moved:false},{piece:'blackPawn', type:'pawn', team:true, moved:false},{piece:'blackPawn', type:'pawn', team:true, moved:false},{piece:'blackPawn', type:'pawn', team:true, moved:false},{piece:'blackPawn', type:'pawn', team:true, moved:false},{piece:'blackPawn', type:'pawn', team:true, moved:false}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:'blackKnight', type:'knight', team:true},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:'whitePawn', type:'pawn', team:false, moved:false},{piece:'whitePawn', type:'pawn', team:false, moved:false},{piece:'whitePawn', type:'pawn', team:false, moved:false},{piece:'whitePawn', type:'pawn', team:false, moved:false},{piece:'whitePawn', type:'pawn', team:false, moved:false},{piece:'whitePawn', type:'pawn', team:false, moved:false},{piece:'whitePawn', type:'pawn', team:false, moved:false},{piece:'whitePawn', type:'pawn', team:false, moved:false}],
  [{piece:'whiteRook', type:'rook', team:false},{piece:'whiteKnight', type:'knight', team:false},{piece:'whiteBishop', type:'bishop', team:false},{piece:'whiteQueen', type:'queen', team:false},{piece:'whiteKing', type:'king', team:false},{piece:'whiteBishop', type:'bishop', team:false},{piece:'whiteKnight', type:'knight', team:false},{piece:'whiteRook', type:'rook', team:false}]
];

this.coordPieces = [
  [{x:10, y: 10},{x:80, y: 10},{x:150, y: 10},{x:220, y: 10},{x:290, y: 10},{x:360, y: 10},{x:430, y: 10},{x:500, y: 10}],
  [{x:10, y: 80},{x:80, y: 80},{x:150, y: 80},{x:220, y: 80},{x:290, y: 80},{x:360, y: 80},{x:430, y: 80},{x:500, y: 80}],
  [{x:10, y: 150},{x:80, y: 150},{x:150, y: 150},{x:220, y: 150},{x:290, y: 150},{x:360, y: 150},{x:430, y: 150},{x:500, y: 150}],
  [{x:10, y: 220},{x:80, y: 220},{x:150, y: 220},{x:220, y: 220},{x:290, y: 220},{x:360, y: 220},{x:430, y: 220},{x:500, y: 220}],
  [{x:10, y: 290},{x:80, y: 290},{x:150, y: 290},{x:220, y: 290},{x:290, y: 290},{x:360, y: 290},{x:430, y: 290},{x:500, y: 290}],
  [{x:10, y: 360},{x:80, y: 360},{x:150, y: 360},{x:220, y: 360},{x:290, y: 360},{x:360, y: 360},{x:430, y: 360},{x:500, y: 360}],
  [{x:10, y: 430},{x:80, y: 430},{x:150, y: 430},{x:220, y: 430},{x:290, y: 430},{x:360, y: 430},{x:430, y: 430},{x:500, y: 430}],
  [{x:10, y: 500},{x:80, y: 500},{x:150, y: 500},{x:220, y: 500},{x:290, y: 500},{x:360, y: 500},{x:430, y: 500},{x:500, y: 500}],
];
this.images = [];
this.currentSelection = false;
this.currentMove = true;
}

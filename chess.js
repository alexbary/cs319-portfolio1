var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var moves = [];

initBoard();

function validMove(oldRow, oldCol, newRow, newCol, selection, destination){
    if(selection.team === destination.team ){
        console.log("User tried to caputure their own piece. Invalid");
        return false;
    }

    if(oldRow === newRow && oldCol === newCol){
        console.log('No move');
        return false;
    }
    switch (selection.type) {
      case 'R':
        if(oldCol != newCol && oldRow != newRow){
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
        addMoveToArray("R" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
        return true;
      case 'N':
        if(newRow == (oldRow - 1) && newCol == (oldCol + 2)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow + 1) && newCol == (oldCol + 2)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow + 2) && newCol == (oldCol + 1)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow + 2) && newCol == (oldCol - 1)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow - 1) && newCol == (oldCol - 2)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow + 1) && newCol == (oldCol - 2)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow - 2) && newCol == (oldCol - 1)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow - 2) && newCol == (oldCol + 1)){
          addMoveToArray("N" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }
        return false;
      case 'B':
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
            if(this.boardPieces[j][i].piece){
              return false;
            }
          }
        }else if(vertical === 'down' && horizontal === 'right'){
          j = oldRow + 1;
          for(i = oldCol + 1; i < newCol && j < newRow; i++, j++ ){
            if(this.boardPieces[j][i].piece){
              return false;
            }
          }
        }else if(vertical === 'up' && horizontal === 'right'){
          j = oldRow - 1;
          for(i = oldCol + 1; i < newCol && j > newRow; i++, j-- ){
            if(this.boardPieces[j][i].piece){
              return false;
            }
          }
        }else if(vertical === 'down' && horizontal === 'left'){
          j = oldRow + 1;
          for(i = oldCol - 1; i > newCol && j < newRow; i--, j++ ){
            if(this.boardPieces[j][i].piece){
              return false;
            }
          }
        }
        if(i === newCol && j === newRow){
          addMoveToArray("B" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }
        return false;
      case 'Q':
        var vertical = 'up';
        var horizontal = 'left';
        if(oldCol === newCol || oldRow === newRow){
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
          addMoveToArray("Q" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
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
            if(this.boardPieces[j][i].piece){
              return false;
            }
          }
        }else if(vertical === 'down' && horizontal === 'right'){
          j = oldRow + 1;
          for(i = oldCol + 1; i < newCol && j < newRow; i++, j++ ){
            if(this.boardPieces[j][i].piece){
              return false;
            }
          }
        }else if(vertical === 'up' && horizontal === 'right'){
          j = oldRow - 1;
          for(i = oldCol + 1; i < newCol && j > newRow; i++, j-- ){
            if(this.boardPieces[j][i].piece){
              return false;
            }
          }
        }else if(vertical === 'down' && horizontal === 'left'){
          j = oldRow + 1;
          for(i = oldCol - 1; i > newCol && j < newRow; i--, j++ ){
            if(this.boardPieces[j][i].piece){

              return false;
            }
          }
        }
        if(i === newCol && j === newRow){
          addMoveToArray("Q" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }
        return false;
      case 'K':
        if(newRow == (oldRow - 1) && newCol == (oldCol + 1)){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == oldRow && newCol == (oldCol + 1)){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow + 1) && newCol == (oldCol + 1)){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow + 1) && newCol == oldCol){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow + 1) && newCol == (oldCol - 1)){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == oldRow && newCol == (oldCol - 1)){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow - 1) && newCol == (oldCol - 1)){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }else if(newRow == (oldRow - 1) && newCol == oldCol){
          addMoveToArray("K" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
          return true;
        }
        return false;
      case 'P':
        if(oldCol !== newCol){
          if( (oldCol === newCol + 1 || oldCol === newCol - 1) && destination.team !== null && destination.team !== undefined  && destination.team !== selection.team ){
            addMoveToArray("P" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
            return true;
          }else{
            return false;
          }
        }
        var spaces = 1;
        if(selection.moved === false){
          spaces = 2;
        }

        if(destination.piece){
          return false;
        }

        if(selection.team){
          if(newRow > oldRow && newRow <= oldRow + spaces){
            addMoveToArray("P" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
            return true;
          }
        }else{
          if(newRow < oldRow && newRow >= oldRow - spaces){
            addMoveToArray("P" + convertCol(oldCol) + convertRow(oldRow)+ convertCol(newCol) + convertRow(newRow));
            return true;
          }
        }
        return false;
      default:
        return false;
    }
}

function addMoveToArray(move){
  moves.push(move);
  console.log(moves);
}

function convertRow(row){
  if(row == 0){
    return 8;
  }else if(row == 1){
    return 7;
  }else if(row == 2){
    return 6;
  }else if(row == 3){
    return 5;
  }else if(row == 4){
    return 4;
  }else if(row == 5){
    return 3;
  }else if(row == 6){
    return 2;
  }else if(row == 7){
    return 1;
  }
}

function convertCol(col){
  if(col == 0){
    return 'a';
  }else if(col == 1){
    return 'b';
  }else if(col == 2){
    return 'c';
  }else if(col == 3){
    return 'd';
  }else if(col == 4){
    return 'e';
  }else if(col == 5){
    return 'f';
  }else if(col == 6){
    return 'g';
  }else if(col == 7){
    return 'h';
  }
}

function initBoard() {
  arrayBoard();

  var me = this;
  this.c.addEventListener('click',function(evt){
    if(me.currentSelection===false){

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
    }else{
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
        if(me.boardPieces[newX][newY].type === 'king'){
          if(me.boardPieces[newX][newY].team == true){
            alert("White team won!");
          }else{
            alert("Black team won!");
          }
          return true;
        }
        me.boardPieces[newX][newY] = {piece:selection.piece, type:selection.type, team:selection.team, moved:true};

        selection.piece = null;
        selection.type = null;
        selection.team = null;
        selection.moved = null;
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

function arrayBoard(){
    //black team is true, white team is false
this.boardPieces = [
  [{piece:'blackRook', type:'R', team:true},{piece:'blackKnight', type:'N', team:true},{piece:'blackBishop', type:'B', team: true},{piece:'blackQueen', type:'Q', team:true},{piece:'blackKing', type:'K', team:true},{piece:'blackBishop', type:'B', team:true},{piece:'blackKnight', type:'N', team:true},{piece:'blackRook', type:'R', team:true}],
  [{piece:'blackPawn', type:'P', team:true, moved:false},{piece:'blackPawn', type:'P', team:true, moved:false},{piece:'blackPawn', type:'P', team:true, moved:false},{piece:'blackPawn', type:'P', team:true, moved:false},{piece:'blackPawn', type:'P', team:true, moved:false},{piece:'blackPawn', type:'P', team:true, moved:false},{piece:'blackPawn', type:'P', team:true, moved:false},{piece:'blackPawn', type:'P', team:true, moved:false}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:'whitePawn', type:'P', team:false, moved:false},{piece:'whitePawn', type:'P', team:false, moved:false},{piece:'whitePawn', type:'P', team:false, moved:false},{piece:'whitePawn', type:'P', team:false, moved:false},{piece:'whitePawn', type:'P', team:false, moved:false},{piece:'whitePawn', type:'P', team:false, moved:false},{piece:'whitePawn', type:'P', team:false, moved:false},{piece:'whitePawn', type:'P', team:false, moved:false}],
  [{piece:'whiteRook', type:'R', team:false},{piece:'whiteKnight', type:'N', team:false},{piece:'whiteBishop', type:'B', team:false},{piece:'whiteQueen', type:'Q', team:false},{piece:'whiteKing', type:'K', team:false},{piece:'whiteBishop', type:'B', team:false},{piece:'whiteKnight', type:'N', team:false},{piece:'whiteRook', type:'R', team:false}]
];

this.coordPieces = [
  [{x:10, y: 10, col: 'a', row: 8},{x:80, y: 10, col: 'b', row: 8},{x:150, y: 10, col: 'c', row: 8},{x:220, y: 10, col: 'd', row: 8},{x:290, y: 10, col: 'e', row: 8},{x:360, y: 10, col: 'f', row: 8},{x:430, y: 10, col: 'g', row: 8},{x:500, y: 10, col: 'h', row: 8}],
  [{x:10, y: 80, col: 'a', row: 7},{x:80, y: 80, col: 'b', row: 7},{x:150, y: 80, col: 'c', row: 7},{x:220, y: 80, col: 'd', row: 7},{x:290, y: 80, col: 'e', row: 7},{x:360, y: 80, col: 'f', row: 7},{x:430, y: 80, col: 'g', row: 7},{x:500, y: 80, col: 'h', row: 7}],
  [{x:10, y: 150, col: 'a', row: 6},{x:80, y: 150, col: 'b', row: 6},{x:150, y: 150, col: 'c', row: 6},{x:220, y: 150, col: 'd', row: 6},{x:290, y: 150, col: 'e', row: 6},{x:360, y: 150, col: 'f', row: 6},{x:430, y: 150, col: 'g', row: 6},{x:500, y: 150, col: 'h', row: 6}],
  [{x:10, y: 220, col: 'a', row: 5},{x:80, y: 220, col: 'b', row: 5},{x:150, y: 220, col: 'c', row: 5},{x:220, y: 220, col: 'd', row: 4},{x:290, y: 220, col: 'e', row: 5},{x:360, y: 220, col: 'f', row: 5},{x:430, y: 220, col: 'g', row: 5},{x:500, y: 220, col: 'h', row: 5}],
  [{x:10, y: 290, col: 'a', row: 4},{x:80, y: 290, col: 'b', row: 4},{x:150, y: 290, col: 'c', row: 4},{x:220, y: 290, col: 'd', row: 4},{x:290, y: 290, col: 'e', row: 4},{x:360, y: 290, col: 'f', row: 4},{x:430, y: 290, col: 'g', row: 4},{x:500, y: 290, col: 'h', row: 4}],
  [{x:10, y: 360, col: 'a', row: 3},{x:80, y: 360, col: 'b', row: 3},{x:150, y: 360, col: 'c', row: 3},{x:220, y: 360, col: 'd', row: 3},{x:290, y: 360, col: 'e', row: 3},{x:360, y: 360, col: 'f', row: 3},{x:430, y: 360, col: 'g', row: 3},{x:500, y: 360, col: 'h', row: 3}],
  [{x:10, y: 430, col: 'a', row: 2},{x:80, y: 430, col: 'b', row: 2},{x:150, y: 430, col: 'c', row: 2},{x:220, y: 430, col: 'd', row: 2},{x:290, y: 430, col: 'e', row: 2},{x:360, y: 430, col: 'f', row: 2},{x:430, y: 430, col: 'g', row: 2},{x:500, y: 430, col: 'h', row: 2}],
  [{x:10, y: 500, col: 'a', row: 1},{x:80, y: 500, col: 'b', row: 1},{x:150, y: 500, col: 'c', row: 1},{x:220, y: 500, col: 'd', row: 1},{x:290, y: 500, col: 'e', row: 1},{x:360, y: 500, col: 'f', row: 1},{x:430, y: 500, col: 'g', row: 1},{x:500, y: 500, col: 'h', row: 1}],
];
this.images = [];
this.currentSelection = false;
this.currentMove = true;
}

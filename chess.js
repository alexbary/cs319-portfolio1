var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

initBoard();

function initBoard() {
  c.addEventListener('click',function(evt){
    console.log(evt);
    console.log(evt.clientX + ',' + evt.clientY);

    if(evt.clientY < 70){
      getCol(0, evt.clientX);
    }else if(evt.clientY > 70 && evt.clientY < 140){
      getCol(1, evt.clientX);
    }else if(evt.clientY > 140 && evt.clientY < 210){
      getCol(2, evt.clientX);
    }else if(evt.clientY > 210 && evt.clientY < 280){
      getCol(3, evt.clientX);
    }else if(evt.clientY > 280 && evt.clientY < 350){
      getCol(4, evt.clientX);
    }else if(evt.clientY > 350 && evt.clientY < 420){
      getCol(5, evt.clientX);
    }else if(evt.clientY > 420 && evt.clientY < 490){
      getCol(6, evt.clientX);
    }else if(evt.clientY > 490 && evt.clientY < 560){
      getCol(7, evt.clientX);
    }
  },false);
  arrayBoard();

  for(i = 0; i < 8; i++){
    for(j = 0; j < 8; j++){
      ctx.moveTo(0, 70 * j);
      ctx.lineTo(560, 70 * j);
      ctx.stroke();

      ctx.moveTo(70 * i, 0);
      ctx.lineTo(70 * i, 560);
      ctx.stroke();
      var left = 0;


      render_board();

      for(var a = 0; a < 8; a++) {
        for(var b = 0; b < 8; b += 2) {
          startX = b * 70;
          if(a % 2 == 0) startX = (b + 1) * 70;
            ctx.fillStyle="#A56732";
            ctx.fillRect(startX + left,(a * 70) , 70, 70);
        }
      }
    }
  }
}

function getCol(y, x){
  if(x < 70){
    console.log(y + ", 0");
    console.log(this.boardPieces[y][0].piece);
  }else if(x > 70 && x < 140){
    console.log(y + ", 1");
    console.log(this.boardPieces[y][1].piece);
  }else if(x > 140 && x < 210){
    console.log(y + ", 2");
    console.log(this.boardPieces[y][2].piece);
  }else if(x > 210 && x < 280){
    console.log(y + ", 3");
    console.log(this.boardPieces[y][3].piece);
  }else if(x > 280 && x < 350){
    console.log(y + ", 4");
    console.log(this.boardPieces[y][4].piece);
  }else if(x > 350 && x < 420){
    console.log(y + ", 5");
    console.log(this.boardPieces[y][5].piece);
  }else if(x > 420 && x < 490){
    console.log(y + ", 6");
    console.log(this.boardPieces[y][6].piece);
  }else if(x > 490 && x < 560){
    console.log(y + ", 7");
    console.log(this.boardPieces[y][7].piece);
  }
}

function arrayBoard(){
this.boardPieces = [
  [{piece:'blackRook'},{piece:'blackKnight'},{piece:'blackBishop'},{piece:'blackQueen'},{piece:'blackKing'},{piece:'blackBishop'},{piece:'blackKnight'},{piece:'blackRook'}],
  [{piece:'blackPawn'},{piece:'blackPawn'},{piece:'blackPawn'},{piece:'blackPawn'},{piece:'blackPawn'},{piece:'blackPawn'},{piece:'blackPawn'},{piece:'blackPawn'}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null},{piece:null}],
  [{piece:'whitePawn'},{piece:'whitePawn'},{piece:'whitePawn'},{piece:'whitePawn'},{piece:'whitePawn'},{piece:'whitePawn'},{piece:'whitePawn'},{piece:'whitePawn'}],
  [{piece:'whiteRook'},{piece:'whiteKnight'},{piece:'whiteBishop'},{piece:'whiteQueen'},{piece:'whiteKing'},{piece:'whiteBishop'},{piece:'whiteKnight'},{piece:'whiteRook'}]
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
}

function render_board(){
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
  base_image.onload = function(){
    ctx.drawImage(this, x, y);
  }
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

for(i = 0; i < 8; i++){
  for(j = 0; j < 8; j++){
    ctx.moveTo(0, 70 * j);
    ctx.lineTo(560, 70 * j);
    ctx.stroke();

    ctx.moveTo(70 * i, 0);
    ctx.lineTo(70 * i, 560);
    ctx.stroke();
    var left = 0;

    addBlackPieces();
    addWhitePieces();

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

function addBlackPieces(){
  addPieces("blackRook", 10, 8);
  addPieces("blackRook", 500, 8);

  addPieces("blackKnight", 80, 8);
  addPieces("blackKnight", 430, 8);

  addPieces("blackBishop", 150, 8);
  addPieces("blackBishop", 360, 8);

  addPieces("blackQueen", 220, 8);
  addPieces("blackKing", 290, 8);

  var startingPos = 10;
  for(i = 0; i < 12; i++){
    addPieces("blackPawn", startingPos, 80);
    startingPos += 70;
  }
}

function addWhitePieces(){
  addPieces("whiteRook", 8, 500);
  addPieces("whiteRook", 500, 500);

  addPieces("whiteKnight", 80, 500);
  addPieces("whiteKnight", 430, 500);

  addPieces("whiteBishop", 150, 500);
  addPieces("whiteBishop", 360, 500);

  addPieces("whiteQueen", 220, 500);
  addPieces("whiteKing", 290, 500);

  var startingPos = 10;
  for(i = 0; i < 12; i++){
    addPieces("whitePawn", startingPos, 430);
    startingPos += 70;
  }
}

function addPieces(piece, x, y){
  base_image = new Image();
  base_image.src = "img/" + piece + ".png";
  base_image.onload = function(){
    ctx.drawImage(this, x, y);
  }
}

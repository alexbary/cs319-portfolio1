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


    addPieces("blackRook", 10, 10); //10x10 and 500x8
    addPieces("blackRook", 500, 8);

    addPieces("blackKnight", 80, 8); // 80x8 and 430x8
    addPieces("blackKnight", 430, 8); // 80x8 and 430x8

    addPieces("blackBishop", 150, 8); //150x8 and 360x8
    addPieces("blackBishop", 360, 8); //150x8 and 360x8

    addPieces("blackQueen", 220, 8); //220x8
    addPieces("blackKing", 290, 8); //290x8

    addPieces("blackPawn", 10, 80); //10x80
    addPieces("blackPawn", 80, 80);
    addPieces("blackPawn", 150, 80);
    addPieces("blackPawn", 220, 80);
    addPieces("blackPawn", 290, 80);
    addPieces("blackPawn", 360, 80);
    addPieces("blackPawn", 430, 80);
    addPieces("blackPawn", 500, 80);

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

function addPieces(piece, x, y){
  base_image = new Image();
  base_image.src = "img/" + piece + ".png";
  base_image.onload = function(){
    ctx.drawImage(this, x, y);
  }
}

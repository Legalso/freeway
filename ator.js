//código do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;
var dificuldade = 3;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

/*
function movimentaAtor(){
  if (keyIsDown(UP_ARROW || 87)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW || 83)){
    if (podeSeMover()){
    yAtor += 3;
    }
  }
}
function movimentaXAtor(){
  if (keyIsDown(LEFT_ARROW || 65)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW || 68)){
    if (podeSeMover()){
    xAtor += 3;
    }
  }
}
*/

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  else{
    if (keyIsDown(DOWN_ARROW) && yAtor < 366){
      yAtor += 2;
    }
    else{
      if (keyIsDown(LEFT_ARROW) && xAtor > 0){
        xAtor -=2;
      }
      else{
        if (keyIsDown(RIGHT_ARROW) && xAtor < 470){
          xAtor +=2;
        }
      }
    }
  }
}

function movimentaAtor2(){
  if (keyIsDown(87)){
    yAtor -= 2;
  }
  else{
    if (keyIsDown(83) && yAtor < 366){
      yAtor += 2;
    }
    else{
      if (keyIsDown(65) && xAtor > 0){
        xAtor -=2;
      }
      else{
        if (keyIsDown(68) && xAtor < 470){
          xAtor +=2;
        }
      }
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      perdePonto();
      somDaColisao.play();
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
  xAtor = 85;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  fill (color(255, 254, 252))
  text (meusPontos, width / 5, 27);
}

function marcaPonto(){
   if (yAtor < 15){
     meusPontos += 1;
     somDoPonto.play();
     voltaAtorParaPosicaoInicial();
     aumentaDificuldade();
     mudaVelocidades();     
   }
}

function perdePonto(){
  if (meusPontos > 0){
    meusPontos -=1;
    diminuiDificuldade();
    mudaVelocidades();
  }
}

function aumentaDificuldade(){
  if (dificuldade < 8){
    dificuldade++;
  }
}

function diminuiDificuldade(){
  if (dificuldade > 3){
    dificuldade -=1;
  }
}

/*
function podeSeMover(){
  return yAtor < 366;
}
*/

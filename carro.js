//código do carro

let xCarros = [600, 600, 600,600, 600,600];
let yCarros = [40,96,150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 45;
let alturaCarro = 33;
let n = xCarros.length;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function sorteiaVelocidade(maximo){
  var velocidade = 0;
  while (velocidade == 0){
    velocidade = Math.floor(Math.random()*maximo);
  }
  return velocidade;
}

function mudaVelocidades(){
  for (var i = 0; i < n; i++){
    velocidadeCarros[i] = sorteiaVelocidade(dificuldade);
  }
}

function passouTodaATela(xCarros){
  return xCarros < -50;
}
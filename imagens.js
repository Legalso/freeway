//imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  //imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDaEstrada = loadImage("imagens/space.png");
  //imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoAtor = loadImage("imagens/spaceship.png");
  //imagemCarro = loadImage("imagens/carro-1.png");
  //imagemCarro2 = loadImage("imagens/carro-2.png");
  //imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro = loadImage("imagens/ufo.gif");
  imagemCarro2 = loadImage("imagens/satelite.gif");
  imagemCarro3 = loadImage("imagens/spaceshipGif.gif");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("sons/space.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}

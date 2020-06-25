function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo        = new Jogo();
  telaInicial = new TelaInicial();  
  jogo.setup();

  cenas = {
    jogo,
    telaInicial
  };

  botaoGerenciador    = new BotaoGerenciador('Iniciar', width/2, height/2);
  // BOTAO JOGAR NOVAMENTE
  botaoJogarNovamente = new BotaoJogarNovamente('Jogar Novamente', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

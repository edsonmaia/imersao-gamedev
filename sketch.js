function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.setVolume(0.15);
  somDoJogo.loop();

  jogo         = new Jogo();
  jogo2        = new Jogo2();
  jogo3        = new Jogo3();
  jogo4        = new Jogo4();
  telaInicial  = new TelaInicial();
  telaCreditos = new TelaCreditos();
  moedas       = new Moedas(); // MOEDAS

  jogo.setup();
  
  cenas = {
    jogo,
    telaInicial,
    jogo2,
    jogo3,
    jogo4,
    telaCreditos
  };
  
  botaoGerenciador    = new BotaoGerenciador('Iniciar', width/2, height/2);
  botaoJogarNovamente = new BotaoJogarNovamente('Jogar Novamente', width/2, height/2);
  botaoFase2          = new BotaoFase2('Próxima Fase', width/2, height/2, 'jogo2');
  botaoFase3          = new BotaoFase3('Próxima Fase', width/2, height/2, 'jogo3');
  botaoFase4          = new BotaoFase4('Próxima Fase', width/2, height/2, 'telaCreditos');
  botaoCreditos       = new BotaoCreditos('Créditos', width/2, height/2);
 
}

// TOUCH {
function touchStarted() {
    personagem.pula();
    somDoPulo.play();
}

function keyPressed() {
	jogo.keyPressed(key);
}

function draw() {
	cenas[cenaAtual].draw();
}	

class Jogo3 {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
    this.metaMoedas = 30;
  }

  setup() {
    cenario   = new Cenario(imagemCenario3, 3.5);
    pontuacao = new Pontuacao();
    moedinhas = new Moedinhas();
    vida      = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem          = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    const inimigo       = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

  }
  
  // CONTROLES DE JOGO
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
    // AVANÇAR ou RECUAR
  	if(keyCode === RIGHT_ARROW) personagem.avanca();
	  if(keyCode === LEFT_ARROW ) personagem.recua();
  }

  draw() {
    cenario.exibe();
    cenario.move();

    // MOEDAS
    moedas.exibe();
    moedas.move();

    vida.draw()
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    moedinhas.exibe();
    moedinhas.exibeMoedaPlacar();

    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual     = this.mapa[this.indice]
    const inimigo        = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    // FIM DA FASE 3
    // console.log("Moedinhas " + moedinhas.moedinhas);
      if (moedinhas.moedinhas >= this.metaMoedas) {
        somDoJogo.stop();
        somHit.stop();
        somLevelWin.play();

        image(imagemLevelWin, width / 2 - 200, height / 2 - 100);
        // ADICIONAR BOTAO
        cenaAtual = 'jogo3';
        botaoFase4.draw();
        noLoop();
      }

    if (personagem.estaColidindo(inimigo)) { 
      vida.perdeVida();
      somHit.play();
      personagem.tornarInvencivel();

      // GAMEOVER
      if (vida.vidas === 0) {
        somDoJogo.stop();
        somHit.stop();
        somGameOver.play();

        vida.perdeVida(); // tirar ultimo coracao perdido VERIFICAR nao funcionou
        image(imagemGameOver, width / 2 - 200, height / 2 - 100);

        // ADICIONAR BOTAO JOGAR NOVAMENTE
        botaoJogarNovamente.draw();
        botaoJogarNovamente.y = height / 2;
        noLoop();

      }

    }
    
    // PEGAR MOEDAS
	if(personagem.pegouMoeda(moedas)) {
      personagem.capturouMoeda();
      somPegaMoeda.setVolume(0.5);
      somPegaMoeda.play();
      moedas.esconde();           // esconder moeda
      moedinhas.adicionarMoeda(); // console.log("Pegou +1 moedinha");
    }
    
    // DICA 3
    fill('#fff');
    noStroke();
    textAlign(CENTER);
    textSize(25);
    text('Pegue 30 moedinhas para passar de fase', width / 2, 35 );
    //

  } // fim draw
  
  
}

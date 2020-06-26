class Jogo {

	constructor() {
		//this.inimigoAtual = 0;
		this.indice    = 0;
		this.moedinhas = 0;
		this.mapa = fita.mapa; // MAPA que esta em fita.json

	} // FIM constructor

	// SETUP
	setup() {

	  cenario    = new Cenario(imagemCenario, 5);
	  pontuacao  = new Pontuacao();
	  vida 		 = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

	  personagem = new Personagem(matrizPersonagem, imagemPersonagem,
	                              0,
	                              30,
	                              110,
	                              135,
	                              220,
	                              270
	                              );

	  // MOEDAS
	  // matriz, imagem, x, y, argura, altura, larguraSprite, alturaSprite, velocidade
  	  const moedas        = new Moedas(matrizMoedas, imagemMoedas,
                              width  - 100,
                              height - 304,
                              52,
                              52,
                              104,
                              104,
                              8,
                              150);

	  const inimigo       = new Inimigo(matrizInimigo, imagemInimigo,
	                              width - 52,
	                              30,
	                              52,
	                              52,
	                              104,
	                              104,
	                              10);
	  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
	                              width,
	                              0,
	                              200,
	                              200,
	                              400,
	                              400,
	                              15);
	  const inimigoVoador = new Inimigo(matrizInimigoVoador,
	                              imagemInimigoVoador,
	                              width - 52,
	                              200,
	                              100,
	                              75,
	                              200,
	                              150,
	                              10);
	  
	  inimigos.push(inimigo);
	  inimigos.push(inimigoGrande);
	  inimigos.push(inimigoVoador);

	}

	// CONTROLES DE JOGO
	keyPressed(key) {
		// PULAR
	    if(key === 'ArrowUp') {
		    personagem.pula();
		    somDoPulo.play();
		}
		// AVANÇAR ou RECUAR
		if(keyCode === RIGHT_ARROW) personagem.avanca();
		if(keyCode === LEFT_ARROW ) personagem.recua();
	}

	// DRAW
	draw() {

		cenario.exibe();
		cenario.move();

		pontuacao.exibe();
		pontuacao.adicionarPonto();

		personagem.exibe();
		personagem.aplicaGravidade();

		// MOEDAS
		moedas.exibe();
		moedas.move();

		// VIDAS
		vida.draw();

		// MAPA DE INIMIGOS e RECURSOS
		const linhaAtual	 = this.mapa[this.indice];
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

		// COLISOES
		if(personagem.estaColidindo(inimigo)) {

			vida.perdeVida();
			personagem.tornarInvencivel();

			// GAMEOVER
			if(vida.vidas === 0) {
				somDoJogo.stop();
				
				somGameOver.play();
				vida.perdeVida(); // tirar ultimo coracao perdido VERIFICAR
				image(imagemGameOver, width/2 - 200, height/2 - 100);
				
				// ADICIONAR BOTAO JOGAR NOVAMENTE
	    		botaoJogarNovamente.draw();
	    		botaoJogarNovamente.y = height / 2;

				noLoop();
			}
    		
		}

		// PEGAR MOEDAS
		if(personagem.pegouMoeda(moedas)) {
			//console.log("Pegou 1 moedinha");
		}

	}

}

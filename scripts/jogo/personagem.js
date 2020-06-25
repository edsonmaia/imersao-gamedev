class Personagem extends Animacao {
	constructor(matriz, imagem, x,  variacaoY, largura, altura, larguraSprite, alturaSprite) {
		super(matriz, imagem, x,  variacaoY, largura, altura, larguraSprite, alturaSprite);
		
		this.variacaoY = variacaoY;
		this.yInicial = height - this.altura - variacaoY;
		this.y = this.yInicial;

		this.velocidadeDoPulo = 0;
		this.gravidade 		  = 5.5;
		this.alturaDoPulo 	  = -50;
		this.pulos			  = 0;
		this.quantMaximaPulos = 2;
	}

	// avançar 50px para a direita
	avanca() {
		this.x = this.x + 55;
	}

	// voltar 50px para a esquerda
	recua() {
		this.x = this.x - 60;
	}

	pula() {
		if(this.pulos < this.quantMaximaPulos) {
			this.velocidadeDoPulo = this.alturaDoPulo;
			this.pulos++;
		}
	}

	aplicaGravidade() {
		this.y = this.y + this.velocidadeDoPulo;
		this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

		if (this.y > this.yInicial) {
			this.y = this.yInicial;
			this.pulos = 0;
		}
	}
	// x pers, y pers, larg, alt
	estaColidindo(inimigo) {
		//const precisao = 0.7;
		noFill();
		stroke('yellow');
		strokeWeight(2);
		
		// personagem 			x, 			y, 	  d
		// let ripsta = circle(this.x+50, this.y+75, 85);
	
		// inimigo gotinha		x, 				y, 	  	 d
		// let gotinha = circle(inimigo.x+35, inimigo.y+25, 40);

		// inimigo voador		x, 				y, 	  	 d
		//let voador = circle(inimigo.x+60, inimigo.y+35, 45);
		
		// inimigo grande		x, 				y, 	  	 d
		//let grande = circle(inimigo.x+130, inimigo.y+115, 85);

		//elipse 1  (x, y, d, x2, y2, d2)
		const colisaoGotinha  = collideCircleCircle(this.x+50,this.y+75,100, inimigo.x+35, inimigo.y+25, 40);
		const colisaoVoadora  = collideCircleCircle(this.x+50,this.y+75,100, inimigo.x+60, inimigo.y+35, 45);
		const colisaoGrande   = collideCircleCircle(this.x+50,this.y+75,100, inimigo.x+130, inimigo.y+115, 85);

		const colisao = true;
		// melhorar essa validacao, estou usando para ver quem esta colidindo
		// estou usando inicialmente a colisao com a gotinha apenas
		if (colisaoGotinha) {
			return true;
		} else if (colisaoVoadora) {
			return false;
		} else if (colisaoGrande) {
			return false;
		}
		//return colisao;
	}

}

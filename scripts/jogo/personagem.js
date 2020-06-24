class Personagem extends Animacao {
	constructor(matriz, imagem, x,  variacaoY, largura, altura, larguraSprite, alturaSprite) {
		super(matriz, imagem, x,  variacaoY, largura, altura, larguraSprite, alturaSprite);
		
		this.variacaoY = variacaoY;
		this.yInicial = height - this.altura - variacaoY;
		this.y = this.yInicial;

		this.velocidadeDoPulo = 0;
		this.gravidade = 3;
	}

	pula() {
		this.velocidadeDoPulo = - 50;
	}

	aplicaGravidade() {
		this.y = this.y + this.velocidadeDoPulo;
		this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

		if (this.y > this.yInicial) {
			this.y = this.yInicial;
		}
	}
	// x pers, y pers, larg, alt
	estaColidindo(inimigo) {
		const precisao = 0.7;
		const colisao = collideRectRect(
			this.x,
			this.y,
			this.largura * precisao,
			this.altura  * precisao,
			inimigo.x,
			inimigo.y,
			inimigo.largura * precisao,
			inimigo.altura * precisao
		);
		return colisao;
	}

}

let posX = 1366;

class Moedas {

	constructor(matriz, imagem, x, y, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {

		this.velocidade = velocidade;
		this.delay		= 150;
		this.matriz 	= matrizMoedas;
		//this.x		= width - this.delay;
		this.x = posX;
		this.frameAtual = 0;
	}

	exibe() {
		image(imagemMoedas, this.x, height-304, 52, 52, matrizMoedas[this.frameAtual][0], matrizMoedas[this.frameAtual][1], 104, 104);
		this.anima();
		/*/ CIRCULO
		noFill();
		stroke('yellow');
		strokeWeight(2);
		let moeda = circle(this.x+28, height-280, 40);
		*/
	}

	anima() {
		this.frameAtual++;
		if (this.frameAtual >= matrizMoedas.length - 1) this.frameAtual = 0;
	}

	move() {

		this.x = this.x - 8;
		// console.log("X " + this.x);
		//if (this.x < -this.largura - this.delay) {			
		if (this.x < -1366) {
			//this.x = width;
			this.x = 1366;
		}

	}

}
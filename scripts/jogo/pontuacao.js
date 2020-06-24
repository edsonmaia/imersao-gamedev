class Pontuacao {

	constructor() {
		this.pontos = 0;
	}

	exibe() {
		textAlign(RIGHT);
		fill('#fff');
		textSize(50);
		// texto, pos x, pos y, 
		text(parseInt(this.pontos), width - 30, 50);
	}

	adicionarPonto() {
		this.pontos = this.pontos + 0.2;
	}

}

class BotaoJogarNovamente extends BotaoGerenciador {
	
	constructor(texto, x, y) {
		super(texto, x, y);
		this.botao  = createButton(this.texto);
		this.botao.mousePressed( () => this._alterarCena() );
		this.botao.addClass('botao-jogar-novamente');
	}

	draw() {
		this.botao.position(this.x, this.y);
		this.botao.center('horizontal');
	}

	_alterarCena() {
		this.botao.remove();
        window.location.reload(true);
		//cenaAtual = 'telaInicial';
	}

}

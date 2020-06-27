class BotaoCreditos {
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena());
    this.botao.addClass('botao-tela-inicial');
  }
  
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
  
  _alteraCena(){
    this.botao.remove();
    cenaAtual = 'telaCreditos';
    telaCreditos.draw();  // desenha a tela
    loop();        // permite que o jogo volte a rodar
  }
}
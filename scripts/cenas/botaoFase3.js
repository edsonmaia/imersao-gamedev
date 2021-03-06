class BotaoFase3 {
  constructor(texto, x, y, nomeCena){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.nomeCena = nomeCena;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(() => this._alteraCena(this.nomeCena));
    this.botao.addClass('botao-jogar-novamente');
  }
  
  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
  
  _alteraCena(nomeCena){
    this.botao.remove();
    cenaAtual = 'jogo3';
    jogo3.setup(); // chama o setup da cena
    jogo3.draw();  // roda a cena
    loop();        // permite que o jogo volte a rodar
  }

}
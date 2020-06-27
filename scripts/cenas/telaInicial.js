class TelaInicial {
  constructor(){
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._textoEstoria();
    this._botao();
    this._logoHipsta();   // chapeu hipsta
  }
   
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _logoHipsta(){
    image(imagemChapeu, width/3, height - 580, 100, 50);
  }

  _texto(){
    fill('black');
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    stroke('#fff');
    strokeWeight(3);

    textSize(50);
    text('A aventura de', width / 2, height - 560);
    textSize(150);
    text('Hipsta', width / 2, height - 450);
    textFont(fonteTextoNormal);
    noStroke();
    textSize(15);
    text('Desenvolvida por Edson Maia @ 2020', width / 2 + 50 , height - 460);
  }

    _textoEstoria(){
    textAlign(CENTER);
    fill('#fff');
    stroke('#000');
    strokeWeight(1);
    textSize(25);
    textFont(fonteTitulo);
    text('A Bruxinha Hipsta precisa se desviar (pular)\ndas gotinhas poluídas que saíram das lágrimas do Troll e também\n pular por cima dele. Porque ele está muito triste e pode machucá-la. \n Ela precisa coletar moedas para comprar os ingredientes da fórmula \n que vai desenvolver para acabar com a tristeza do Troll, \ndespoluir as lágrimas dele e deixar a Floresta Livre da Poluição! \n Vamos iniciar a Aventura!', width / 2, height - 390);

    noStroke();
    textFont(fonteTextoNormal);
    textSize(18);
    text('COMANDOS: Setas direcionais\nPular (Seta para Cima 1x ou 2x) | Avançar (Seta para Direita) | Recuar (Seta para Esquerda) \n TOUCH: Pular use Toques na tela | MOUSE: Pular use cliques do Mouse', width / 2, height - 170);
    textFont(fonteTitulo);
  }
  
  _botao(){
    botaoGerenciador.y = height - 100; // botaoGerenciador.y = height / 7 * 3.5;
    botaoGerenciador.draw();
  }

}

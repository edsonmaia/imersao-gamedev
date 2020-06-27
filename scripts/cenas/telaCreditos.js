class TelaCreditos {
  constructor(){
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
    this._logoHipsta(); // chapeu hipsta
  }
 
  _imagemDeFundo(){
    image(imagemCenario5, 0, 0, width, height);
  }
  
  _logoHipsta(){
    image(imagemChapeu, width/3, 50, 150, 75);
  }

  _texto(){

    textFont(fonteTitulo);
    textAlign(CENTER);
    fill('#fff');
    noStroke();
    textSize(50);
    text('Créditos', width / 2, 150);

    textSize(20);
    textFont(fonteTextoNormal);
    text('A Bruxinha Hipsta habita nas Florestas e é de uma \n linhagem de Bruxinhas Hipsters - guardiãs da Floresta. \n A Floresta e as Vilas vizinhas estão sofrendo \n com a poluição que sai das lágrimas dos Trolls.\n A Bruxinha Hipsta nesta Quest precisa acumular recursos \n na corrida pela Floresta para produzir uma fórmula que\n vai acabar com a tristeza dos Trolls, despoluir as lágrimas e\n deixar a Floresta Livre da Poluição !', width / 2, 180);
    
    textSize(16);
    text('Jogo desenvolvido por Edson Maia durante a Imersão GameDev da AluraOnline \n Game Design Juliana Negreiros, Guilherme Lima, Paulo Silveira e Edson Maia \n Game Dev e FX Sonoros Edson Maia \n Trilha sonora Guilherme Lima.', width / 2, height - 280);
    text('Dev Edson Maia @ 2020 GitHub https://github.com/edsonmaia', width / 2, height - 100);

  }
 
  _botao() {
    botaoJogarNovamente.draw();
    botaoJogarNovamente.y = height / 2;
  }

  _alteraCena() {
    this.botao.remove();
    cenaAtual = 'telaCreditos';
    telaCreditos.draw();  // roda o jogo
    loop();        // permite que o jogo volte a rodar
  }

}
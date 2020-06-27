class Moedinhas {
  constructor() {
    this.moedinhas = 0;
  }
  
  exibeMoedaPlacar() {
    image(imagemMoeda, width - 30, 70, 25, 25);
  }

  exibe() {
    fill('yellow');
    textAlign(RIGHT);
    textSize(50);
    text(this.moedinhas, width - 30, 100);
  }
  
  adicionarMoeda() {
    this.moedinhas++;
  }
}
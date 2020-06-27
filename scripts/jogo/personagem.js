class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade        = 5.5;
    this.alturaDoPulo     = -50
    this.pulos            = 0;
    this.quantMaximaPulos = 2;
    this.invencivel       = false;
    this.capturou         = false;
    this.morreu           = false;
    }
  
  // avançar 55px para a direita
	avanca() {
		this.x = this.x + 55;
	}

	// voltar 56px para a esquerda
	recua() {
		this.x = this.x - 60;
	}
  
  pula() {
    if(this.pulos < this.quantMaximaPulos) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    
    if(this.y > this.yInicial){
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  
  tornarInvencivel() {
      this.invencivel = true;
    setTimeout( () => {
      this.invencivel = false;
    }, 1000)
  }
  
  // CAPTUROU MOEDA
  capturouMoeda() {
      this.capturou = true;
    setTimeout( () => {
      this.capturou = false;
    }, 1000);
  }

  
  estaColidindo(inimigo) {
    if(this.invencivel) {
      return false;
    }
    
    /*/ RETANGULOS
      const precisao = .7;
    noFill();
    rect(this.x + 10, this.y + 10,
         this.largura - 40, this.altura  - 40);
    rect(inimigo.x + 10, inimigo.y + 15,
         inimigo.largura - 10, inimigo.altura - 30);
    */

    const colisao  = collideRectRect(
      this.x + 10, 
      this.y + 10, 
      this.largura - 40, 
      this.altura  - 40,
      inimigo.x + 10,
      inimigo.y + 15,
      inimigo.largura - 10,
      inimigo.altura  - 30);
    
    return colisao;
  }
  
  // x pers, y pers, larg, alt
	pegouMoeda(moedas) {
		let posicaoXMoeda = moedas.x+35;
		let alturaMoeda   = height-280;
		//let verMoeda = circle(moedas.x+35, alturaMoeda, 50);
		const moedinha  = collideCircleCircle(this.x+50,this.y+75,100, posicaoXMoeda, alturaMoeda, 50);
		return moedinha;
	}

}
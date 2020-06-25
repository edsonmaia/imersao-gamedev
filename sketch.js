let imagemCenario;
let imagemCenarioFundo;
let imagemGameOver;

let pontuacao;

let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;

let cenario;
let cenario1;
let cenario2;
//let somDoJogo;
let personagem;
let inimigo;

const inimigos = [];

let somDoPulo;

const matrizPersonagem = [
      [0, 0],
      [220, 0],
      [440, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810]
    ];

const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

function preload() {

  //imagemCenarioFundo  = loadImage('imagens/cenario/Foreground.png');
  imagemCenario       = loadImage('imagens/cenario/floresta1.png');
  imagemGameOver      = loadImage('imagens/assets/game-over.png');

  imagemPersonagem    = loadImage('imagens/personagem/correndo.png');
  
  imagemInimigo       = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  //somDoJogo         = loadSound('sons/trilha_jogo.mp3');
  somDoPulo           = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pontuacao  = new Pontuacao();
  
  personagem = new Personagem(matrizPersonagem, imagemPersonagem,
                              0,
                              30,
                              110,
                              135,
                              220,
                              270
                              );

  const inimigo       = new Inimigo(matrizInimigo, imagemInimigo,
                              width - 52,
                              30,
                              52,
                              52,
                              104,
                              104,
                              10,
                              100);
  
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande,
                              width,
                              0,
                              200,
                              200,
                              400,
                              400,
                              8,
                              2000
                            );

  const inimigoVoador = new Inimigo(matrizInimigoVoador,
                              imagemInimigoVoador,
                              width - 52,
                              200,
                              100,
                              75,
                              200,
                              150,
                              12,
                              3000
                            );

  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);

  cenario        = new Cenario(imagemCenario, 5);
  //cenarioFundo = new Cenario(imagemCenarioFundo, 3);

  frameRate(40);
  //somDoJogo.loop();
}

function keyPressed() {

  if(key === 'ArrowUp') {
    personagem.pula();
    somDoPulo.play();
  }

  if(keyCode === RIGHT_ARROW) {
    personagem.avanca();
  }

  if(keyCode === LEFT_ARROW) {
    personagem.recua();
  }

}

function draw() {

  cenario.exibe();
  cenario.move();
  
  //cenarioFundo.exibe();
  //cenarioFundo.exibe();
  
  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

      if(personagem.estaColidindo(inimigo)) {

        image(imagemGameOver, width/2 - 200, height/2 - 50);
        //console.log("Colidiu");
        noLoop();
      }

  });


}

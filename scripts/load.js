function preload() {

  imagemCenario       = loadImage('imagens/cenario/floresta.png');
  imagemCenario2      = loadImage('imagens/cenario/floresta2.png');
  imagemCenario3      = loadImage('imagens/cenario/floresta3.png');
  imagemCenario4      = loadImage('imagens/cenario/floresta4.png');
  imagemCenario5      = loadImage('imagens/cenario/floresta5.png');
  imagemGameOver      = loadImage('imagens/assets/game-over.png');
  imagemMoedas 		    = loadImage('imagens/assets/moedas.png');
  imagemMoeda         = loadImage('imagens/assets/moeda.png');
  imagemPersonagem    = loadImage('imagens/personagem/correndo.png');
  imagemInimigo       = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemTelaInicial   = loadImage('imagens/cenario/telaInicial.png');
  imagemVida          = loadImage('imagens/assets/heart.png');
  imagemLevelWin      = loadImage('imagens/assets/level-up.png');

  imagemChapeu        = loadImage('imagens/assets/chapeu-hipsta.png');

  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  fonteTextoNormal = loadFont('imagens/assets/OpenSansRegular.ttf');
  fonteTitulo      = loadFont('imagens/assets/OpenSansBold.ttf');
  fita             = loadJSON('fita/fita.json');
  
  somDoJogo    = loadSound('sons/trilha_jogo.mp3');
  somDoPulo    = loadSound('sons/somPulo.mp3');
  somGameOver  = loadSound('sons/cutie-game-over.mp3');
  somPegaMoeda = loadSound('sons/pega_moeda.mp3');
  somHit       = loadSound('sons/hit_oh_no.mp3');
  somLevelWin  = loadSound('sons/level_win.mp3');

}
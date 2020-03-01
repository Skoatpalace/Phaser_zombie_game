var jeu = {
    scene : null,
    world : world,
    player : player
};

function preload(){
    jeu.scene = this;
    jeu.scene.load.image("tiles","tilesheet.png");
    jeu.scene.load.tilemapTiledJSON("map","JeuPlateforme.json");
    jeu.scene.load.atlas("player","player.png","playerAtlas.json");
}
function create(){
    jeu.player.initPlayer();
    jeu.player.generatePlayerAnimations(); 
    jeu.world.initWorld();
}

function update(time, delta){
     
}
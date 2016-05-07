var game = new Phaser.Game(900, 640, Phaser.AUTO, '', { preload: preload, create: create, update: update, });
var gameWidth = 900;
var gameHeight = 640;

var player;
var map;
var cursors;
var layer;
var CollideLayer;
var tileset;
var tile;


function preload() {

    //!-- TILE MAP, PICS, AND JSON --!//
    game.load.tilemap('introLevel', 'Assets/TileMaps/introLevel.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles','Assets/Tilemaps/introLevelForeground.png');
    game.load.spritesheet('player', 'Assets/blueStand.png', 45, 54);

  

}



function create() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    
    map = game.add.tilemap('introLevel');

    
    map.addTilesetImage('tilesheet_complete', 'tiles');
    
    layer = map.createLayer('Background');
    
    CollideLayer = map.createLayer('Foreground');
    
    map.setCollisionBetween(0, 200, true, CollideLayer);
    
    layer.resizeWorld();
    
    

}




function update() {

    

}



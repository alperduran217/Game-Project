var game = new Phaser.Game(900, 640, Phaser.AUTO, '', { preload: preload, create: create, update: update, });
var gameWidth = 900;
var gameHeight = 640;

var player;
var map;
var cursors;
var layer;
var CollideLayer;
var tileset;

function preload() {

    //!-- TILE MAP, PICS, AND JSON --!//
    game.load.tilemap('introLevel', 'Assets/TileMaps/introLevel.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tilesheet_complete','Assets/Tilemaps/introLevelForeground.png');
    game.load.image('set4_background','Assets/Tilemaps/introLevelBackground_2.png');
    game.load.image('set1_tiles','Assets/Tilemaps/introLevelBackground_1.png');

}



function create() {

    game.physics.StartSystem(Phaser.Physics.ARCADE);
    
    cursors = game.input.keyboard.createCursorsKeys();
    
    map = game.add.tilemap('introLevel');
    
    layer = map.createLayer('Background');
    
    CollideLayer = map.createLayer('Foreground');
    
    map.setCollisionBetween(0, 180, true, CollideLayer);
    
    layer.resizeWorld();

}




function update() {

    

}



var game = new Phaser.Game(900, 640, Phaser.AUTO, '', { preload: preload, create: create, update: update, });
var gameWidth = 900;
var gameHeight = 640;

var player;
function preload() {

    //!-- TILE MAP, PICS, AND JSON --!//
    game.load.tilemap('introLevel', 'Assets/TileMaps/introLevel.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tilesheet_complete','Assets/Tilemaps/introLevelForeground.png');
    game.load.image('set4_background','Assets/Tilemaps/introLevelBackground_2.png');
    game.load.image('set1_tiles','Assets/Tilemaps/introLevelBackground_1.png');


    

}



function create() {


    

}




function update() {

    

}



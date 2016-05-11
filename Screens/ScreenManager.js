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
    game.load.spritesheet('player', 'Assets/sprites.png', 64, 54);
    game.load.image('background2','Assets/Tilemaps/introLevelBackground_2.png');
    game.load.image('background1','Assets/Tilemaps/introLevelBackground_1.png');



  

}



function create() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    
    map = game.add.tilemap('introLevel');
  
    map.addTilesetImage('introLevelBackground_1', 'background1');
    
    map.addTilesetImage('introLevelBackground_2', 'background2');

    map.addTilesetImage('tilesheet_complete', 'tiles');

    
    layer = map.createLayer('Background Colour');
    
    CollideLayer = map.createLayer('Foreground');
    
    map.setCollisionBetween(0, 200, true, CollideLayer);
    
    layer.resizeWorld();
    
    player = game.add.sprite(150, 200, 'player');
    
    
    
    game.physics.arcade.enable(player);
    
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;
    
    
    player.animations.add('left', [16,12,8,4,0], 15, true);
    player.animations.add('right', [15,13,9,5,1], 15, true);
    player.animations.add('stop', [3,3], 10, true);
    player.animations.add('down', [11,11], 10, true);
    player.animations.add('up', [10,6,2], 10, true);
    player.animations.add('kick', [18,14], 15, true);
    player.animations.add('top', [7,7], 15, true);

    
    
    game.physics.enable(player, Phaser.Physics.ARCADE);

    game.camera.follow(player);
    
    cursors = game.input.keyboard.createCursorKeys();
    

}




function update() {

        game.physics.arcade.collide(player, CollideLayer);
    
        player.body.velocity.x = 0;
    
    
     if (cursors.right.isDown) {

        player.body.velocity.x = 250;

        player.animations.play('right');
    }

    else if (cursors.left.isDown) {

        player.body.velocity.x = -250;

       player.animations.play('left');
    }
    
    else if (cursors.down.isDown) {
        
        player.animations.play('down');

    }


    

    else {
        //  Stand still


        player.animations.play('stop');



    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown ) {

        player.body.velocity.y = -350;
        
        player.animations.play('up');
        
       // jumpsound.play();
    }
    
    





}



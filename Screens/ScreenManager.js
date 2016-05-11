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
var layer2;
var key;
var score = 100;
var scoreString = '';
var scoreText;
var monster1;
var monster2;
var layer3;


function preload() {

    //!-- TILE MAP, PICS, AND JSON --!//
    game.load.tilemap('introLevel', 'Assets/TileMaps/introLevel.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles','Assets/Tilemaps/introLevelForeground.png');
    game.load.spritesheet('player', 'Assets/sprites.png', 64, 54);
    game.load.spritesheet('enemy', 'Assets/enemybabe.png', 64, 43);
    game.load.image('background2','Assets/Tilemaps/introLevelBackground_2.png');
    game.load.image('background1','Assets/Tilemaps/introLevelBackground_1.png');
    game.load.image('key','Assets/keyGreen.png',29,30);



  

}



function create() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
    
    map = game.add.tilemap('introLevel');
  
    map.addTilesetImage('introLevelBackground_1', 'background1');
    
    map.addTilesetImage('introLevelBackground_2', 'background2');

    map.addTilesetImage('tilesheet_complete', 'tiles');

    
    layer = map.createLayer('Background Colour');
    layer2 = map.createLayer('Background Pattern');
    layer3 = map.createLayer('Lava');
    
    CollideLayer = map.createLayer('Foreground');
    
    map.setCollisionBetween(0, 200, true, CollideLayer);
    
    layer.resizeWorld();
    
    
  //  The score
    
    
    scoreString = 'Score : ';
    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });
    scoreText.fixedToCamera = true;
    
    
    
    
    //!!-- KEYS --!!//

    keys = game.add.group();
    keys.enableBody = true;
   
    key = keys.create(256, 192, 'key');
    game.physics.arcade.enable(key);
    key.body.collideWorldBounds = true;
    
    key.visible = false;

    
    
    
    //!!-- ENEMY --!!//


    monster1 = game.add.group();
    monster1.enableBody = true;
    monster1 = game.add.sprite(1024, 384, 'enemy');
    monster1.animations.add('enemy', [1, 2, 0], 10, true);
    monster1.animations.play('enemy');
    game.physics.arcade.enable(monster1);
    monster1.body.collideWorldBounds = true;

    /////////// enemy2

    monster2 = game.add.group();
    monster2.enableBody = true;
    monster2 = game.add.sprite(1408, 384, 'enemy');
    monster2.animations.add('enemy', [1, 2, 0], 10, true);
    monster2.animations.play('enemy');
    game.physics.arcade.enable(monster2);
    monster2.body.collideWorldBounds = true;

    ///////////////

    
    player = game.add.sprite(150, 200, 'player');
    
    game.physics.arcade.enable(player);

    
    
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;
    
    
    player.animations.add('left', [16,12,8,4,0], 15, true);
    player.animations.add('right', [15,13,9,5,1], 15, true);
    player.animations.add('stop', [3,3], 10, true);
    player.animations.add('down', [11,11], 10, true);
    player.animations.add('jump', [10,6,2], 10, true);
    player.animations.add('kick', [18,14], 15, true);
    player.animations.add('top', [7,7], 15, true);

    
    
    game.physics.enable(player, Phaser.Physics.ARCADE);
    
    game.camera.follow(player);
    
    cursors = game.input.keyboard.createCursorKeys();
    
   

    game.add.tween(monster1).to({ y: 60 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
    game.add.tween(monster2).to({ y: 60 }, 3000, Phaser.Easing.Linear.None, true, 0, 1000, true);


}




function update() {

    game.physics.arcade.collide(player, CollideLayer);
    game.physics.arcade.overlap(player, key, takeKey, null, this);
    game.physics.arcade.overlap(monster1, player, monsterkill1, null, this);
    game.physics.arcade.overlap(monster2, player, monsterkill2, null, this);

    

    
        player.body.velocity.x = 0;
    
    //  Allow the player to jump if they are touching the ground.
     if (cursors.up.isDown  ) {
         
         
        
         if (player.body.onFloor())
            {
                player.body.velocity.y = -350;

            }
        else if (cursors.right.isDown) {

        player.body.velocity.x = 250;

    }
         else if (cursors.left.isDown) {

        player.body.velocity.x = -250;

    }
 
            else {
            player.animations.play('jump');

}
        
       // jumpsound.play();
    }

    
     else if (cursors.right.isDown) {

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

    
    
    if (score == 100) {
    key.visible = true;
        

    }
    



}


function takeKey(player,key) {
    
   
    key.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
    
    
}


function monsterkill1(monster1,player) {

    player.kill();


}
function monsterkill2(monster2, player) {

    player.kill();


}
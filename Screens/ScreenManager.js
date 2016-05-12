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
var layerLava;
var key;
var score = 0;
var scoreString = '';
var scoreText;
var monster1;
var monster2;
var monster3;
var monster4;
var gem1;
var gem2;
var gem3;
var gem4;
var gem5;
var gem6;
var gem7;
var gem8;
var gem9;
var gem10;
var layerGate;
var stateText;
var stateText2;
var bgmusic;





function preload() {

    //!-- TILE MAP, PICS, AND JSON --!//
    game.load.tilemap('introLevel', 'Assets/TileMaps/introLevel.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles','Assets/Tilemaps/introLevelForeground.png');
    game.load.spritesheet('player', 'Assets/sprites.png', 64, 54);
    game.load.spritesheet('enemy', 'Assets/enemybabe.png', 64, 43);
    game.load.image('background2','Assets/Tilemaps/introLevelBackground_2.png');
    game.load.image('background1','Assets/Tilemaps/introLevelBackground_1.png');
    game.load.image('key','Assets/keyGreen.png',29,30);
    game.load.image('jew','Assets/jewel.png',24,22);
    game.load.audio('backgroundmusic', 'Assets/Sounds/backgroundmusic.mp3');

    



  

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
    layerLava = map.createLayer('Lava');
    layerGate = map.createLayer('Gate');
    
    CollideLayer = map.createLayer('Foreground');
    
    map.setCollisionBetween(0, 200, true, CollideLayer);
    
    map.setCollisionBetween(0, 1000, true, layerLava);
    
    map.setCollisionBetween(0, 1000, true, layerGate);
    
    layerGate.visible = false;


    
    layer.resizeWorld();
    
    
    // musics
    
    bgmusic = game.add.audio('backgroundmusic');

    bgmusic.play();
    bgmusic.volume -= 0.5;
    
  //  The score
    
    
    scoreString = 'Score : ';
    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });
    scoreText.fixedToCamera = true;
    
    // text
    
    stateText = game.add.text(150, 220, ' ', { font: '84px Arial', fill: '#fff' });
    stateText.visible = true;
    stateText.fixedToCamera = true;
    
    stateText2 = game.add.text(580, 10, ' ', { font: '34px Arial', fill: '#fff' });
    stateText2.visible = true;
    stateText2.fixedToCamera = true;
    
    
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

    ///////////////enemy 3

    monster3 = game.add.group();
    monster3.enableBody = true;
    monster3 = game.add.sprite(1792, 384, 'enemy');
    monster3.animations.add('enemy', [1, 2, 0], 10, true);
    monster3.animations.play('enemy');
    game.physics.arcade.enable(monster3);
    monster3.body.collideWorldBounds = true;


    /////////////// enemy 4

    monster4 = game.add.group();
    monster4.enableBody = true;
    monster4 = game.add.sprite(2880, 384, 'enemy');
    monster4.animations.add('enemy', [1, 2, 0], 10, true);
    monster4.animations.play('enemy');
    game.physics.arcade.enable(monster4);
    monster4.body.collideWorldBounds = true;
     
    ////////////// GEM 1 

    gem1 = game.add.group();
    gem1.enableBody = true;


    gem1 = game.add.sprite(1152,192, 'jew');




    game.physics.arcade.enable(gem1);
    gem1.body.collideWorldBounds = true;

    ///////////////////////////////gem 2
    gem2 = game.add.group();
    gem2.enableBody = true;


    gem2 = game.add.sprite(1536, 192, 'jew');




    game.physics.arcade.enable(gem2);
    gem2.body.collideWorldBounds = true;


    /////////////////////////////// gem3

    gem3 = game.add.group();
    gem3.enableBody = true;


    gem3 = game.add.sprite(1856, 192, 'jew');




    game.physics.arcade.enable(gem3);
    gem3.body.collideWorldBounds = true;

    /////////////////////// gem 4 
    gem4 = game.add.group();
    gem4.enableBody = true;


    gem4 = game.add.sprite(1984, 128, 'jew');




    game.physics.arcade.enable(gem4);
    gem4.body.collideWorldBounds = true;

    /////////////////////// gem 5
    gem5 = game.add.group();
    gem5.enableBody = true;


    gem5 = game.add.sprite(2112, 64, 'jew');




    game.physics.arcade.enable(gem5);
    gem5.body.collideWorldBounds = true;

    /////////////////////// gem 6
    gem6 = game.add.group();
    gem6.enableBody = true;


    gem6 = game.add.sprite(2368, 128, 'jew');




    game.physics.arcade.enable(gem6);
    gem6.body.collideWorldBounds = true;

    /////////////////////// gem 7
    gem7 = game.add.group();
    gem7.enableBody = true;


    gem7 = game.add.sprite(2432, 192, 'jew');




    game.physics.arcade.enable(gem7);
    gem7.body.collideWorldBounds = true;

    /////////////////////////// gem 8


    gem8 = game.add.group();
    gem8.enableBody = true;


    gem8 = game.add.sprite(2688, 256, 'jew');




    game.physics.arcade.enable(gem8);
    gem8.body.collideWorldBounds = true;

    /////////////////////////// gem 9


    gem9 = game.add.group();
    gem9.enableBody = true;


    gem9 = game.add.sprite(192,320, 'jew');




    game.physics.arcade.enable(gem9);
    gem9.body.collideWorldBounds = true;
    /////////////////////////// gem 10


    gem10 = game.add.group();
    gem10.enableBody = true;


    gem10 = game.add.sprite(320, 320, 'jew');




    game.physics.arcade.enable(gem10);
    gem10.body.collideWorldBounds = true;



    //monsters2///////////////////
   




    ////////////////////////

    
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
    game.add.tween(monster3).to({ y: 60 }, 4000, Phaser.Easing.Linear.None, true, 0, 1500, true);
    game.add.tween(monster4).to({ y: 60 }, 3500, Phaser.Easing.Linear.None, true, 0, 2000, true);


}




function update() {

    game.physics.arcade.collide(player, CollideLayer);
    game.physics.arcade.overlap(player, key, takeKey, null, this);
    game.physics.arcade.overlap(monster1, player, monsterkill1, null, this);
    game.physics.arcade.overlap(monster2, player, monsterkill2, null, this);
    game.physics.arcade.overlap(monster3, player, monsterkill3, null, this);
    game.physics.arcade.overlap(monster4, player, monsterkill4, null, this);
    game.physics.arcade.collide(player, layerLava, lavaKill, null, this);
    game.physics.arcade.overlap(player, gem1, takegem1, null, this);
    game.physics.arcade.overlap(player, gem2, takegem2, null, this);
    game.physics.arcade.overlap(player, gem3, takegem3, null, this);
    game.physics.arcade.overlap(player, gem4, takegem4, null, this);
    game.physics.arcade.overlap(player, gem5, takegem5, null, this);
    game.physics.arcade.overlap(player, gem6, takegem6, null, this);
    game.physics.arcade.overlap(player, gem7, takegem7, null, this);
    game.physics.arcade.overlap(player, gem8, takegem8, null, this);
    game.physics.arcade.overlap(player, gem9, takegem9, null, this);
    game.physics.arcade.overlap(player, gem10, takegem10, null, this);
    game.physics.arcade.collide(player, layerGate, gateFinish, null, this);


    
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

    
         if (score == 200 ) {
        
        layerGate.visible = true;
         
        

    }

    if (score == 100) {
    key.visible = true;
    
            stateText2.text = " A wild key appeared \n ";
    stateText2.visible = true;
 
    }
    



}


function takeKey(player,key) {
    
   
    key.kill();
    score += 100;
    scoreText.text = 'Score: ' + score;
    stateText2.text = " You've got the key \n ";
    stateText2.visible = true;

    
    
}


function monsterkill1(monster1,player) {

    player.kill();
    stateText.text = " GAME OVER \n ";
    stateText.visible = true;



}
function monsterkill2(monster2, player) {

    player.kill();
    stateText.text = " GAME OVER \n ";
    stateText.visible = true;



}
function monsterkill3(monster3, player) {

    player.kill();
    stateText.text = " GAME OVER \n ";
    stateText.visible = true;



}
function monsterkill4(monster4, player) {

    player.kill();
    stateText.text = " GAME OVER \n ";
    stateText.visible = true;



}


function lavaKill(player, layerLava) {

    player.kill();
    stateText.text = " GAME OVER \n ";
    stateText.visible = true;



}

function takegem1(player,gem1) {

    gem1.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}
function takegem2(player, gem2) {

    gem2.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}
function takegem3(player, gem3) {

    gem3.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}

function takegem4(player, gem4) {

    gem4.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}

function takegem5(player, gem5) {

    gem5.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}

function takegem6(player, gem6) {

    gem6.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}
function takegem7(player, gem7) {

    gem7.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}
function takegem8(player, gem8) {

    gem8.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}
function takegem9(player, gem9) {

    gem9.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}
function takegem10(player, gem10) {

    gem10.kill();
    score += 10;
    scoreText.text = 'Score: ' + score;
}


function gateFinish(player, layerGate){
    
    player.kill();
    
    stateText.text = " The End \n ";
    stateText.visible = true;

}





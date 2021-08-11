var database,ballon;

var ballonImg;

function preload() {
    database = firebase.database();
    var ballonPosition = database.ref('balloon/height');
    ballonPosition.on("value",readHeight,showError);
    ballonImg = loadAnimation("Hot Air Ballon-01.png","Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}

function setup() {
    console.log(database);
    createCanvas(500, 500);


    ballon.addAnimation("running",ballonImg);
    
}

function draw() {
    background('white');
    if (keyDown(LEFT_ARROW)) {
        ballon.x = ballon.x-10;
    }
    if (keyDown(RIGHT_ARROW)) {
        ballon.x = ballon.x+10;
    }
    if (keyDown(UP_ARROW)) {
        // updateHeight(0,-10);
        ballon.x = ballon.y-10;
    }
    if (keyDown(DOWN_ARROW)) {
        ballon.x = ballon.y+10;
    }

    drawSprites();
}

function updateHeight() {
    database.ref('balloon/height').set({
        'x':height.x+x,
        'y':height.y+y
    })
}

function readHeight() {
    height = data.val();
    ballon.x = height.x;
    ballon.y = height.y;
}




function showError() {
    console.log("Error in writing to the database.");
}
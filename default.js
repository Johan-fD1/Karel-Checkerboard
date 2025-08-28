/*
 * This program has Karel paint a checkerboard
 */

function start(){
    row();
    nextHelp();
    row();
    nextNext();
    row();
    nextHelp();
    row();
    nextNext();
    row();
    nextHelp();
    row();
    nextNext();
    row();
    nextHelp();
    row();
    reTurn();
}
function row(){
    paint(Color.black);
    move();
    paint(Color.red);
    move();
    paint(Color.black);
    move();
    paint(Color.red);
    move();
    paint(Color.black);
    move();
    paint(Color.red);
    move();
    paint(Color.black);
    move();
    paint(Color.red);

}
function reTurn(){
    turnLeft();
    for(var i = 0; i < 7; i++){
        move();
    }
    turnLeft();
}
function nextHelp(){
    turnLeft();
    move();
    turnLeft();
}
function nextNext(){
    turnRight();
    move();
    turnRight();
}
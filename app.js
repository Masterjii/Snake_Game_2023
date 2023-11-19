


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let CellSize = 50;
let boardhieght = 600;
let boardwidth = 1000;
let direction = 'right';

// snak ke cell jiske vajah se snake rectangle bna rha h

// let snakecells = [ [0,0] , [50,0] , [100,0] ];

let snakecells = [ [0,0] ];

// Add food generation ->

function foodGenrate(){
    return [
        Math.round((Math.random()*(boardwidth - CellSize)) / CellSize) * CellSize,
        Math.round((Math.random()*(boardhieght - CellSize)) / CellSize) * CellSize,
    ]
}

let food = foodGenrate();

// snack ka draw 

function draw(){

    // erase poori board 
    ctx.clearRect(0 , 0 , boardwidth , boardhieght);
    for(let cell of snakecells){
        ctx.fillStyle = 'green';
        ctx.fillRect(cell[0] , cell[1] , CellSize , CellSize);
    }
    ctx.fillStyle = '#B4D03D';
    ctx.fillRect(food[0], food[1] , CellSize, CellSize)
}

// har thodi der bad snak update hoga

function update(){

    let headX = snakecells[snakecells.length - 1][0];
    let headY = snakecells[snakecells.length - 1][1];

    let newHeadX;
    let newHeadY;

    if(direction === "right"){
        newHeadX = headX + CellSize;
        newHeadY = headY;
    }
    else if(direction === "left"){
        newHeadX = headX - CellSize;
        newHeadY = headY;
    }
    else if(direction === "up"){
        newHeadX = headX;
        newHeadY = headY - CellSize;
    }
    else{
        newHeadX = headX;
        newHeadY = headY + CellSize;
    }

    snakecells.push([newHeadX , newHeadY]);

    // add eat food
    
    if(food[0] === newHeadX && food[1] === newHeadY){
        food = foodGenrate();
    }else {
        snakecells.shift();
    }
}

document.addEventListener('keydown' , function(e){
    if(e.key == 'ArrowUp'){
        direction = 'up'
    }
    else if(e.key == 'ArrowRight'){
        direction = 'right'
    }
    else if(e.key == 'ArrowDown'){
        direction = 'down'
    }
    else{
        direction = 'left'
    }
})

setInterval(function(){
    update();
    draw();
}, 200)



















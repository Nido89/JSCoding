const canvas = document.querySelector("canvas");
//console.log(canvas);
const ctx = canvas.getContext("2d");
let secondary = "#FFcE00";
let primary = "#AF1E2D";

//size of the snake
const grid = 22;
let count = 0;
let score = 0;


let snake = {
    x: grid * 5,
    y: grid * 5,

    vx: grid,
    vy: 0,

    cells: [],
    //Length of snake
    maxCells: 3

};
let apple = {
    x: grid * 10,
    y: grid * 10
}

function Update() {
    requestAnimationFrame(Update);

    //Speed of Snake 
    if (++count < 6) {
        return;
    }
    count = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.x += snake.vx;
    snake.y += snake.vy;
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    } else if (snake.x >= canvas.width) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    } else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    snake.cells.unshift({
        x: snake.x,
        y: snake.y
    });

    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }
    //Drawing Apple
    ctx.fillStyle = secondary;
    //size of the apple box
    ctx.fillRect(apple.x, apple.y, grid -4, grid -4);

    //Drawing Snake
    ctx.fillStyle = primary;
    snake.cells.forEach(function (cell, index) {
        //size of the snake
        ctx.fillRect(cell.x, cell.y, grid -4, grid -4);
        //eating the apple
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            score++;


            apple.x = getRandomInt(0, 20) * grid;
            apple.x = getRandomInt(0, 10) * grid;
        }

        for (let i = index +1;i< snake.cells.length;i++){
            if(cell.x=== snake.cells[i].x && cell.y=== snake.cells[i].y){
                window.location.reload();
            }
        }
    });
// Draw Score
    //showing Score
    ctx.font="72px Helvetica";
    ctx.fillText(score,canvas.width/2,canvas.height/2);
    ctx.fillStyle="rgba(255,255,255,0.5)";
    ctx.textAlign="center";

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("keydown", function (evt) {
    if (evt.which === 37 && snake.vx === 0) {
        snake.vx = -grid;
        snake.vy = 0;
    } else if (evt.which === 38 && snake.vy === 0) {
        snake.vy = -grid;
        snake.vx = 0;
    } else if (evt.which === 39 && snake.vx === 0) {
        snake.vx = grid;
        snake.vy = 0;

    } else if (evt.which === 40 && snake.vy === 0) {
        snake.vy = grid;
        snake.vx = 0;

    }
})

//Start the Grame at 60fps
requestAnimationFrame(Update);
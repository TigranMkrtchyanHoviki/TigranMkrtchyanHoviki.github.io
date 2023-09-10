const convas = document.getElementById("game");
const ctx = convas.getContext("2d")

const ground = new Image();
ground.src = "img/ground.png"

const foodImg = new Image();
foodImg.src = "img/food.png";


let box = 32;
let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];

snake[0] = {
    x: 9 * box,
    y: 10 * box
}

let snakeBody = []

let fixedCoordX
let fixedCoordY

let idLevel
let idCtx

let loseText = false
let setTimeoutId

let level = 1

let levelArr = [{
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box
}]

// for (let i = 0; i < 99; i++) {
//     levelArr.push({
//         x: Math.floor((Math.random() * 17 + 1)) * box,
//         y: Math.floor((Math.random() * 15 + 3)) * box
//     })
// }

// let saveX = 32
// let saveY = 96


document.addEventListener("keydown", direction);

let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != "right") {
        dir = "left";
        loseText = false
        clearTimeout(setTimeoutId)
        // console.log(fixedCoordX, fixedCoordY)
    } else if (event.keyCode == 38 && dir != "down") {
        dir = "up";
        loseText = false
        clearTimeout(setTimeoutId)
        // console.log(fixedCoordX, fixedCoordY)
    } else if (event.keyCode == 39 && dir != "left") {
        dir = "right";
        loseText = false
        clearTimeout(setTimeoutId)
        // console.log(fixedCoordX, fixedCoordY)
    }
    else if (event.keyCode == 40 && dir != "up") {
        dir = "down";
        loseText = false
        clearTimeout(setTimeoutId)
        // console.log(fixedCoordX, fixedCoordY)
    }
}


function drawGame() {

    ctx.drawImage(ground, 0, 0); // --------------------- Խաղադաշտը նկարելու համար

    ctx.drawImage(foodImg, food.x, food.y); // ---------- Խնձորը նկարելու համար

    let snakeX = snake[0].x; // 288
    let snakeY = snake[0].y; // 320

    if(level === 9) {  // ------------------------- խաղի ավարտ, եթե 9 Level-ներն էլ անցնում ա
        console.log("OOO")
            snake.length = 0
            snake.push({})
            snake[0].x = 9 * box
            snake[0].y = 10 * box
            snakeX = snake[0].x
            snakeY = snake[0].y
            dir = null
            score = 0
            ctx.fillStyle = "yellow"
            ctx.font = "30px serif"
            ctx.fillText(`Level 9`, 480, 50)

            levelArr.length = 0

                levelArr.push({
                    x: Math.floor((Math.random() * 17 + 1)) * box,
                    y: Math.floor((Math.random() * 15 + 3)) * box
                })
            
            ctx.strokeStyle = "red"
            ctx.font = "50px serif"
            ctx.strokeText("Congratulations, you won!", 35, 300)
            
           idLevel =  setTimeout(() => {
                level = 1
            }, 3000)

            idCtx = setTimeout(() => {
                ctx.strokeStyle = "blue"
                ctx.font = "50px serif"
                ctx.strokeText("Please start again", 130, 300)
            }, 4000)
    }

    for(let i = 1; i < snake.length; i++) { // ---------------- եթե օձի գլխով դիպչի իր մարմնին, ապա խաղը սկսվում է նորից
        
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
            snake.length = 0
            snake.push({})
            snake[0].x = 9 * box
            snake[0].y = 10 * box
            snakeX = snake[0].x
            snakeY = snake[0].y
            dir = null
            score = 0
        }
    }

    for (let i = 0; i < levelArr.length; i++) { // -------------------- Խոչնդոտները խաղադաշտում նկարելու համար
        // console.log(levelArr)
        let x = levelArr[i].x
        let y = levelArr[i].y

        if ((food.x === levelArr[i].x && food.y === levelArr[i].y) || // -------- խնձորի և խոչնդոտների կոորդինատները չհամընկնելու համար
            (food.x === levelArr[i].x && food.y === levelArr[i].y + box) ||
            (food.x === levelArr[i].x + box && food.y === levelArr[i].y)) {

            food = {
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box,
            }
        }

        if (y === 544 && x <= 544) {
            ctx.fillStyle = "purple"
            ctx.fillRect(x, y, 2 * box, box)
        } else if (x === 544 && y <= 544) {
            ctx.fillStyle = "purple"
            ctx.fillRect(x, y, box, 2 * box)
        } else {

            if( i % 2 === 0) {
                ctx.fillStyle = "purple"
                ctx.fillRect(x, y, box, 2 * box)
            }else {
                ctx.fillStyle = "purple"
                ctx.fillRect(x, y, 2 * box, box)
            }
        }

        if (score === 15) { // ----------- համապատասխան միավորները հավաքելու դեպքում, level-ը բարձրանում է և խաղը սկսում նորից նոր level-ով
            console.log("aaa")
            level++
            snake.length = 0
            snake.push({})
            snake[0].x = 9 * box
            snake[0].y = 10 * box
            snakeX = snake[0].x
            snakeY = snake[0].y
            dir = null
            console.log(loseText)
            score = 0
            ctx.fillStyle = "yellow"  // Level-ը խաղադաշտում արտացոլելու համար
            ctx.font = "30px serif"
            ctx.fillText(`Level ${level}`, 480, 50)
            levelArr.push({
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box
            })

        } else {
            ctx.fillStyle = "yellow"  // Level-ը խաղադաշտում արտացոլելու համար
            ctx.font = "30px serif"
            ctx.fillText(`Level ${level}`, 480, 50)
        }
    }

    if (loseText) { // ------------------------Երբ օձը դիպչում է խաղադաշտի պատերին, վերևի հատվածում հայտնվում է հաղորդագրություն պարտություն մասին
        ctx.fillStyle = "red"
        ctx.font = "50px serif"
        ctx.fillText("You lost", 230, 50)

        setTimeoutId = setTimeout(() => {
            ctx.fillStyle = "blue"
            ctx.font = "30px serif"
            ctx.fillText("Please start again", 210, 80)
        }, 800)

    }

    for (i = 0; i < snake.length; i++) {  // --------------------- օձին նկարելու համար ցիկլ ենք պտտվում 
        
        // ctx.fillStyle = i === 0 ? "yellow" : "green" 
        // ctx.fillRect(snake[i].x, snake[i].y, box, box)
        if(snake.length === 0) {
            
            ctx.fillStyle = "yellow";
            ctx.fillRect(snake[i].x, snake[i].y, box, box)
        
        }else {
             
            if(i === 0) {
                 ctx.fillStyle = "yellow";
                 ctx.fillRect(snake[i].x, snake[i].y, box, box)
             }else {
                 ctx.fillStyle = "green";
                 ctx.fillRect(snake[i].x, snake[i].y, box, box)
             }

        }
        

        if (dir === null || dir === undefined) { // -------------------------- Օձի փակ աչքերը ստանալու համար 
            ctx.fillStyle = "black"
            ctx.beginPath()
            ctx.moveTo(snake[0].x + 4, snake[0].y + 12)
            ctx.lineTo(snake[0].x + 11, snake[0].y + 12)
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(snake[0].x + 28, snake[0].y + 12)
            ctx.lineTo(snake[0].x + 21, snake[0].y + 12)
            ctx.stroke()
        }

        if (dir === "up") {  // ---------------------------------------- Օձի բաց աչքերի համար

            clearTimeout(idLevel)
            clearTimeout(idCtx)
            
            ctx.fillStyle = "black"
            ctx.arc(snake[0].x + 7, snake[0].y + 12, 3, 0, 2 * Math.PI)
            ctx.fill()

            ctx.beginPath()
            ctx.arc(snake[0].x + 25, snake[0].y + 12, 3, 0, 2 * Math.PI)
            ctx.fill()

        }

        if (dir === "down") { // --------------------------------------- Օձի բաց աչքերի համար

            clearTimeout(idLevel)
            clearTimeout(idCtx)

            ctx.fillStyle = "black"
            ctx.arc(snake[0].x + 7, snake[0].y + 20, 3, 0, 2 * Math.PI)
            ctx.fill()

            ctx.beginPath()
            ctx.arc(snake[0].x + 25, snake[0].y + 20, 3, 0, 2 * Math.PI)
            ctx.fill()
        }

        if (dir === "right") { // --------------------------------------  Օձի բաց աչքերի համար

            clearTimeout(idLevel)
            clearTimeout(idCtx)

            ctx.fillStyle = "black"
            ctx.arc(snake[0].x + 25, snake[0].y + 7, 3, 0, 2 * Math.PI)
            ctx.fill()

            ctx.beginPath()
            ctx.arc(snake[0].x + 25, snake[0].y + 25, 3, 0, 2 * Math.PI)
            ctx.fill()
        }

        if (dir === "left") { // --------------------------------------- Օձի բաց աչքերի համար

            clearTimeout(idLevel)
            clearTimeout(idCtx)

            ctx.beginPath()
            ctx.fillStyle = "black"
            ctx.arc(snake[0].x + 7, snake[0].y + 7, 3, 0, 2 * Math.PI)
            ctx.fill()

            ctx.beginPath()
            ctx.arc(snake[0].x + 7, snake[0].y + 25, 3, 0, 2 * Math.PI)
            ctx.fill()
        }

    }

    ctx.fillStyle = "white" // -------------------------------------- Միավորները նկարելու համար
    ctx.font = "50px Arial"
    ctx.fillText(score, box * 2.5, box * 1.5)

    if (snakeX == food.x && snakeY == food.y) { // --------------------- Հենց օձը ուտում է խնձորը, խնձորի կոորդինատները փոխվում են
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        }

    }else {
        snake.pop()
    }


    if (snakeX < 32 || snakeX >= 576 || snakeY >= 576 || snakeY < 96) { // Պայման, որը ապահովում է խաղադաշտի սահմաններից օձի դուրս չգալը

        console.log("ggg")
        
        snake.length = 0
        snake.push({})
        snake[0].x = 9 * box
        snake[0].y = 10 * box
        snakeX = snake[0].x
        snakeY = snake[0].y
        dir = null
        score = 0
        loseText = true

        for (let i = 0; i < levelArr.length; i++) { // - Ամեն let game = setInterval(drawGame, 100) - այս setInterval-ը աշխատելուց ջնջում ա նախորդի setInterval-ի նկարածի խոչնդոտները 
            let x = levelArr[i].x
            let y = levelArr[i].y
            ctx.clearRect(x, y, 2 * box, 2 * box)
        }

        levelArr.length = 0
        level = 1


        levelArr.push({
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        })

        // for(let i = 0; i < levelArr.length; i++) {  // ------------------------- Փորձել եմ գրել այնպիսի կոդ, որը պետք է ապահովի օձի գլուխը խոչնդոտների վրա չհայտնվելու համար։ մնացել է կիսատ
        //     if ((snakeX === levelArr[i].x && snakeY === levelArr[i].y) || 
        //         (snakeX === levelArr[i].x && snakeY === levelArr[i].y + box) ||
        //         (snakeX === levelArr[i].x + box && snakeY === levelArr[i].y)) {

        //             levelArr.length = 0
        //     }
        // }

        // console.log("levelArr", levelArr)
    }

    if (dir == "left") snakeX -= box; // ----------------- Օձի ձախ շարժվելու համար
        

    if (dir == "right") snakeX += box; // ---------------- Օձի աջ շարժվելու համար
        

    if (dir == "up") snakeY -= box; // ------------------- Օձի վերև շարժվելու համար
        

    if (dir == "down") snakeY += box; // ----------------- Օձի ներքև շարժվելու համար

    for (let i = 0; i < levelArr.length; i++) { // ------------------------- Խոչնդոտներին դիպչելուց խաղը սկզբից սկսելու համար


        if ((snakeX === levelArr[i].x && snakeY === levelArr[i].y && dir === "right") ||
            (snakeX === levelArr[i].x && snakeY === levelArr[i].y + box && dir === "right") ||
            (snakeX < levelArr[i].x + box && snakeY === levelArr[i].y && dir === "left") ||
            (snakeX < levelArr[i].x + box && snakeY === levelArr[i].y + box && dir === "left") ||
            (snakeX === levelArr[i].x && snakeY === levelArr[i].y && dir === "down") ||
            (snakeX === levelArr[i].x && snakeY === levelArr[i].y + box && dir === "up")) {

                console.log("yyy")
            
            snake.length = 0
            snake.push({})
            snake[0].x = 9 * box
            snake[0].y = 10 * box
            snakeX = snake[0].x
            snakeY = snake[0].y
            dir = null
            score = 0
            loseText = true

            levelArr.length = 0
            level = 1
            levelArr.push({
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box
            })
            console.log("levelArr", levelArr)
            console.log("snake", snake)
        }
    }

    let newHead = {
        x: snakeX,
        y: snakeY,

    }

    snake.unshift(newHead)

    game ()

    // switch(level){ // փորձել եմ նաև օձի շարժվելու տեմպը, levle-ից level արագացնեմ
    //     case 2:
    //     case 3: 
    //     case 4:
    //         clearTimeout(game)
    //         let id_234 = setTimeout(drawGame, 170)  
    //     break
    //     case 5:
    //     case 6:
    //     case 7:
    //         clearTimeout(id_234)
    //         let id_567 = setTimeout(drawGame, 140)
    //     break  
    //     case 8:
    //     case 9:
    //     case 10:
    //         clearTimeout(id_567)
    //         let id10 = setTimeout(drawGame, 100)  
    //     break   
    // }

}

let id_123
let id_567
let id_789

function game () {

switch (level) { // փորձել եմ նաև օձի շարժվելու տեմպը, levle-ից level արագացնեմ
        
        case 1:
        case 2: 
        case 3:
           id_123 = setTimeout(drawGame, 200)
        break
        case 4:
        case 5:
        case 6:
            clearTimeout(id_123)
           id_567 = setTimeout(drawGame, 150)
        break  
        case 7:
        case 8:
        case 9:
            clearTimeout(id_567)
            id_789 = setTimeout(drawGame, 100)  
        break   

}

}

game ()


// let game = setInterval(drawGame, 200)
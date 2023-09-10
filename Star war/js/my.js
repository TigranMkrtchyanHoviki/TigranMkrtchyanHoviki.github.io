const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const canvasBackgraound = new Image()
canvasBackgraound.src = "img/canvas_background.jpg"

const spaceship = new Image()
spaceship.src = "img/spaceship.png"

const rocketImag = new Image()
rocketImag.src = "img/e3.png"

const bombImag = new Image()
bombImag.src = "img/bomb.png"

const gameOverImg = new Image()
gameOverImg.src = "img/game over.jpg"

const aoudioShip = new Audio()
aoudioShip.src = "audio/sound spaceShip .mp3"

const aoudioRocket = new Audio()
aoudioRocket.src = "audio/rocket .mp3"

const audioBoom = new Audio()
audioBoom.src = "audio/boom.wav"

const audioFallingBomb = new Audio()
audioFallingBomb.src = "audio/falling bomb sound.mp3"

const audioSpaceShipBoom = new Audio()
audioSpaceShipBoom.src = "audio/spaceShip Boom.mp3"

const audioGameOverTyping = new Audio() 
audioGameOverTyping.src = "audio/sound game over typing.mp3"

let enemyArr = []

let heightShip = 170

let gameOverWidht = 700
let gameOverHeight = 400

let gameOverData = {
    x: (canvas.width - gameOverWidht) / 2,
    y: -gameOverHeight,
    width: gameOverWidht,
    height: gameOverHeight
}

let rocketArr = []

let letter = ["G", "A", "M", "E", "O", "V", "E", "R"]

function setEnemy() { // ----------------------------------- // ֆունկցիա, որը ապահովում է թշնամիների տեղակայումը խաղադաշտի վրա

    for (let i = 0; i < 5; i++) {
        let enemyObj = {}
        let enemy = new Image()
        enemy.src = "img/enemy.png"


        if (i === 0) {
            enemyObj.enemy = enemy
            enemyObj.x = 20
            enemyObj.y = 90
            enemyObj.width = 100
            enemyObj.height = 100
        } else {
            enemyObj.enemy = enemy
            enemyObj.x = enemyArr[i - 1].x + enemyArr[i - 1].width + 249
            enemyObj.y = 90
            enemyObj.width = 100
            enemyObj.height = 100
        }

        enemyArr.push(enemyObj)

    }

}

setEnemy()

let spaceshipHero = { // --------------------------------------------- ինքնափիռի տվյալները
    x: enemyArr[0].x + enemyArr[0].width + (249 - heightShip) / 2,
    y: canvas.height - heightShip - 45,
    width: 150,
    height: heightShip,
}

let dir

let indexArr = []

let enemyShootCount = 0

let check = true

let deletShip = false

let checkDawnGameOver = false

let checkUpGameOver = false

let countLetterOfGameOver = 0

document.addEventListener("keydown", diraction)

function diraction(event) { // ---------------------- Ինքնաթիռի աջ ու ձախ շարժվելու համար
    if (event.code === "ArrowRight") dir = "right"
    if (event.code === "ArrowLeft") dir = "left"
}

document.addEventListener("keyup", stopMovingHero)

function stopMovingHero(event) { // ---------------------- Ինքնաթիռի աջ ու ձախ կնոպկայի վրայից մատդ վերցնելուց ինքնաթիռի տեղաշարժի դադարեցման համար
    if (event.code !== "Space") {
        dir = null
    }
    aoudioShip.currentTime = 0
}

document.addEventListener("keydown", shooting)

function shooting(event) { // --------------------------------------- Ինքնաթիռի կրակելու համար

    if (event.code === "Space") {

        if (rocketArr.length === 0) {
            aoudioRocket.play()
            rocketArr.push({
                x: spaceshipHero.x + spaceshipHero.width / 2 - 15,
                y: spaceshipHero.y,
                width: 50,
                height: 80
            })
        } else {

            for (let i = 0; i < rocketArr.length; i++) {
                if (rocketArr[rocketArr.length - 1].y <= canvas.height / 2 - 30) {
                    aoudioRocket.currentTime = 0
                    aoudioRocket.pause()
                    rocketArr.push({
                        x: spaceshipHero.x + spaceshipHero.width / 2 - 15,
                        y: spaceshipHero.y,
                        width: 50,
                        height: 80
                    })
                }
            }
        }

    }
}

function dawnGameOver () { // ------------------------------------------------------------ ինքնաթիռի խբվելուց հետո, վերևից game over-ի պլակատի իջնելու հմար
    
    ctx.drawImage(gameOverImg, gameOverData.x, gameOverData.y, gameOverData.width, gameOverData.height)
    
    if(gameOverData.y >= (canvas.height - gameOverData.height) / 2 ) {
        gameOverData.y === (canvas.height - gameOverData.height) / 2 
     }else {
        gameOverData.y += 75
     }
}

function upGameOver () { // -------------------------------------------------------------- ներքևից game over-ի պլակատի վեր բարձրանելու հմար
    
    ctx.drawImage(gameOverImg, gameOverData.x, gameOverData.y, gameOverData.width, gameOverData.height)
    
    if(gameOverData.y <= -gameOverHeight) {
        gameOverData.y === gameOverHeight
     }else {
        gameOverData.y -= 75
     }
}

function setShootingEnemyCount() {
    enemyShootCount = Math.floor(Math.random() * 5 + 1)
}

function dawnAndUpGameOver () {

    if(checkDawnGameOver) {
       
        dawnGameOver ()
        
        let letterSpaceing = gameOverData.x
        
        if(gameOverData.y >= (canvas.height - gameOverData.height) / 2) {

            letter.forEach((val, index) => {

                if(index === 0) {
                    letterSpaceing += 90
                }
                if(val === "O" ){
                    letterSpaceing += 75
                }else {
                    letterSpaceing += 50
                }
                    ctx.fillStyle = "red"
                    ctx.font = "50px serif"
                    ctx.fillText(`${val}`, letterSpaceing, gameOverData.y + 75)
            })

        }
        
        setTimeout(() => {
            checkUpGameOver = true
        }, 5000) 
    }

    if(checkUpGameOver) {
        upGameOver ()
        checkDawnGameOver = false
        audioFallingBomb.pause()
    }

    if(gameOverData.y === -gameOverHeight) {
        checkUpGameOver = false
    }

    }

function update() { // ----------------- ինքնաթիռի աջ ու ձխ տեղաշարժի կորդինատները փոփոխելու համար, ռակետները կրակելու համար,  

    if (dir === "right") {
        aoudioShip.play()
        if (spaceshipHero.x >= 1526 - spaceshipHero.width - 10) {
            spaceshipHero.x = 1526 - spaceshipHero.width - 10
        } else {
            spaceshipHero.x += 25
        }

    }
    if (dir === "left") {
        aoudioShip.play()
        if (spaceshipHero.x <= 10) {
            spaceshipHero.x = 10
        } else {
            spaceshipHero.x -= 25
        }
    }

    rocketArr.forEach((rock) => {
        rock.y -= 40
    })

    rocketArr = rocketArr.filter((rock) => {
        if (rock.y < 0) {
            return false
        } else {
            return true
        }
    })

    rocketArr.forEach((rock) => {
        enemyArr.forEach((enemy) => {
            if ((rock.x >= enemy.x - 30 && rock.x <= enemy.x + enemy.width) &&
                (rock.y <= enemy.y + enemy.height)) {
                enemy.deleteMe = true
                rock.deleteMe = true
                audioBoom.currentTime = 0
                audioBoom.play()
            }
        })

        rocketArr = rocketArr.filter((rock) => {
            if (rock.deleteMe) {
                return false
            } else {
                return true
            }
        })

        enemyArr = enemyArr.filter((enemy) => {
            if (enemy.deleteMe) {
                return false
            } else {
                return true
            }
        })
    })

    if (enemyArr.length === 0) {
        console.log("AOE")
        setTimeout(() => {
            setEnemy()
        }, 1000)
    }

    setShootingEnemyCount() // 3

    if (check) {

        for (let i = 0; i < enemyShootCount; i++) {
            let index = Math.floor(Math.random() * 5)

            indexArr.push(index)
        }

        indexArr = indexArr.filter((val, index) => {
            return index === indexArr.lastIndexOf(val)
        })

        indexArr.forEach((index) => {

            enemyArr.forEach((enemy, enemyIndex) => {

                if (enemyIndex === index) {
                    enemy.xBomb = enemy.x + enemy.width / 2
                    enemy.yBomb = enemy.y + enemy.height
                }
            })

        })

        check = false
    }

    enemyArr.forEach((enemy) => {

        let time = Math.floor(Math.random() * 5000)

        let id = setTimeout(() => {
            enemy.yBomb += 15
            clearTimeout(id)
        }, time)


    })

    indexArr.length = 0

    enemyArr.forEach((enemy) => {
        if (enemy.yBomb >= canvas.height) {
            enemy.xBomb = enemy.x + enemy.width / 2
            enemy.yBomb = enemy.y + enemy.height
            check = true
        }
    })

    enemyArr.forEach((enemy) => {
        if ((enemy.xBomb >= spaceshipHero.x && enemy.xBomb <= spaceshipHero.x + spaceshipHero.width) &&
            (enemy.yBomb + enemy.height >= spaceshipHero.y + spaceshipHero.height / 2)) {

                rocketArr.length = 0
        
        audioSpaceShipBoom.play()

        for(let key in spaceshipHero){
            delete spaceshipHero[key]
        } 

        rocketArr.length = 0

        dir = null

        deletShip = true
        
        }

        if(deletShip) {
            
            checkDawnGameOver = true

            setTimeout(() => {  // ------------------------------------ էս անպայման պետք ա նայեմ
               spaceshipHero.x = enemyArr[0].x + enemyArr[0].width + (249 - heightShip) / 2,
               spaceshipHero.y = canvas.height - heightShip - 45
               spaceshipHero.width = 150
               spaceshipHero.height = heightShip
            //    checkGameOver = false
           }, 9000)

           deletShip = false
       }
    })

    if (enemyArr.length === 0) {
        check = true
    }

}

function draw() {

    ctx.drawImage(canvasBackgraound, 0, 0)

    ctx.drawImage(spaceship, spaceshipHero.x, spaceshipHero.y, spaceshipHero.width, spaceshipHero.height)

    for (let i = 0; i < rocketArr.length; i++) {
        ctx.drawImage(rocketImag, rocketArr[i].x, rocketArr[i].y, rocketArr[i].width, rocketArr[i].height)
    }

    for (let i = 0; i < enemyArr.length; i++) { // ------------------------------------------------------------ հակառակորդների նակարելու համար
        ctx.drawImage(enemyArr[i].enemy, enemyArr[i].x, enemyArr[i].y, enemyArr[i].width, enemyArr[i].height)
    }

    enemyArr.forEach((enemy) => {
        ctx.drawImage(bombImag, enemy.xBomb, enemy.yBomb += 15, enemy.width / 4, enemy.height / 4)
        audioFallingBomb.play()
    })

    update()

    dawnAndUpGameOver ()

}

setInterval(draw, 100)

// function dawnAndUpGameOver () {

//     if(checkDawnGameOver) {
//         dawnGameOver ()
//         audioFallingBomb.pause()
//         setTimeout(() => {
//             checkUpGameOver = true
//         }, 5000) 
//     }

//     if(checkUpGameOver) {
//         upGameOver ()
//         checkDawnGameOver = false
//         audioFallingBomb.pause()
//     }

//     if(gameOverData.y === -gameOverHeight) {
//         checkUpGameOver = false
//     }

//     }

// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets
let cvsWrapper = null;
// sound variables
let soundWing, soundHit, soundDie, soundScore;
// image variables
let baseImg, beforeGameImg, gameOverImg;
let birdMImgArr = [];
let birdDImgArr = [];
let birdUImgArr = [];
let pipeUpImgArr = [];
let pipeDownImgArr = [];
let scoreImg = []
let bgImgArr = []; // bg = background
// x and y positions variables of bird and background;
let x1, y1, xBird, yBird;
// picture scale base
let bgScale;
// width and height of all physical object
let bgHeight, bgWidth, birdHeight, birdWidth, baseHeight, baseWidth, pipeWidth, pipeHeight, beforeGameWidth, beforeGameHeight,
    scoreWidth, scoreHeight, gameOverWidth, gameOverHeight;
// bird's velocity and acceleration --- y direction
let vy, ay;
// bird's angular acceleration
let birdAnguAccele;
// pipe setting array
let pipeArr = [];
// all timer we need
let pipeTimer = 200;
let flyTimer = 0;
let scoreTimer = 0;
let gameOverTimer = 0;
// some game flags
let isDie = false;
let isGameStart = false;
let isSetScoreSound = false;
// some basic game parameters
let sec, secTenth, secBase;
// some game parameters we can set 
const bgSpeedBase = 1.5;
let bgSpeed = bgSpeedBase;
const bgAccele = 0.001
const pipeCreateBase = 180;
let pipeCreateSpeed = pipeCreateBase;
const pipeCreateAccele = 0.07;
let birdSpeedAfterFly = -6;
let flyFrequency = 5;
let gameRestartSpeed = 90;
// some random variables we need
let birdChoser = 0; // choose bird color
let bgChoser = 0; // choose background color

function preload() {
    // load image
    bgImgArr.push(loadImage("assets/sprites/background-day.png"));
    bgImgArr.push(loadImage("assets/sprites/background-night.png"));
    baseImg = loadImage("assets/sprites/base.png");
    birdDImgArr.push(loadImage("assets/sprites/bluebird-downflap.png"));
    birdDImgArr.push(loadImage("assets/sprites/redbird-downflap.png"));
    birdDImgArr.push(loadImage("assets/sprites/yellowbird-downflap.png"));
    birdMImgArr.push(loadImage("assets/sprites/bluebird-midflap.png"));
    birdMImgArr.push(loadImage("assets/sprites/redbird-midflap.png"));
    birdMImgArr.push(loadImage("assets/sprites/yellowbird-midflap.png"));
    birdUImgArr.push(loadImage("assets/sprites/bluebird-upflap.png"));
    birdUImgArr.push(loadImage("assets/sprites/redbird-upflap.png"));
    birdUImgArr.push(loadImage("assets/sprites/yellowbird-upflap.png"));
    pipeUpImgArr.push(loadImage("assets/sprites/pipe-green-upper.png"));
    pipeUpImgArr.push(loadImage("assets/sprites/pipe-red-upper.png"));
    pipeDownImgArr.push(loadImage("assets/sprites/pipe-green-lower.png"));
    pipeDownImgArr.push(loadImage("assets/sprites/pipe-red-lower.png"));
    beforeGameImg = loadImage("assets/sprites/message.png");
    for (var i = 0; i < 10; i++) {
        scoreImg.push(loadImage("assets/sprites/" + i + ".png"));
    }
    gameOverImg = loadImage("assets/sprites/gameover.png");

    // load sound
    soundWing = loadSound("assets/audio/wing.wav");
    soundHit = loadSound("assets/audio/hit.wav");
    soundDie = loadSound("assets/audio/die.wav");
    soundScore = loadSound("assets/audio/point.wav");
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");

    // setup code below
    imageSetup();
    physicsSetup();
}

function draw() {
    // Render function (called per frame.)
    if (isGameStart === false) {
        paintGameStart();
    } else {
        paintBackground();
        paintBird();
        paintPipe();
        paintBase();
        checkIsGameOver();
        if (isDie === true) {
            paintGameOver();
        } else {
            paintScore();
        }
    }
}

function keyPressed() {
    if (keyCode === 32 && isDie === false && isGameStart === true) { // control bird

        vy = birdSpeedAfterFly;
        birdAnguAccele = -PI / 6;
        soundWing.play();
    } else if (keyCode === 32 && isGameStart === false) { // start game

        isGameStart = true;
        if (isSetScoreSound === false) {
            setInterval(() => { // set score sound per second
                if (isDie === false && isGameStart === true) {
                    soundScore.play()
                    isSetScoreSound = true;
                }
            }, 1000);
        }
    }
}

// pipe object
function PipeObj() {
    this.upX = bgWidth;
    this.upY = 0;
    this.downX = bgWidth;
    this.downY = 0;
    this.spaceBetweenPipes = 180;
    this.pipeChoser = 0;
    // randomize pipe position and which pipe color to use
    this.setPipe = function() {
            this.upY = Math.floor(Math.random() * (pipeHeight + 1));
            this.downY = Math.floor(Math.random() * (bgHeight - baseHeight - this.upY + 1)) + this.upY;
            if (this.downY <= (bgHeight - baseHeight - pipeHeight)) {
                this.downY = bgHeight - baseHeight - pipeHeight;
            }
            if ((this.downY - this.upY) <= this.spaceBetweenPipes) {
                this.downY = this.upY + this.spaceBetweenPipes;
            }
            this.upY = this.upY - pipeHeight;
            this.pipeChoser = Math.floor(Math.random() * 2);
        }
        // methods to move pipe
    this.decreUpX = function() {
        this.upX -= bgSpeed;
    }
    this.decreDownX = function() {
        this.downX -= bgSpeed;
    }
}
// set image
function imageSetup() {
    bgScale = width / bgImgArr[0].width;
    bgWidth = bgImgArr[0].width * bgScale;
    bgHeight = bgImgArr[0].height * bgScale;
    baseWidth = baseImg.width * bgScale;
    baseHeight = baseImg.height * bgScale;
    birdWidth = birdDImgArr[0].width * bgScale;
    birdHeight = birdDImgArr[0].height * bgScale;
    pipeWidth = pipeUpImgArr[0].width * bgScale;
    pipeHeight = pipeUpImgArr[0].height * bgScale;
    beforeGameWidth = beforeGameImg.width * bgScale;
    beforeGameHeight = beforeGameImg.height * bgScale;
    scoreWidth = scoreImg[0].width * bgScale;
    scoreHeight = scoreImg[1].height * bgScale;
    gameOverWidth = gameOverImg.width * bgScale;
    gameOverHeight = gameOverImg.height * bgScale;
}
// set or reset physic motion if we restart game
function physicsSetup() {
    x1 = 0;
    y1 = 0;
    vy = 0;
    ay = 10;
    xBird = bgWidth / 2;
    yBird = bgHeight / 2;
    birdAnguAccele = 0;
    birdChoser++;
    birdChoser = birdChoser % 3;
    bgChoser++;
    bgChoser = bgChoser % 2;
    bgSpeed = bgSpeedBase;
    pipeCreateSpeed = pipeCreateBase;
}

function paintGameStart() {
    push();
    x1 -= bgSpeed;
    if (x1 < -bgWidth) {
        x1 = 0;
    }
    translate(x1, y1);
    image(bgImgArr[bgChoser], 0, 0, bgWidth, bgHeight);
    image(bgImgArr[bgChoser], bgWidth, 0, bgWidth, bgHeight);
    image(baseImg, 0, bgHeight - baseHeight, baseWidth, baseHeight);
    image(baseImg, bgWidth, bgHeight - baseHeight, baseWidth, baseHeight);
    pop();
    image(beforeGameImg, bgWidth / 2 - beforeGameWidth / 2, bgHeight / 2 - beforeGameHeight / 2, beforeGameWidth, beforeGameHeight);
    flyTimer++;
    if (flyTimer / flyFrequency < 1) {
        image(birdDImgArr[birdChoser], bgWidth / 2 - birdWidth / 2, 430, birdWidth, birdHeight);
    } else if (flyTimer / flyFrequency < 2) {
        image(birdMImgArr[birdChoser], bgWidth / 2 - birdWidth / 2, 430, birdWidth, birdHeight);
    } else if (flyTimer / flyFrequency < 3) {
        image(birdUImgArr[birdChoser], bgWidth / 2 - birdWidth / 2, 430, birdWidth, birdHeight);
    } else {
        image(birdUImgArr[birdChoser], bgWidth / 2 - birdWidth / 2, 430, birdWidth, birdHeight);
        flyTimer = 0;
    }
}

function paintBackground() {
    bgSpeed += bgAccele;
    if (isDie === false) {
        x1 -= bgSpeed;
        if (x1 < -bgWidth) {
            x1 = 0;
        }
    }
    push();
    translate(x1, y1);
    image(bgImgArr[bgChoser], 0, 0, bgWidth, bgHeight);
    image(bgImgArr[bgChoser], bgWidth, 0, bgWidth, bgHeight);
}

function paintBird() {
    pop();
    push();
    if (yBird <= bgHeight - baseHeight - 10) {
        vy += ay * 0.025;
        yBird += vy;
    }
    translate(xBird, yBird);
    if (yBird <= bgHeight - baseHeight - 10) {
        birdAnguAccele += 0.02;
    }
    rotate(birdAnguAccele);
    flyTimer++;
    if (flyTimer / flyFrequency < 1) {
        image(birdDImgArr[birdChoser], -birdWidth / 2, -birdHeight / 2, birdWidth, birdHeight);
    } else if (flyTimer / flyFrequency < 2) {
        image(birdMImgArr[birdChoser], -birdWidth / 2, -birdHeight / 2, birdWidth, birdHeight);
    } else if (flyTimer / flyFrequency < 3) {
        image(birdUImgArr[birdChoser], -birdWidth / 2, -birdHeight / 2, birdWidth, birdHeight);
    } else {
        image(birdUImgArr[birdChoser], -birdWidth / 2, -birdHeight / 2, birdWidth, birdHeight);
        flyTimer = 0;
    }
}

function paintPipe() {
    pipeCreateSpeed -= pipeCreateAccele;
    pop();
    push();
    pipeTimer++;
    if (pipeTimer >= pipeCreateSpeed && isDie === false) {
        pipeTimer = 0;
        let newPipe = new PipeObj();
        newPipe.setPipe();
        pipeArr.push(newPipe);
        if (pipeArr[0].downX <= -pipeWidth) {
            pipeArr.splice(0, 1);
        }
    }
    for (var i = 0; i < pipeArr.length; i++) {
        if (isDie === false) {
            pipeArr[i].decreDownX();
            pipeArr[i].decreUpX();
        }
        image(pipeUpImgArr[pipeArr[i].pipeChoser], pipeArr[i].upX, pipeArr[i].upY, pipeWidth, pipeHeight);
        image(pipeDownImgArr[pipeArr[i].pipeChoser], pipeArr[i].downX, pipeArr[i].downY, pipeWidth, pipeHeight);
    }
}

function paintBase() {
    translate(x1, y1);
    image(baseImg, 0, bgHeight - baseHeight, baseWidth, baseHeight);
    image(baseImg, bgWidth, bgHeight - baseHeight, baseWidth, baseHeight);
    pop();
}

function checkIsGameOver() {
    for (var i = 0; i < pipeArr.length; i++) {
        if (isDie === false &&
            (!(xBird + birdWidth / 2 < pipeArr[i].upX || xBird - birdWidth / 2 > pipeArr[i].upX + pipeWidth ||
                    yBird + birdHeight / 2 < pipeArr[i].upY || yBird - birdHeight / 2 > pipeArr[i].upY + pipeHeight) ||
                !(xBird + birdWidth / 2 < pipeArr[i].downX || xBird - birdWidth / 2 > pipeArr[i].downX + pipeWidth ||
                    yBird + birdHeight / 2 < pipeArr[i].downY || yBird - birdHeight / 2 > pipeArr[i].downY + pipeHeight))) {
            gameOver();
        }
    }
    if (((yBird <= 0) || (yBird >= bgHeight - baseHeight - 10)) && isDie === false) {
        gameOver();
    }
}

function paintScore() {
    scoreTimer++;
    sec = Math.floor(scoreTimer / 60);
    secTenth = Math.floor(sec / 10);
    secBase = sec % 10;
    if (secTenth === 0) {
        if (sec < 1) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 2) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 3) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 4) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 5) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 6) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 7) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 8) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 9) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (sec < 10) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 60, scoreWidth, scoreHeight);
        }
    } else {
        if (secTenth < 1) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 2) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 3) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 4) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 5) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 6) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 7) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 8) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 9) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        } else if (secTenth < 10) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 60, scoreWidth, scoreHeight);
        }

        if (secBase < 1) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 2) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 3) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 4) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 5) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 6) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 7) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 8) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 9) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        } else if (secBase < 10) {
            image(scoreImg[secBase], bgWidth / 2, 60, scoreWidth, scoreHeight);
        }
    }
}

function paintGameOver() {
    gameOverTimer++;
    if (gameOverTimer > gameRestartSpeed) {
        pipeArr = []
        isDie = false;
        isGameStart = false;
        gameOverTimer = 0;
        physicsSetup();
        scoreTimer = 0;
    }
    image(gameOverImg, bgWidth / 2 - gameOverWidth / 2, 240, gameOverWidth, gameOverHeight);
    if (secTenth === 0) {
        if (sec < 1) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 2) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 3) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 4) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 5) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 6) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 7) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 8) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 9) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (sec < 10) {
            image(scoreImg[sec], bgWidth / 2 - scoreWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        }
    } else {
        if (secTenth < 1) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 2) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 3) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 4) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 5) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 6) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 7) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 8) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 9) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secTenth < 10) {
            image(scoreImg[secTenth], bgWidth / 2 - scoreWidth, 270 + gameOverHeight, scoreWidth, scoreHeight);
        }

        if (secBase < 1) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 2) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 3) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 4) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 5) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 6) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 7) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 8) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 9) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        } else if (secBase < 10) {
            image(scoreImg[secBase], bgWidth / 2, 270 + gameOverHeight, scoreWidth, scoreHeight);
        }
    }
}

function gameOver() {
    soundHit.play();
    soundDie.play();
    isDie = true;
}
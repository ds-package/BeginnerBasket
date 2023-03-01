let canvas;
let ctx;
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 700;

document.body.appendChild(canvas);

// 게임이미지 셋팅
let backgroundImage, daheeImage, damanImage, bulletImage, endImage;

// 게임오버
let gameOver = false; //true면 게임 끝남

//점수
let score = 0;

// 다희 좌표
let daheeX = canvas.width / 2 - 30;
// 원래는 - 60 해야하는데 땅에서 살짝 떨어뜨림
let daheeY = canvas.height - 70;
// 다희하트총알 셋팅
let bulletList = []; //총알 저장하는 리스트
function Bullet() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.x = daheeX + 15;
    this.y = daheeY;
    this.alive = true; //살아있는 총알
    bulletList.push(this);
  };
  this.update = function () {
    this.y -= 7;
  };

  this.checkHit = function () {
    // 하트.y <= 대만.y and
    // 하트.x >= 대만.x and 하트.x <= 대만.x +대만의 넓이
    for (let i = 0; i < damanList.length; i++) {
      if (
        this.y <= damanList[i].y &&
        this.x >= damanList[i].x &&
        this.x <= damanList[i].x + 60
      ) {
        //총알로 적군의 우주선이 없어지고 점수획득됌
        score++;
        this.alive = false; //총알죽음
        damanList.splice(i, 1);
      }
    }
  };
}

function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "/assets/game-background.png";

  daheeImage = new Image();
  daheeImage.src = "/assets/game-dahee.png";

  bulletImage = new Image();
  bulletImage.src = "/assets/game-bullet.png";

  damanImage = new Image();
  damanImage.src = "/assets/game-daman.png";

  endImage = new Image();
  endImage.src = "/assets/game-gameover.png";
}

// 키보드 이벤트 셋업
let keysDown = {};
function setupKeyboardListerner() {
  document.addEventListener("keydown", function (event) {
    keysDown[event.keyCode] = true;
  });
  document.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
    if (event.keyCode == 32) {
      createBullet(); //하트총알생성
    }
  });
}

// 하트총알생성
function createBullet() {
  let b = new Bullet();
  b.init();
}

// 대만이 생성해주기
function createDaman() {
  // n초마다 호출하고 싶을때 unterval을 쓴다
  const interval = setInterval(function () {
    let e = new Damans();
    e.init();
  }, 1000);
}

// 다히좌표업데이트해주기
function update() {
  if (39 in keysDown) {
    daheeX += 5; //다희속도
  }
  if (37 in keysDown) {
    daheeX -= 5;
  }

  //   다희 경기장 안에서만 있게하기
  if (daheeX <= 0) {
    daheeX = 0;
  }
  if (daheeX >= canvas.width - 60) {
    daheeX = canvas.width - 60;
  }

  //   총알 좌표 줄이기
  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      bulletList[i].update();
      bulletList[i].checkHit();
    }
  }

  //   대만이 내려오게 하기
  for (let i = 0; i < damanList.length; i++) {
    damanList[i].update();
  }
}

// 대만이 만들기

function generateRandum(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; //랜덤숫자생성하는함수

  return randomNum;
}

let damanList = [];
function Damans() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.y = 0;
    this.x = generateRandum(0, canvas.width - 60);
    damanList.push(this);
  };
  this.update = function () {
    this.y += 5; //대만이 속도

    if (this.y >= canvas.height - 60) {
      gameOver = true;
    }
  };
}

// 게임이미지 보여지기

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(daheeImage, daheeX, daheeY);
  ctx.fillText(`Score : ${score}`, 5, 20);
  ctx.fillStyle = "white";
  ctx.font = "16px Montserrat, sans-serif";

  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
    }
  }

  for (let i = 0; i < damanList.length; i++) {
    ctx.drawImage(damanImage, damanList[i].x, damanList[i].y);
  }
}

// 미친듯이 호출해보자
function main() {
  if (!gameOver) {
    update(); //좌표업뎃
    render(); //그려주기
    requestAnimationFrame(main);
  } else {
    ctx.drawImage(endImage, 0, 150, 500, 300);
  }
}

// 함수만들면 불러줘야해요~!
loadImage();
setupKeyboardListerner();
createDaman();
main();

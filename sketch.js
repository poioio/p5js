let characterX = 50; // 캐릭터의 x 위치
let isWalking = false; // 걷기 상태
let walkCycle = 0; // 걷기 애니메이션 사이클
let scrollX = 0;  // 배경 스크롤 위치
const TILE_SIZE = 40;  // 타일 크기
let showNotification = false; // 알림 표시 여부
let notificationAlpha = 0; // 알림 투명도

let currentScene = 0; // 시작 화면을 0으로 설정

// 장면1 변수
let characterX1 = 50;
let isWalking1 = false;
let walkCycle1 = 0;
let scrollX1 = 0;
const NORMAL_SPEED = 2;
let currentSpeed1 = NORMAL_SPEED;
let notificationStartX;
let notificationEndX;
let stopTimer = 0;
let isStopped = false;
let isCheckingPhone = false;
let phoneCheckTimer = 0;
let hasCheckedPhone = false;

// 장면2 변수
let characterX2 = -50;
let isWalking2 = true;
let walkCycle2 = 0;
let scrollX2 = 0;
let currentSpeed2 = NORMAL_SPEED;
let icons2 = [];
const NUM_ICONS2 = 20;
let showNextButton = false; // NEXT 버튼 표시 여부
const NEXT_BUTTON_WIDTH = 100;
const NEXT_BUTTON_HEIGHT = 50;
let NEXT_BUTTON_X; // 버튼의 x 위치 (오른쪽)
let NEXT_BUTTON_Y; // 버튼의 y 위치 (아래)

// 장면3 변수
let characterX3; // 캐릭터의 x 위치 (초기화는 setup()에서 수행)
let walkCycle3 = 0; // 걷기 애니메이션 사이클
let scrollX3 = 0; // 배경 스크롤 위치
const SCROLL_SPEED = 2; // 배경 스크롤 속도
let busX = -300; // 버스 초기 위치
let busSpeed = 2; // 버스 속도
let isBusStopped = false; // 버스 정지 상태
let icons3 = []; // 이모지 아이콘 배열
const NUM_ICONS3 = 10; // 이모지 개수

// 장면4 변수 (버스 내부)
let characterX4 = 0;
let walkCycle4 = 0;
let scrollX4 = 0;
let isSitting4 = false;

// 장면5 변수 (카페)
let characterX5 = 50;
let isWalking5 = true;
let walkCycle5 = 0;
let isInMiddle5 = false;
let icons5 = [];
const NUM_ICONS5 = 10;
let showSideView5 = false;
let showBackView5 = false;
let stopTimer5 = 0;

// 장면6 변수 (카페 내부)
let characterX6 = 50;
let isWalking6 = true;
let walkCycle6 = 0;
let isInMiddle6 = false;
let isSitting6 = false;
let showArrow = false; // 친구 캐릭터 화살표
let showSpeechBubble = false;
let sittingTimer = 0;
let showCharacterArrow = false; // 캐릭터 화살표
let speechBubbleTimer = 0; // 말풍선 타이머

// 장면7 변수 (침대가 있는 방)
let characterX7 = 50;
let isWalking7 = true;
let walkCycle7 = 0;
let isLying7 = false;
let icons7 = [];
const NUM_ICONS7 = 20;

// 장면8 변수 (새로운 침대 장면)
let characterX8; // 캐릭터의 x 위치 (초기화는 setup()에서 수행)
let walkCycle8 = 0; // 걷기 애니메이션 사이클
let scrollX8 = 0; // 배경 스크롤 위치
const SCROLL_SPEED8 = 2; // 배경 스크롤 속도
let busX8 = -300; // 버스 초기 위치
let busSpeed8 = 2; // 버스 속도
let isBusStopped8 = false; // 버스 정지 상태
let icons8 = []; // 이모지 아이콘 배열
const NUM_ICONS8 = 10; // 이모지 개수

// 장면9 변수 (엔딩 크레딧)
let creditsTimer = 0;
const CREDITS_DURATION = 5000; // 5초 동안 표시

function setup() {
  createCanvas(windowWidth, windowHeight);
  characterX3 = width / 2;
  notificationStartX = width / 2 - 25;
  notificationEndX = width * 2 / 3;
  
  NEXT_BUTTON_X = width - 150;
  NEXT_BUTTON_Y = height - 150;
  
  initializeEmojiBackground();
  initializeScene3();
  initializeScene5();
  initializeScene7();
}

function draw() {
  if (currentScene === 0) {
    drawScene0();
  } else if (currentScene === 1) {
    drawScene1();
  } else if (currentScene === 2) {
    drawScene2();
  } else if (currentScene === 3) {
    drawScene3();
  } else if (currentScene === 4) {
    drawScene4();
  } else if (currentScene === 5) {
    drawScene5();
  } else if (currentScene === 6) {
    drawScene6();
  } else if (currentScene === 7) {
    drawScene7();
  } else if (currentScene === 8) {
    drawScene8();
  } else if (currentScene === 9) {
    drawScene9();
  }
}

function drawScene0() {
  background(240);
  
  // 메인 문구
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(40);
  text('SNS 중독은 나를 잃게 만든다', width / 2, height / 2 - 20);
  
  // 제작자 명단
  textSize(20);
  text('제작자: 이예린, 이은비, 장채원', width / 2, height / 2 + 30);
  
  // 시작 안내 문구
  textSize(16);
  fill(100);
  text('클릭하여 시작하세요', width / 2, height / 2 + 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // 화면 크기가 변경될 때 현재 장면 다시 그리기
  if (currentScene === 0) {
    drawScene0();
  }
}

function drawScene1() {
  background(240);
  drawWalkingPath(scrollX1, color(200));

  if (showNotification) drawNotification(characterX1);

  if (characterX1 < width + 100) {
    drawCharacter(characterX1, walkCycle1, isCheckingPhone);
  }

  if ((isWalking1 && !isStopped) || hasCheckedPhone) {
    walkCycle1 += 0.1;
    characterX1 += currentSpeed1;
    scrollX1 += currentSpeed1;
    if (scrollX1 > TILE_SIZE) scrollX1 = 0;
  }

  if (characterX1 >= notificationStartX && characterX1 < notificationEndX && !hasCheckedPhone) {
    if (!showNotification) {
      showNotification = true;
      isStopped = true;
      stopTimer = millis();
    }
  } else {
    showNotification = false;
    currentSpeed1 = NORMAL_SPEED;
  }

  if (isStopped && !isCheckingPhone && millis() - stopTimer > 1000) {
    isCheckingPhone = true;
    phoneCheckTimer = millis();
  }

  if (isCheckingPhone && millis() - phoneCheckTimer > 2000) {
    isStopped = false;
    isCheckingPhone = false;
    hasCheckedPhone = true;
    currentSpeed1 = NORMAL_SPEED;
  }

  if (characterX1 > width + 50) {
    currentScene = 2;
  }
}

function drawScene2() {
  background(255, 255, 100);
  drawWalkingPath(scrollX2, color(255, 255, 0));
  drawEmojis2();

  if (characterX2 > width + 100) {
    showNextButton = true;
  }

  if (showNextButton) {
    drawNextButton();
  }

  if (characterX2 < width + 100) {
    drawCharacter(characterX2, walkCycle2, false);
  }

  if (isWalking2) {
    walkCycle2 += 0.1;
    characterX2 += currentSpeed2;
    scrollX2 += currentSpeed2;
    if (scrollX2 > TILE_SIZE) scrollX2 = 0;
  }
}

function drawScene3() {
  background(255, 255, 60); // 노란 배경

  // 버스 위치 업데이트
  if (!isBusStopped) {
    busX += busSpeed;
    if (busX > width / 2 - 150) { // 버스가 화면 중앙에 도달하면
      isBusStopped = true;
    }
  }

  drawWalkingPath(scrollX3, color(200));
  drawBusEx();
  drawEmojis3();
  drawCharacter(characterX3, walkCycle3, true);
  
  // 버스가 멈췄을 때 안내 문구 표시
  if (isBusStopped) {
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(15);
    text("버스를 클릭해보세요!", width/2, height - 250);
  }
  
  // 걷기 애니메이션 및 배경 스크롤 업데이트
  if (!isBusStopped) {
    walkCycle3 += 0.1;
    scrollX3 += SCROLL_SPEED;
    if(scrollX3 > TILE_SIZE) {
      scrollX3 = 0;
    }
  }
}

function drawScene4() {
  background(240);
  
  drawBusInterior();
  drawCharacter4();
  
  // 걷기 애니메이션 및 배경 스크롤 업데이트
  if (!isSitting4) {
    walkCycle4 += 0.1;
    scrollX4 += SCROLL_SPEED;
    if(scrollX4 > TILE_SIZE) {
      scrollX4 = 0;
    }
    
    // 캐릭터 이동
    characterX4 += 2;
    if(characterX4 > 250) { // 두 번째 좌석 위치
      isSitting4 = true;
    }
  }
}

function drawScene5() {
  background(255, 230, 0);
  
  drawCafeEx();
  drawWalkingPath(scrollX4, color(200));
  drawEmojis5();
  drawCharacter5();
  
  if (isWalking5) {
    walkCycle5 += 0.1;
    if (!isInMiddle5) {
      characterX5 += NORMAL_SPEED;
    }
    
    if (characterX5 >= width/2 - 25 && !isInMiddle5) {
      isInMiddle5 = true;
      stopTimer5 = millis();
    }
  }
  
  if (isInMiddle5 && !showSideView5 && millis() - stopTimer5 > 1000) {
    showSideView5 = true;
    stopTimer5 = millis();
  }
  
  if (showSideView5 && !showBackView5 && millis() - stopTimer5 > 1000) {
    showBackView5 = true;
  }
}

function drawScene6() {
  background(220);
  drawCafeIn();
  
  // 캐릭터 그리기
  if (!isSitting6) {
    drawCharacter6();
  } else {
    drawSittingCharacter6();
    // 앉은 후 타이머 시작
    if (sittingTimer === 0) {
      sittingTimer = millis();
    }
    // 1초 후 화살표 표시 (2초에서 1초로 변경)
    if (!showArrow && !showSpeechBubble && millis() - sittingTimer > 1000) {
      showArrow = true;
    }
  }
  
  // 친구 캐릭터 그리기
  drawFriend();
  
  // 친구 캐릭터 화살표 그리기
  if (showArrow && !showSpeechBubble) {
    drawArrow();
  }
  
  // 말풍선 그리기
  if (showSpeechBubble) {
    drawSpeechBubble();
    // 말풍선이 나타난 후 타이머 시작
    if (speechBubbleTimer === 0) {
      speechBubbleTimer = millis();
    }
    // 2초 후 캐릭터 화살표 표시
    if (!showCharacterArrow && millis() - speechBubbleTimer > 2000) {
      showCharacterArrow = true;
    }
  }
  
  // 캐릭터 화살표 그리기
  if (showCharacterArrow) {
    drawCharacterArrow();
  }
  
  // 걷기 애니메이션 업데이트
  if (isWalking6 && !isSitting6) {
    walkCycle6 += 0.1;
    if (!isInMiddle6) {
      characterX6 += NORMAL_SPEED;
    }
    
    // 왼쪽 의자 위치에 도착 체크
    if (characterX6 >= width/2 - 150 && !isInMiddle6) {
      isInMiddle6 = true;
      isSitting6 = true;
      sittingTimer = 0;
      speechBubbleTimer = 0; // 말풍선 타이머도 초기화
    }
  }
}

function drawScene7() {
  background(30); // 어두운 방 배경
  drawRoom();     // 침대 그리기
  drawEmojis7();  // 이모지 아이콘 표시
  
  // 캐릭터 그리기
  if (!isLying7) {
    drawCharacter7();
  } else {
    drawLyingCharacter7();
  }
  
  // 걷기 애니메이션 업데이트
  if (isWalking7 && !isLying7) {
    walkCycle7 += 0.1;
    characterX7 += NORMAL_SPEED;
    
    // 침대 가운데에 도착 체크
    if (characterX7 >= width/3 + 112) {  // 침대 가운데 위치
      isLying7 = true;
    }
  }
}

function drawScene8() {
  background(30); 
  drawBed8();
  drawLyingCharacter8();
  
  // 캐릭터 클릭 처리
  if (isLying7) {
    const characterX = width/2;
    const characterY = height/2;
    const clickRadius = 50;
    
    if (dist(mouseX, mouseY, characterX, characterY - 45) < clickRadius) {
      currentScene = 9;
      creditsTimer = millis();
      return;
    }
  }
}

function drawScene9() {
  background(0); // 검은 배경
  
  // ending credits 글씨
  fill(255); // 흰색
  textAlign(CENTER, CENTER);
  textSize(48);
  text("ENDING CREDITS", width / 2, height / 3);
  
  // 이름 목록
  textSize(20);
  text("이예린", width / 2, height / 2);
  text("이은비", width / 2, height / 2 + 50);
  text("장채원", width / 2, height / 2 + 100);
  
  // 5초 후 자동으로 종료
  if (millis() - creditsTimer > CREDITS_DURATION) {
    noLoop();
  }
}

function drawBed8() {
  push();
  translate(width / 2, height / 2);

  // 침대 프레임
  fill(80);
  noStroke();
  rect(-140, -110, 280, 300, 10);

  // 이불
  fill(200, 0, 0);
  rect(-125, -105, 250, 290, 5);

  // 베개
  fill(255);
  rect(-50, -120, 100, 45, 10);

  pop();
}

function drawLyingCharacter8() {
  push();
  translate(width/2, height/2);
  translate(30, -50);
  scale(1.8);
  rectMode(CENTER);

  // 왼쪽 다리
  push();
  translate(-28, 75);
  rotate(PI/12);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, 15, 50, 3);
  
  // 왼쪽 발
  translate(0, 25);
  rect(0, 0, 20, 10, 3);
  pop();
  
  // 오른쪽 다리
  push();
  translate(-8, 75);
  rotate(-PI/12);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, 15, 50, 3);
  
  // 오른쪽 발
  translate(0, 25);
  rect(0, 0, 20, 10, 3);
  pop();
  
  // 왼쪽 팔
  push();
  translate(-51, 26);
  rotate(-PI/2+PI/3);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, 3, 40, 14, 10);
  ellipse(-25, 4, 10, 10);
  pop();
  
  // 오른쪽 팔
  push();
  translate(10, 30);
  rotate(PI/3);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, 3, 40, 14, 10);
  ellipse(23, 3, 10, 10);
  pop();
  
  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(-17, 35, 45, 60, 20);
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(-18, -5, 35, 35);
  
  // 눈
  fill(0);
  ellipse(-24, -7, 4, 4);
  ellipse(-11, -7, 4, 4);
  
  // 핸드폰
  push();
  translate(-48, 28);
  rotate(-PI/2+PI/2);
  translate(-26, 8);
  fill(200);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, 20, 10, 5);
  pop();

  rectMode(CORNER);
  pop();
}

function drawCafeIn() {
  // 바닥
  noStroke();
  fill(210, 180, 140);
  rect(0, height - 100, width, 80);

  // 벽
  fill(245, 222, 179);
  rect(0, 0, width, height - 100);

  // 창문
  fill(200, 230, 255);
  rect(width / 2 - 150, height - 400, 300, 180, 10);

  // 테이블
  fill(160, 82, 45);
  rect(width / 2 - 100, height - 170, 200, 20);
  rect(width / 2 - 10, height - 160, 30, 100);

  // 테이블 위 물건들
  // 왼쪽 컵
  fill(173, 216, 230);
  stroke(0);
  strokeWeight(1);
  rect(width / 2 - 60, height - 195, 15, 25, 3);
  rect(width / 2 - 68, height - 190, 8, 15, 2);

  // 가운데 그릇
  fill(255, 165, 0);
  noStroke();
  ellipse(width / 2, height - 175, 30, 15);
  stroke(0);
  strokeWeight(1);
  noFill();
  arc(width / 2, height - 175, 30, 15, 0, PI);

  // 오른쪽 컵
  fill(173, 216, 230);
  stroke(0);
  strokeWeight(1);
  rect(width / 2 + 40, height - 195, 15, 25, 3);
  rect(width / 2 + 55, height - 190, 8, 15, 2);

  // 의자 - 왼쪽
  fill(139, 69, 19);
  noStroke();
  rect(width / 2 - 150, height - 125, 45, 25);
  rect(width / 2 - 130, height - 105, 10, 35);

  // 의자 - 오른쪽
  rect(width / 2 + 105, height - 125, 45, 25);
  rect(width / 2 + 125, height - 105, 10, 35);
}

function drawCharacter6() {
  push();
  translate(characterX6, height - 80);
  scale(1.3);
  drawFrontView();
  pop();
}

function drawSittingCharacter6() {
  push();
  translate(width/2 - 130, height - 105);
  scale(1.3);
  rectMode(CENTER);

  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, -40, 20, 50, 10);
  
  // 오른쪽 팔 (책상 위에 손 올리기)
  drawArm(0, -55, -PI/1.8);
  
  // 오른쪽 다리 (앉은 자세 - 수평으로 뻗음)
  rect(5, -20, 30, 10, 5);
  // 오른쪽 발 (다리와 수직)
  rect(20, -20, 8, 15, 3);
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  // 눈
  fill(0);
  ellipse(5, -80, 5, 5);
  // 핸드폰
  push();
  translate(0, -55);
  rotate(-PI/1.8);
  translate(0, 30);
  rotate(PI/2);
  fill(200);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(5, -2, 10, 20, 5);
  pop();
  rectMode(CORNER);
  pop();
}

function drawFriend() {
  push();
  translate(width / 2 + 125, height - 105);
  scale(1.3);
  rectMode(CENTER);
  // 몸통
  fill(255, 192, 203);
  stroke(0);
  strokeWeight(2);
  rect(0, -40, 20, 50, 10);
  // 왼쪽 팔 (책상 위에 손 올리기)
  drawArm(0, -55, PI/2, 255);
  // 왼쪽 다리 (앉은 자세 - 수평으로 뻗음)
  fill(255);
  rect(-5, -20, 30, 10, 5);
  // 왼쪽 발 (다리와 수직)
  rect(-20, -20, 8, 15, 3);
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  // 눈
  fill(0);
  ellipse(-5, -80, 5, 5);
  rectMode(CORNER);
  pop();
}

function drawArm(x, y, angle, color = 255) {
  push();
  translate(x, y);
  rotate(angle);
  fill(color);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  ellipse(0, 30, 8, 8);
  pop();
}

function drawWalkingPath(scrollX, tileColor) {
  fill(tileColor);
  noStroke();
  rect(0, height-80, width * 2, 80);
  stroke(180);
  strokeWeight(1);
  for (let i = -scrollX; i < width * 2; i += TILE_SIZE) {
    for (let j = 0; j < 80; j += TILE_SIZE) {
      rect(i, height-80 + j, TILE_SIZE, TILE_SIZE);
    }
  }
}

function drawCharacter(x, walkCycle, phoneUp) {
  push();
  let characterY = height - 80;
  translate(x, characterY);
  scale(1.3);

  drawLeftArm(walkCycle, phoneUp);
  drawLeftLeg(walkCycle, phoneUp);

  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);

  drawRightArm(walkCycle, phoneUp);
  drawRightLeg(walkCycle, phoneUp);

  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);

  fill(0);
  ellipse(5, -80, 5, 5);

  drawPhone(walkCycle, phoneUp);
  pop();
}

function drawPhone(walkCycle, phoneUp) {
  let armAngle = sin(walkCycle) * 0.5;
  push();
  translate(0, -55);
  if (phoneUp) {
    rotate(-PI/3);
    translate(0, 30);
    rotate(PI/2);
  } else {
    rotate(-armAngle);
    translate(0, 30);
    rotate(-PI/4);
  }
  fill(200);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, 10, 20, 5);
  pop();
}

function drawLeftArm(walkCycle, phoneUp) {
  let armAngle = phoneUp ? 0 : sin(walkCycle) * 0.5;
  push();
  translate(8, -55);
  translate(-8, 0);
  rotate(armAngle);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  ellipse(0, 30, 8, 8);
  pop();
}

function drawRightArm(walkCycle, phoneUp) {
  let armAngle = sin(walkCycle) * 0.5;
  push();
  translate(0, -55);
  if (phoneUp) {
    rotate(-PI/3);
  } else {
    rotate(-armAngle);
  }
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  ellipse(0, 30, 8, 8);
  pop();
}

function drawLeftLeg(walkCycle, phoneUp) {
  let legAngle = phoneUp ? 0 : sin(walkCycle) * 0.5;
  push();
  translate(8, -20);
  translate(-8, 0);
  rotate(legAngle);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  rect(0, 30, 15, 8, 3);
  pop();
}

function drawRightLeg(walkCycle, phoneUp) {
  let legAngle = phoneUp ? 0 : sin(walkCycle) * 0.5;
  push();
  translate(0, -20);
  rotate(-legAngle);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  rect(0, 30, 15, 8, 3);
  pop();
}

function drawNotification(characterX) {
  let phoneY = height - 80 - 55;
  push();
  translate(characterX - 110, phoneY - 30);
  noStroke();
  fill(220, 38, 38);
  ellipse(40, 10, 90, 55);
  fill(220, 38, 38);
  beginShape();
  vertex(55, 35);
  vertex(40, 50);
  vertex(25, 35);
  endShape(CLOSE);
  drawHeart(30, 11, 18);
  fill(255);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(24);
  text('1', 48, 14);
  pop();
}

function drawHeart(x, y, size) {
  push();
  translate(x, y);
  scale(size / 20);
  fill(255);
  noStroke();
  beginShape();
  vertex(0, -6);
  bezierVertex(6, -15, 20, -5, 0, 12);
  bezierVertex(-20, -5, -6, -15, 0, -6);
  endShape(CLOSE);
  pop();
}

function initializeEmojiBackground() {
  let emojiTypes = ["💓", "👍", "👋", "💬", "📨", "🔔"];
  let emojiPool = [];
  for (let i = 0; i < NUM_ICONS2; i++) {
    emojiPool.push(emojiTypes[i % emojiTypes.length]);
  }
  shuffle(emojiPool, true);
  icons2 = [];
  for (let i = 0; i < NUM_ICONS2; i++) {
    let startY = random(0, height - 80);
    icons2.push({
      x: random(width),
      y: startY,
      baseY: startY,
      emoji: emojiPool[i],
      size: random(30, 40),
      floatOffset: random(TWO_PI),
      floatSpeed: random(0.02, 0.04)
    });
  }
}

function initializeScene3() {
  let emojiTypes = ["💓", "👍", "👋", "💬", "📨", "🔔"];
  icons3 = [];
  for (let i = 0; i < NUM_ICONS3; i++) {
    let startY = random(0, height - 80);
    icons3.push({
      x: random(width),
      y: startY,
      baseY: startY,
      emoji: random(emojiTypes),
      size: random(30, 40),
      floatOffset: random(TWO_PI),
      floatSpeed: random(0.02, 0.04)
    });
  }
}

function drawEmojis2() {
  textAlign(CENTER, CENTER);
  for (let icon of icons2) {
    if (icon.x < -50 || icon.x > width + 50 || icon.y < 0 || icon.y > height - 80) {
      icon.x = random(width);
      let newY = random(0, height - 80);
      icon.y = newY;
      icon.baseY = newY;
    }
    let floatY = sin(frameCount * icon.floatSpeed + icon.floatOffset) * (icon.size / 4);
    icon.y = icon.baseY + floatY;
    textSize(icon.size);
    text(icon.emoji, icon.x, icon.y);
  }
}

function drawEmojis3() {
  textAlign(CENTER, CENTER);
  for (let icon of icons3) {
    if (icon.x < -50 || icon.x > width + 50 || icon.y < 0 || icon.y > height - 80) {
      icon.x = random(width);
      let newY = random(0, height - 80);
      icon.y = newY;
      icon.baseY = newY;
    }
    let floatY = sin(frameCount * icon.floatSpeed + icon.floatOffset) * (icon.size / 4);
    icon.y = icon.baseY + floatY;
    textSize(icon.size);
    text(icon.emoji, icon.x, icon.y);
  }
}

function drawNextButton() {
  // 버튼 배경
  fill(255, 255, 255, 200);
  stroke(0);
  strokeWeight(2);
  rect(NEXT_BUTTON_X, NEXT_BUTTON_Y, NEXT_BUTTON_WIDTH, NEXT_BUTTON_HEIGHT, 10);
  
  // 버튼 텍스트
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(24);
  textStyle(BOLD);
  text("NEXT", NEXT_BUTTON_X + NEXT_BUTTON_WIDTH/2, NEXT_BUTTON_Y + NEXT_BUTTON_HEIGHT/2);
  textStyle(NORMAL);
  
  // 버튼 호버 효과
  if (mouseX > NEXT_BUTTON_X && mouseX < NEXT_BUTTON_X + NEXT_BUTTON_WIDTH &&
      mouseY > NEXT_BUTTON_Y && mouseY < NEXT_BUTTON_Y + NEXT_BUTTON_HEIGHT) {
    fill(255, 255, 255, 100);
    noStroke();
    rect(NEXT_BUTTON_X, NEXT_BUTTON_Y, NEXT_BUTTON_WIDTH, NEXT_BUTTON_HEIGHT, 10);
  }
}

function drawBusEx() {
  const busY = height - 200;

  push();
  translate(busX, busY);

  // 버스 본체
  fill(0, 102, 204);
  rect(0, 0, 300, 100, 20);

  // 창문 4개
  fill(200, 230, 255);
  rect(30, 20, 50, 40, 5);
  rect(90, 20, 50, 40, 5);
  rect(150, 20, 50, 40, 5);
  rect(210, 20, 50, 40, 5);

  // 바퀴
  fill(70);
  ellipse(60, 110, 40, 40);
  ellipse(240, 110, 40, 40);

  // 번호판
  fill(255);
  rect(130, 75, 50, 20);
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("BUS", 155, 85);

  pop();
}

function drawBusInterior() {
  // 바닥
  fill(180);
  rect(0, height - 100, width, 100);

  // 창문 4개 (파란색 계열)
  fill(200, 230, 255);
  for (let i = 0; i < 4; i++) {
    rect(50 + i * 150, height - 300, 100, 80, 5);
  }

  // 의자 4개
  for (let i = 0; i < 4; i++) {
    let baseX = 100 + i * 150;

    // 의자 본체 (남색)
    fill(0, 0, 128);
    rect(baseX, height - 130, 60, 30, 5);

    // 의자 등받이 (회색)
    fill(120);
    rect(baseX, height - 170, 10, 40);
  }

  // 하차벨 2개 (창문 사이에 위치)
  let bellXs = [175, 475];
  for (let bellX of bellXs) {
    fill(255, 0, 0);
    ellipse(bellX, height - 250, 30, 30);
    fill(255);
    textSize(10);
    textAlign(CENTER, CENTER);
    text("STOP", bellX, height - 250);
  }
}

function drawCharacter4() {
  push();
  if (isSitting4) {
    translate(280, height - 115);
    scale(1.3);
    drawSittingPose();
  } else {
    translate(characterX4, height - 80);
    scale(1.3);
    drawWalkingPose();
  }
  pop();
}

function drawWalkingPose() {
  drawLeftArm(walkCycle4, false);
  drawLeftLeg(walkCycle4, false);
  
  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  drawRightArm(walkCycle4, false);
  drawRightLeg(walkCycle4, false);
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  // 눈
  fill(0);
  ellipse(5, -80, 5, 5);
  
  drawPhone(walkCycle4, false);
}

function drawSittingPose() {
  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  // 오른쪽 팔
  push();
  translate(0, -55);
  rotate(-PI/3);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  ellipse(0, 30, 8, 8);
  pop();
  
  // 오른쪽 다리 (앉은 자세)
  rect(5, -20, 30, 10, 5);
  
  // 오른쪽 발
  rect(20, -20, 8, 15, 3);
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  // 눈
  fill(0);
  ellipse(5, -80, 5, 5);
  
  drawPhone(walkCycle4, true);
}

function drawCafeEx() {
  const BUILDING_CENTER = width / 2;
  const BUILDING_WIDTH = width / 2 - 10;
  const BUILDING_HEIGHT = 200;
  const ROOF_HEIGHT = 20;
  const BUILDING_Y = height - 280;
  const SIGN_WIDTH = 140;
  const SIGN_HEIGHT = 30;
  const WINDOW_WIDTH = 70;
  const WINDOW_HEIGHT = 80;
  const DOOR_WIDTH = 60;
  const DOOR_HEIGHT = 100;

  noStroke();

  fill(245, 222, 179);
  rect(BUILDING_CENTER - BUILDING_WIDTH/2, BUILDING_Y, BUILDING_WIDTH, BUILDING_HEIGHT);

  fill(160, 82, 45);
  rect(BUILDING_CENTER - BUILDING_WIDTH/2 - 10, BUILDING_Y - ROOF_HEIGHT, BUILDING_WIDTH + 20, ROOF_HEIGHT);

  stroke(255, 248, 220);
  strokeWeight(3);
  fill(255);
  rect(BUILDING_CENTER - BUILDING_WIDTH/2 + (BUILDING_WIDTH/2 - WINDOW_WIDTH) / 2 - 10, BUILDING_Y + 20, WINDOW_WIDTH, WINDOW_HEIGHT, 5);
  rect(BUILDING_CENTER + (BUILDING_WIDTH/2 - WINDOW_WIDTH) / 2, BUILDING_Y + 20, WINDOW_WIDTH, WINDOW_HEIGHT, 5);
  noStroke();

  fill(160, 82, 45);
  rect(BUILDING_CENTER - DOOR_WIDTH/2, BUILDING_Y + 100, DOOR_WIDTH, DOOR_HEIGHT, 5);

  fill(160, 82, 45);
  rect(BUILDING_CENTER - SIGN_WIDTH/2, BUILDING_Y - 50, SIGN_WIDTH, SIGN_HEIGHT);

  fill(245, 222, 179);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("COZY CAFE", BUILDING_CENTER, BUILDING_Y - 35);
}

function drawEmojis5() {
  textAlign(CENTER, CENTER);
  for (let icon of icons5) {
    if (icon.x < -50 || icon.x > width + 50 || icon.y < 0 || icon.y > height - 80) {
      icon.x = random(width);
      let newY = random(0, height - 80);
      icon.y = newY;
      icon.baseY = newY;
    }
    let floatY = sin(frameCount * icon.floatSpeed + icon.floatOffset) * 10;
    icon.y = icon.baseY + floatY;
    textSize(icon.size);
    text(icon.emoji, icon.x, icon.y);
  }
}

function drawCharacter5() {
  push();
  translate(characterX5, height - 80);
  scale(1.3);
  
  if (showBackView5) {
    drawBackView();
  } else if (showSideView5) {
    drawSideView();
  } else {
    drawFrontView();
  }
  
  pop();
}

function initializeScene5() {
  icons5 = [];
  for (let i = 0; i < NUM_ICONS5; i++) {
    let startY = random(0, height - 80);
    icons5.push({
      x: random(width),
      y: startY,
      baseY: startY,
      emoji: random(["💓", "👍", "👋", "💬", "📨", "🔔"]),
      size: random(30, 40),
      floatOffset: random(TWO_PI),
      floatSpeed: random(0.02, 0.04)
    });
  }
}

function mousePressed() {
  if (currentScene === 0) {
    // 시작 화면에서 클릭하면 장면 1로 전환
    currentScene = 1;
    return;
  }
  
  // NEXT 버튼 클릭 처리
  if (showNextButton && currentScene === 2 && 
      mouseX > NEXT_BUTTON_X && mouseX < NEXT_BUTTON_X + NEXT_BUTTON_WIDTH &&
      mouseY > NEXT_BUTTON_Y && mouseY < NEXT_BUTTON_Y + NEXT_BUTTON_HEIGHT) {
    currentScene = 3;
  }
  
  // 버스 클릭 처리 (Scene 3)
  if (currentScene === 3 && isBusStopped) {
    let busY = height - 200;
    if (mouseX > busX && mouseX < busX + 300 &&
        mouseY > busY && mouseY < busY + 100) {
      currentScene = 4;
    }
  }
  
  // 하차벨 클릭 처리 (Scene 4)
  if (currentScene === 4) {
    let bellXs = [175, 475];
    for (let bellX of bellXs) {
      if (dist(mouseX, mouseY, bellX, height - 250) < 15) {
        currentScene = 5;
        return;
      }
    }
  }
  
  // 카페 건물 클릭 처리 (Scene 5)
  if (currentScene === 5) {
    const BUILDING_CENTER = width / 2;
    const BUILDING_WIDTH = width / 2 - 10;
    const BUILDING_HEIGHT = 200;
    const BUILDING_Y = height - 280;
    
    if (mouseX > BUILDING_CENTER - BUILDING_WIDTH/2 && 
        mouseX < BUILDING_CENTER + BUILDING_WIDTH/2 &&
        mouseY > BUILDING_Y && 
        mouseY < BUILDING_Y + BUILDING_HEIGHT) {
      currentScene = 6;
      return;
    }
  }
  
  // 친구 캐릭터 클릭 처리 (Scene 6)
  if (currentScene === 6 && showArrow) {
    const friendX = width / 2 + 125;
    const friendY = height - 105;
    const clickRadius = 30;
    
    if (dist(mouseX, mouseY, friendX, friendY - 80) < clickRadius) {
      showArrow = false;
      showSpeechBubble = true;
      speechBubbleTimer = 0; // 말풍선 타이머 초기화
      return;
    }
  }
  
  // 메인 캐릭터 클릭 처리 (Scene 6)
  if (currentScene === 6 && showCharacterArrow) {
    const characterX = width/2 - 130;
    const characterY = height - 105;
    const clickRadius = 30;
    
    if (dist(mouseX, mouseY, characterX, characterY - 80) < clickRadius) {
      currentScene = 7;
      return;
    }
  }
  
  // 캐릭터 클릭 처리 (Scene 7)
  if (currentScene === 7) {
    const characterX = width/3 + 180;
    const characterY = height - 100;
    const clickRadius = 50;
    
    if (dist(mouseX, mouseY, characterX, characterY - 45) < clickRadius) {
      currentScene = 8;
      return;
    }
  }
  
  // 캐릭터 클릭 처리 (Scene 8)
  if (currentScene === 8) {
    const characterX = width/2;
    const characterY = height/2;
    const clickRadius = 50;
    
    if (dist(mouseX, mouseY, characterX, characterY - 45) < clickRadius) {
      currentScene = 9;
      creditsTimer = millis();
      return;
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW && currentScene === 1 && !isWalking1) {
    isWalking1 = true;
  }
}

function drawFrontView() {
  drawLeftArm(walkCycle5, false);
  drawLeftLeg(walkCycle5, false);
  
  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  drawRightArm(walkCycle5, false);
  drawRightLeg(walkCycle5, false);
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  // 눈
  fill(0);
  ellipse(5, -80, 5, 5);
  
  drawPhone(walkCycle5, false);
}

function drawSideView() {
  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  // 눈
  fill(0);
  ellipse(5, -80, 5, 5);
  
  // 오른쪽 팔 (걷는 자세처럼 핸드폰 보는 자세)
  push();
  translate(0, -55);
  rotate(-PI/3);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  
  // 손
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, 30, 8, 8);
  
  // 핸드폰 (손 위에)
  push();
  translate(0, 30);
  rotate(PI/2);
  translate(0, -10);
  fill(200);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, 10, 20, 5);
  pop();
  pop();
  
  // 오른쪽 다리 (걷는 자세에서 수직으로)
  push();
  translate(0, -20);
  rotate(0);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  rect(0, 30, 15, 8, 3);
  pop();
}

function drawBackView() {
  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 25, 50, 10);
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  // 왼쪽 팔 (걷는 자세에서 수직으로, 약간 위로)
  push();
  translate(-12.5, -60);
  rotate(0);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  ellipse(0, 30, 8, 8);
  pop();
  
  // 오른쪽 팔 (걷는 자세에서 수직으로, 약간 위로)
  push();
  translate(12.5, -60);
  rotate(0);
  
  // 핸드폰 (팔과 손 뒤에)
  push();
  translate(10, 15);
  rotate(PI/6);
  translate(0, 10);
  fill(200);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, 10, 20, 5);
  pop();
  
  // 팔
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  
  // 손
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, 30, 8, 8);
  pop();
  
  // 왼쪽 다리 (걷는 자세에서 수직으로)
  push();
  translate(-8, -20);
  rotate(0);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  rect(0, 30, 15, 8, 3);
  pop();
  
  // 오른쪽 다리 (걷는 자세에서 수직으로)
  push();
  translate(8, -20);
  rotate(0);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 15, 10, 30, 5);
  rect(0, 30, 15, 8, 3);
  pop();
}

function drawArrow() {
  const friendX = width / 2 + 125;
  const friendY = height - 105;
  const arrowLength = 80;
  const arrowWidth = 20;
  const arrowAngle = -PI/4; // 45도 각도로 위에서 아래로
  
  push();
  translate(friendX + 30, friendY - 120);
  rotate(arrowAngle);
  
  // 화살표 몸통
  stroke(0);
  strokeWeight(3);
  line(arrowLength, 0, 0, 0); // 선의 방향을 반대로 변경
  
  // 화살표 머리 (삼각형의 방향을 반대로 변경)
  fill(0);
  noStroke();
  triangle(0, 0, 
           arrowWidth, -arrowWidth/2,
           arrowWidth, arrowWidth/2);
  pop();
}

function drawSpeechBubble() {
  const friendX = width / 2 + 125;
  const friendY = height - 105;
  
  push();
  translate(friendX + 30, friendY - 80); // 말풍선 위치도 화살표와 일치하도록 조정
  
  // 말풍선 본체
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(0, -40, 120, 60, 10);
  
  // 말풍선 꼬리
  fill(255);
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(-20, -20);
  vertex(0, -40);
  endShape(CLOSE);
  
  // 말풍선 텍스트
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(14);
  text("안녕!", 10, -10);
  text("오랜만이야!", 10, 10);
  
  pop();
}

function drawCharacterArrow() {
  const characterX = width/2 - 130;
  const characterY = height - 105;
  const arrowLength = 80;
  const arrowWidth = 20;
  const arrowAngle = PI/4; // 친구 캐릭터 화살표와 반대 각도로 설정
  
  push();
  translate(characterX - 100, characterY - 160); // 화살표 시작 위치를 더 왼쪽으로 조정 (50 -> 100)
  rotate(arrowAngle);
  
  // 화살표 몸통
  stroke(0);
  strokeWeight(3);
  line(0, 0, arrowLength, 0);
  
  // 화살표 머리
  fill(0);
  noStroke();
  triangle(arrowLength, 0, 
           arrowLength - arrowWidth, -arrowWidth/2,
           arrowLength - arrowWidth, arrowWidth/2);
  pop();
}

function initializeScene7() {
  icons7 = [];
  for (let i = 0; i < NUM_ICONS7; i++) {
    let startY = random(0, height - 100);
    icons7.push({
      x: random(width),
      y: startY,
      baseY: startY,
      emoji: random(["💓", "👍", "👋", "💬", "📨", "🔔"]),
      size: random(30, 40),
      floatOffset: random(TWO_PI),
      floatSpeed: random(0.02, 0.04)
    });
  }
}

function drawRoom() {
  // 바닥
  noStroke();
  fill(40);
  rect(0, height - 100, width, 100);

  // 벽
  fill(35);
  rect(0, 0, width, height - 100);

  // 창문
  fill(50);
  rect(width - 400, 100, 250, 200, 5);

  push();
  translate(width / 3, height - 100);  // y 위치를 바닥 높이로 조정

  // 침대 (크기 3/4로 조정, 높이만 낮춤)
  fill(80);
  rect(0, -45, 225, 12); // 상단
  rect(0, -33, 225, 12);  // 하단
  rect(0, -33, 12, 58);  // 앞면
  rect(213, -33, 12, 58); // 뒷면

  // 베개
  fill(255);
  rect(180, -55, 45, 17);

  // 이불
  fill(200, 0, 0);
  rect(10, -38, 205, 40);
  pop();
}

function drawEmojis7() {
  textAlign(CENTER, CENTER);
  for (let icon of icons7) {
    if (icon.x < -50 || icon.x > width + 50 || icon.y < 0 || icon.y > height - 100) {
      icon.x = random(width);
      let newY = random(0, height - 100);
      icon.y = newY;
      icon.baseY = newY;
    }
    let floatY = sin(frameCount * icon.floatSpeed + icon.floatOffset) * 10;
    icon.y = icon.baseY + floatY;
    textSize(icon.size);
    text(icon.emoji, icon.x, icon.y);
  }
}

function drawCharacter7() {
  push();
  translate(characterX7, height - 80);
  scale(1.3);
  drawFrontView();
  pop();
}

function drawLyingCharacter7() {
  push();
  translate(width/3 + 180, height - 100);
  scale(1.3);
  rectMode(CENTER);

  // 발 (베개 반대쪽, 수직으로, 더 길게)
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(-100, -38, 10, 20, 3);
  
  // 다리 (발과 몸통 사이, 붙여서)
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(-75, -38, 40, 15, 3);
  
  // 몸통 (다리와 머리 사이, 붙여서)
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(-35, -38, 50, 25, 10);
  
  // 머리 (베개 위에, 위로 조금)
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(3, -45, 30, 30);
  
  // 눈 (하늘을 향하게, 위로 조금)
  fill(0);
  ellipse(1, -50, 5, 5);
  
  // 핸드폰을 든 팔 (수직으로)
  push();
  translate(-40, -40);
  rotate(PI - PI/12);  // 수직으로
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(-15, 15, 10, 30, 5);
  
  // 손 (팔 끝에)
  ellipse(-15, 30, 8, 8);
  
  // 핸드폰 (손 끝에)
  push();
  translate(-15, 30);
  rotate(PI/2);
  fill(200);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(5, 7, 10, 20, 5);
  
  // 핸드폰에서 나오는 빛
  noStroke();
  fill(255, 255, 200, 100);  // 연한 노란색, 반투명
  triangle(5, 7, -20, 50, -40, 0);  // 뾰족한 부분이 핸드폰, 밑변이 눈 쪽으로
  pop();
  pop();

  rectMode(CORNER);
  pop();
} 


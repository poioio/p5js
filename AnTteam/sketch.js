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
let showNextButton = false;
const NEXT_BUTTON_WIDTH = 100;
const NEXT_BUTTON_HEIGHT = 50;
let NEXT_BUTTON_X;
let NEXT_BUTTON_Y;
let emojiTimer2 = 0;
let visibleEmojis2 = 0;
let eyeGlowTimer2 = 0;
let explosions = [];

// 장면3 변수
let characterX3;
let walkCycle3 = 0;
let scrollX3 = 0;
const SCROLL_SPEED = 2;
let busX = -300;
let busSpeed = 3;
let isBusStopped = false;
let icons3 = [];
const NUM_ICONS3 = 10;
let eyeGlowTimer3 = 0;

// 장면4 변수
let characterX4 = 0;
let walkCycle4 = 0;
let scrollX4 = 0;
let isSitting4 = false;

// 장면5 변수
let characterX5 = 50;
let isWalking5 = true;
let walkCycle5 = 0;
let scrollX5 = 0;
let isInMiddle5 = false;
let icons5 = [];
const NUM_ICONS5 = 10;
let showSideView5 = false;
let showBackView5 = false;
let stopTimer5 = 0;
let eyeGlowTimer5 = 0;

// 장면6 변수
let characterX6 = 50;
let isWalking6 = true;
let walkCycle6 = 0;
let isInMiddle6 = false;
let isSitting6 = false;
let showText = false;
let showSpeechBubble = false;
let sittingTimer = 0;
let speechBubbleTimer = 0;

// 장면7 변수
let characterX7 = 50;
let isWalking7 = true;
let walkCycle7 = 0;
let isLying7 = false;
let icons7 = [];
const NUM_ICONS7 = 20;
let eyeGlowTimer7 = 0;
let lyingTimer = 0;

// 장면8 변수
let characterX8;
let walkCycle8 = 0;
let scrollX8 = 0;
const SCROLL_SPEED8 = 2;
let busX8 = -300;
let busSpeed8 = 2;
let isBusStopped8 = false;
let icons8 = [];
const NUM_ICONS8 = 10;
let emojiFillProgress8 = 0;  // 이모지 채우기 진행도
const EMOJI_TYPES = ["💓", "👍", "👋", "💬", "📨", "🔔"];
const NUM_EMOJIS = 40;  // 몸통에 채울 전체 이모지 개수
const EMOJI_SIZE = 20;  // 이모지 크기
let isFillingEmojis8 = false;  // 이모지 채우기 진행 중인지 여부
let lastEmojiTime8 = 0;  // 마지막 이모지 추가 시간
const EMOJI_INTERVAL = 100;  // 이모지 추가 간격 (밀리초)
let emojiPositions8 = [];  // 이모지 위치 배열

// 장면9 변수
let creditsTimer = 0;
const CREDITS_DURATION = 5000;

// 02.js 관련 변수들
let introCharacterX = 400; // 캐릭터의 x 위치를 화면 중앙으로 설정
let introIsWalking = true; // 걷기 상태
let introWalkCycle = 0; // 걷기 애니메이션 사이클
let introScrollX = 0; // 배경 스크롤 위치
let introIsCheckingPhone = true; // 핸드폰 확인 상태
let introUserName = ''; // 사용자 이름
let introIsTyping = false;
let introIsHovering = false;
const introEmojis = ["💓", "👍", "💬", "📨", "🔔"];
let introEmojiPositions = [];
let introNameEnteredTime = 0; // 이름이 입력된 시간을 저장하는 변수 추가

function setup() {
  createCanvas(800, 600);
  characterX3 = width / 2;
  notificationStartX = width / 2 - 25;
  notificationEndX = width * 2 / 3;
  
  NEXT_BUTTON_X = width - 150;
  NEXT_BUTTON_Y = height - 150;
  
  initializeEmojiBackground();
  initializeIcons(icons3, NUM_ICONS3, height - 80);
  initializeIcons(icons5, NUM_ICONS5, height - 80);
  initializeIcons(icons7, NUM_ICONS7, height - 100);
  
  // 02.js 초기화
  for (let i = 0; i < introEmojis.length; i++) {
    let angle = (i * PI / (introEmojis.length - 1)) - PI;
    let radius = 60;
    introEmojiPositions.push({
      x: cos(angle) * radius,
      y: sin(angle) * radius - 20,
      angle: angle,
      floatOffset: random(TWO_PI),
      floatSpeed: random(0.02, 0.05)
    });
  }
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
  
// Scene 8의 이모지 자동 채우기
  if (currentScene === 8 && isFillingEmojis8) {
    if (millis() - lastEmojiTime8 > EMOJI_INTERVAL) {
      if (emojiFillProgress8 < NUM_EMOJIS) {
        emojiFillProgress8++;
        lastEmojiTime8 = millis(); // Update timer for next emoji
      } else {
        isFillingEmojis8 = false; // Stop filling when all emojis are added
      }
    }
  }
}

function drawScene0() {
  background(135, 206, 235); // 하늘색 배경
  
  drawIntroWalkingPath();
  drawIntroCharacter();
  drawIntroEmojis();
  drawIntroInputBubble();
  
  // 사용자 이름이 입력되면 제목 표시
  if (introUserName !== '') {
    textSize(45);
    textAlign(CENTER);
    fill(0);
    stroke(0);
    strokeWeight(2);
    text('🎵 ' + introUserName + '의 하루 🎵', width/2, height - 470);
    
    // 이름이 입력된 후 1초가 지났으면 안내 텍스트 표시
    if (millis() - introNameEnteredTime > 1000) {
      textSize(16);
      fill(50);
      noStroke();
      text('- 스페이스 바를 누르면 시작됩니다 -', width/2, height - 415);
    }
  }
  
  // 걷기 애니메이션 업데이트
  if (introIsWalking) {
    introWalkCycle += 0.1;
    introScrollX += NORMAL_SPEED;
    if(introScrollX > TILE_SIZE) {
      introScrollX = 0;
    }
  }
}

function drawIntroWalkingPath() {
  // 인도
  fill(180);  // 회색으로 통일
  noStroke();
  rect(0, height-80, width, 80);
  
  // 인도 타일
  stroke(150);
  strokeWeight(1);
  for(let i = -introScrollX; i < width; i += TILE_SIZE) {
    for(let j = 0; j < 80; j += TILE_SIZE) {
      rect(i, height-80 + j, TILE_SIZE, TILE_SIZE);
    }
  }
}

function drawIntroCharacter() {
  push();
  translate(introCharacterX, height - 80);
  scale(1.3);
  
  drawIntroLeftArm();
  drawIntroLeftLeg();
  
  // 몸통
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  drawIntroRightArm();
  drawIntroRightLeg();
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  // 눈
  fill(0);
  ellipse(5, -80, 5, 5);
  
  drawIntroPhone();
  
  pop();
}

function drawIntroLeftArm() {
  let armAngle = sin(introWalkCycle) * 0.5;
  
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

function drawIntroRightArm() {
  let armAngle = sin(introWalkCycle) * 0.5;
  
  push();
  translate(0, -55);
  
  if (introIsCheckingPhone) {
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

function drawIntroLeftLeg() {
  let legAngle = sin(introWalkCycle) * 0.5;
  
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

function drawIntroRightLeg() {
  let legAngle = sin(introWalkCycle) * 0.5;
  
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

function drawIntroPhone() {
  let armAngle = sin(introWalkCycle) * 0.5;
  
  push();
  translate(0, -55);
  
  if (introIsCheckingPhone) {
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

function drawIntroEmojis() {
  push();
  translate(introCharacterX, height - 80 - 80);
  
  for (let i = 0; i < introEmojis.length; i++) {
    let pos = introEmojiPositions[i];
    let floatY = sin(frameCount * pos.floatSpeed + pos.floatOffset) * 5;
    textSize(26);
    textAlign(CENTER, CENTER);
    text(introEmojis[i], pos.x, pos.y + floatY);
  }
  pop();
}

function drawIntroInputBubble() {
  push();
  translate(introCharacterX, height - 80 - 250);
  
  // 말풍선 본체
  fill(255, 255, 200);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, 250, 100, 20);
  
  // 말풍선 꼬리
  fill(255, 255, 200);
  stroke(0);
  strokeWeight(2);
  triangle(0, 60, -20, 50, 20, 50);
  
  // 안내 문구
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(16);
  text('사용자의 이름을 입력해주세요!', 0, -19);
  
  // 입력 칸
  fill(255);
  let inputBoxX = introCharacterX;
  let inputBoxY = height - 80 - 250 + 20;
  let isHovering = dist(mouseX, mouseY, inputBoxX, inputBoxY) < 100;
  
  if (isHovering) {
    stroke(220, 38, 38);
  } else {
    stroke(0);
  }
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 20, 200, 40, 10);
  
  // 입력 칸 안의 텍스트
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  if (introUserName === '') {
    text('클릭 👆', 0, 20);
  } else {
    text(introUserName, 0, 20);
  }
  
  // 클릭 문구
  textAlign(CENTER);
  textSize(14);
  if (isHovering) {
    fill(255, 0, 0);
  } else {
  fill(100);
  }
  text('클릭', width/2, height/2 + 30);
  
  pop();
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
    drawCharacter(characterX1, walkCycle1, isCheckingPhone || hasCheckedPhone);
    
    // 안내 문구 표시 (두 줄로)
    if (!isWalking1) {
      fill(0);
      noStroke();
      textAlign(CENTER);
      textSize(15);
      text('→ 방향키를 눌러', characterX1 + 50, height - 80 - 55 - 110);
      text('오른쪽으로 이동하세요!', characterX1 + 50, height - 80 - 55 - 90);
    }
  }

  if ((isWalking1 && !isStopped) || hasCheckedPhone) {
    walkCycle1 += 0.2;
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
  drawWalkingPath(scrollX2, color(180));  // 회색으로 통일
  drawEmojis2();

  if (characterX2 > width + 100) {
    showNextButton = true;
  }

  if (showNextButton) {
    drawNextButton();
  }

  if (characterX2 < width + 100) {
    drawCharacter2();
  }

  if (isWalking2) {
    walkCycle2 += 0.1;
    characterX2 += currentSpeed2;
    scrollX2 += currentSpeed2;
    if (scrollX2 > TILE_SIZE) scrollX2 = 0;
  }

  // 안내 텍스트 표시
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text("아이콘이 나타나면 클릭해보세요!", width/2, 250);
}

function drawCharacter2() {
  push();
  translate(characterX2, height - 80);
  scale(1.3);
  
  drawLeftArm(walkCycle2, true);
  drawLeftLeg(walkCycle2, true);
  
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  drawRightArm(walkCycle2, true);
  drawRightLeg(walkCycle2, true);
  
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  if (millis() - eyeGlowTimer2 < 500) {
    fill(255, 0, 0);
    noStroke();
    ellipse(5, -80, 8, 8);
    for (let i = 0; i < 3; i++) {
      noFill();
      stroke(255, 0, 0, 100 - i * 30);
      strokeWeight(2 - i * 0.5);
      ellipse(5, -80, 10 + i * 5, 10 + i * 5);
    }
  } else {
    fill(0);
    ellipse(5, -80, 5, 5);
  }
  
  drawPhone(walkCycle2, true);
  pop();
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

  drawWalkingPath(scrollX3, color(180));  // 회색으로 통일
  drawBusEx();
  drawEmojis3();
  drawCharacter3(); 
  
  // 버스가 멈췄을 때 안내 문구 표시
  if (isBusStopped) {
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(15);
    text("버스를 클릭해보세요!", width/2, height - 250);
  }
}

function drawScene4() {
  background(240);
  
  drawBusInterior();
  
  // 캐릭터 그리기
  if (!isSitting4) {
    drawCharacter(characterX4, walkCycle4, true);  // 앉기 전까지는 핸드폰을 보면서 걷기
  } else {
    drawCharacter4();
  }
  
  // 하차벨 안내 문구 표시 - 캐릭터가 앉은 후에만 표시
  if (isSitting4) {  // isSitting4가 true일 때만 안내문 표시
  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(15);
  text('하차벨을 클릭해 버스에서 내리세요!', width/2, height - 350);
  }
  
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
  drawWalkingPath(scrollX5, color(180));  // 회색으로 통일
  drawEmojis5();
  
  // 캐릭터 그리기
  if (!isInMiddle5) {
    drawCharacter5();  // drawCharacter 대신 drawCharacter5 사용
  } else {
    drawCharacter5();
  }
  
  // 카페 안내 문구 표시 (캐릭터가 멈췄을 때만)
  if (isInMiddle5&&showBackView5) {
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(15);
    text('카페 건물을 클릭해 카페 안으로 들어가세요!', width/2, height - 430);
  }
  
  if (isWalking5) {
    walkCycle5 += 0.1;
    if (!isInMiddle5) {
      characterX5 += NORMAL_SPEED;
      scrollX5 += NORMAL_SPEED;  // 배경 스크롤 추가
      if (scrollX5 > TILE_SIZE) {
        scrollX5 = 0;
      }
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
    drawCharacter(characterX6, walkCycle6, true);  // 의자에 앉기 전까지는 핸드폰을 보면서 걷기
  } else {
    drawSittingCharacter6();
  }
  
  // 친구 캐릭터 그리기
  drawFriend();
  
  // 앉은 후 타이머 시작
  if (isSitting6) {
    if (sittingTimer === 0) {
      sittingTimer = millis();
    }
    // 1초 후 안내 문구 표시
    if (!showText && !showSpeechBubble && millis() - sittingTimer > 1000) {
      showText = true;
    }
  }
  
  // 안내 문구 표시
  if (showText && !showSpeechBubble) {
    fill(0);
    noStroke();
    textAlign(CENTER);
    textSize(15);
    text('친구를 클릭해보세요!', width/2 + 155, height - 255);
  }
  
  // 말풍선 그리기
  if (showSpeechBubble) {
    // 친구 말풍선 그리기
    drawSpeechBubble();
    
    // 말풍선이 나타난 후 타이머 시작
    if (speechBubbleTimer === 0) {
      speechBubbleTimer = millis();
    }
    
    // 1초 후 캐릭터 말풍선 표시
    if (millis() - speechBubbleTimer > 1000) {
      const characterX = width/2 - 130;
      const characterY = height - 105;
      
      // 캐릭터 말풍선 그리기
      push();
      translate(characterX - 110, characterY - 120);  // x 위치를 +50으로 조정하여 오른쪽으로 이동
      
      // 말풍선 본체
      fill(255);
      noStroke();
      rect(0, -40, 80, 40, 10);
      
      // 말풍선 텍스트
      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(14);
      text("......", 40, -20);
      pop();
      
      // 캐릭터 말풍선이 나타난 후 안내 문구 표시
      if (millis() - speechBubbleTimer > 2000) {  // 친구 말풍선 1초 + 캐릭터 말풍선 1초 후
        push();
        translate(characterX - 130, characterY - 80);  // 안내 문구도 말풍선과 같은 x 위치로 조정
        
        // 안내 문구
        fill(0);
        noStroke();
        textAlign(CENTER);
        textSize(15);
        text('캐릭터를 클릭하면', 0, -10);
        text('다음 장면으로 넘어갑니다!', 0, 10);
        pop();
      }
    }
  }
  
  // 걷기 애니메이션 업데이트
  if (isWalking6) {
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
    
    // 캐릭터가 누운 후 타이머 시작
    if (lyingTimer === 0) {
      lyingTimer = millis();
    }
    
    // 1초 후 안내 문구 표시
    if (millis() - lyingTimer > 1000) {
      fill(255); // 흰색
      noStroke();
      textAlign(CENTER);
      textSize(15);
      text('캐릭터를 클릭해보세요!', width/3 + 180, height - 250);
    }
  }
  
  // 걷기 애니메이션 업데이트
  if (isWalking7 && !isLying7) {
    walkCycle7 += 0.1;
    characterX7 += NORMAL_SPEED;
    
    // 침대 가운데에 도착 체크
    if (characterX7 >= width/3 + 112) {  // 침대 가운데 위치
      isLying7 = true;
      lyingTimer = 0; // 타이머 초기화
    }
  }
}

function drawScene8() {
  background(30); 
  drawBed8();
  drawLyingCharacter8();
  
  // 안내 문구 표시 (이모지 모두 채워진 뒤에만)
  if (emojiFillProgress8 >= NUM_EMOJIS && !isFillingEmojis8) {
  fill(255); // 흰색
  noStroke();
  textAlign(RIGHT);
  textSize(15);
  text('enter 키를 누르면 엔딩크레딧으로 넘어갑니다', width - 20, height - 20);
}

  // 안내 문구
  textAlign(CENTER);
  textSize(16);
  fill(255);
  noStroke();
  text('캐릭터의 핸드폰을 클릭해보세요', width/2, height/2 - 200);
}

function drawLyingCharacter8() {
  push();
  translate(width / 2 + 50, height / 2 - 80);
  scale(2.5);
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
  
  // 이모지 채우기
  if (emojiFillProgress8 > 0) {
    textAlign(CENTER, CENTER);
    textSize(EMOJI_SIZE);
    noStroke();
    
    for (let i = 0; i < emojiFillProgress8; i++) {
      if (i < emojiPositions8.length) {
        text(EMOJI_TYPES[i % EMOJI_TYPES.length], emojiPositions8[i].x, emojiPositions8[i].y);
      }
    }
  }
  
  // 머리
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(-18, -5, 35, 35);
  
  // 눈
  // 눈
if (isFillingEmojis8) {  // 이모지가 채워지는 중일 때
  fill(255, 0, 0);
  noStroke();
  ellipse(-24, -7, 4, 4);
  ellipse(-11, -7, 4, 4);
  
  // 빛나는 효과 추가
  for (let i = 0; i < 3; i++) {
    noFill();
    stroke(255, 0, 0, 100 - i * 30);
    strokeWeight(2 - i * 0.5);
    ellipse(-24, -7, 10 + i * 5, 10 + i * 5);
    ellipse(-11, -7, 10 + i * 5, 10 + i * 5);
  }
} else {  // 이모지가 채워지기 전
  fill(0);
  ellipse(-24,-7,4,4);
  ellipse(-11,-7,4,4);
}
  
  // 핸드폰 (손에 있는 기존 핸드폰에만 효과 적용)
  push();
  translate(-48, 28);
  rotate(-PI/2+PI/2);
  translate(-26, 8);
  // 호버/클릭 효과 체크 (화면 좌표계로 변환)
  const phoneGlobalX = (width / 2 + 50) + (-48) * 2.5 + (-26) * 2.5;
  const phoneGlobalY = (height / 2 - 80) + 28 * 2.5 + 8 * 2.5;
  const isHovering = dist(mouseX, mouseY, phoneGlobalX, phoneGlobalY) < 30;
  if (isHovering) {
    // 빛나는 효과
    noStroke();
    fill(255, 255, 200, 100);
    ellipse(0, 0, 30, 30);
    // 핸드폰 크기 증가
    scale(1.2);
  }
  fill(200);
  stroke(0);
  strokeWeight(2);
  rect(0, 0, 20, 10, 5);
  pop();

  rectMode(CORNER);
  pop();
}

function drawScene9() {
  background(0); // 검은 배경
  
  // 'ending credit' 텍스트 (제일 위, 가운데 정렬, 흰색, 10pt)
  fill(255);
  textAlign(CENTER, TOP);
  textSize(25);
  text('ending credit', width / 2, 20);

  // 소감 텍스트 (왼쪽 정렬, 10pt, 흰색, 화면 안에 다 들어오도록 줄바꿈)
  textAlign(LEFT, TOP);
  textSize(15);
  let margin = 40;
  let textY = 50;
  let maxWidth = width - margin * 2;
  let gap = 10;

  let chaewonText = '장채원: 처음 기획했을 때 어떻게 만들어야 하나 고민이 많았는데 점점 구체적으로 만들어가는 과정에서 원하는 대로 나와줘서 신기했고 한편으론 다행이었다. 코드가 길어서 수정할 부분이 생기는 것도, 수정을 하는 과정도 쉽진 않았지만 이번 프로젝트를 통해 커서의 편리성을 알게 되어 의미있는 경험이었다.';
  let eunbiText = '이은비: P5.js로 작품을 만들면서 처음엔 AI와 소통하는 것조차 어려웠지만, 점점 내가 원하는 대로 구현이 되고, 하나씩 내 아이디어가 눈앞에 나타날 때마다 뿌듯함을 느꼈다. 과정을 거치며 AI의 편리함과 가능성을 점점 실감할 수 있었고, AI가 없던 시절엔 이런 작업을 도대체 어떻게 했을까 싶었다.';
  let yerinText = '이예린: 코딩을 정적인 통계, 분석에 활용해본 경험은 있지만 이렇게 동적인 애니메이션을 구현해본 것은 처음이라 흥미로웠다. 코딩에 대한 막연한 두려움이 있었는데, AI를 활용해보며 그 두려움을 극복할 수 있었다. AI로 누구나 코딩을 할 수 있는 시대이기 때문에, 앞으로는 콘텐츠에 담을 스토리와 그 스토리를 창의적으로 전달할 수 있는 방법이 더욱 중요해질 것 같다.';

  text(chaewonText, margin, textY, maxWidth, height - textY - margin);
  let chaewonH = textAscent() + textDescent() + 60; // 대략적 높이 추정
  let eunbiY = textY + chaewonH + gap;
  text(eunbiText, margin, eunbiY, maxWidth, height - eunbiY - margin);
  let eunbiH = textAscent() + textDescent() + 60;
  let yerinY = eunbiY + eunbiH + gap;
  text(yerinText, margin, yerinY, maxWidth, height - yerinY - margin);

  // 오른쪽 하단에 작은 원 그래프와 제목
  let pieR = 56; // 
  let pieX = width - 56 - pieR/2; // 오른쪽 여백 조정
  let pieY = height - 24 - pieR/2; // 아래쪽 여백 조정
  // 제목
  fill(255);
  textAlign(RIGHT, BOTTOM);
  textSize(15); // 
  text('ai 사용 비율', width - 20, height - 34 - pieR);
  // 파이차트
  let angleCursor = TWO_PI * 0.9;
  let angleGPT = TWO_PI * 0.1;
  noStroke();
  // Cursor (파랑)
  fill(80, 160, 255);
  arc(pieX, pieY, pieR, pieR, -HALF_PI, -HALF_PI + angleCursor, PIE);
  // 직접 (빨강)
  fill(220, 38, 38);
  arc(pieX, pieY, pieR, pieR, -HALF_PI + angleCursor, -HALF_PI + angleCursor + angleGPT, PIE);
  // 범례
  textSize(15); // 
  fill(80, 160, 255);
  textAlign(LEFT, CENTER);
  text('Cursor', pieX + pieR/2 + 7, pieY - 10);
  fill(220, 38, 38);
  text('직접', pieX + pieR/2 + 7, pieY + 10);

  // 5초 후 자동으로 종료
  if (millis() - creditsTimer > CREDITS_DURATION) {
    noLoop();
  }

  // --- 사용한 JS/p5.js 기능 및 문법 정리 ---
  textAlign(LEFT, TOP);
  textSize(15);
  fill(200);
  let infoY = yerinY + 100;
  let infoText =
    '사용한 주요 Javascript 및 p5.js 기능/문법:\n' +
    '- p5.js: createCanvas, background, text, image, arc, rect, ellipse, fill, stroke, noStroke,\n' +
    '  textAlign, textSize, push/pop, translate, scale, rotate, mousePressed, keyPressed\n' +
    '- Javascript: 변수(var/let/const), 함수 선언, 조건문(if/else), 반복문(for), 배열, 객체,\n' +
    '  random, dist, PI, sin, cos, millis 등 수학/시간 함수\n' +
    '- 사용자 입력 및 인터랙션 처리, 애니메이션 프레임 관리,\n' +
    '  여러 장면(scene) 분기 및 상태 관리';
  text(infoText, margin, infoY, maxWidth, height - infoY - 80);
}

function drawBed8() {
  push();
  translate(width / 2, height / 2);  // 화면 중앙으로 이동

  // 침대 프레임
  fill(80);
  noStroke();
  rect(-200, -150, 400, 400, 15);

  // 이불
  fill(200, 0, 0);
  rect(-180, -145, 360, 380, 8);

  // 베개
  fill(255);
  rect(-70, -170, 140, 60, 15);

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
  stroke(0);
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
  const characterX = width/2 - 130;
  const characterY = height - 105;
  
  // 마우스 호버 체크 (말풍선이 나타난 후 안내 문구가 표시될 때만)
  let isHovered = false;
  if (showSpeechBubble && millis() - speechBubbleTimer > 2000) {
    let d = dist(mouseX, mouseY, characterX, characterY - 45);
    isHovered = d < 30;  // 클릭 가능한 영역과 동일한 반지름
  }
  
  push();
  translate(characterX, characterY);
  // 호버 시 크기 10% 증가
  scale(isHovered ? 1.43 : 1.3);  // 1.3 * 1.1 = 1.43
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
  const friendX = width / 2 + 125;
  const friendY = height - 105;
  
  // 마우스 호버 체크 (showText가 true일 때만)
  let isHovered = false;
  if (showText && !showSpeechBubble) {
    let d = dist(mouseX, mouseY, friendX, friendY - 80);
    isHovered = d < 30;  // 클릭 가능한 영역과 동일한 반지름
  }
  
  push();
  translate(friendX, friendY);
  // 호버 시 크기 10% 증가
  scale(isHovered ? 1.43 : 1.3);  // 1.3 * 1.1 = 1.43
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
  // 배경
  fill(tileColor); 
  noStroke();
  rect(0, height-80, width * 2, 80);
  
  // 격자
  stroke(150);  // 격자 색상을 더 진하게
  strokeWeight(1);
  for (let i = -scrollX; i < width * 2; i += TILE_SIZE) {
    for (let j = 0; j < 80; j += TILE_SIZE) {
      noFill();  // 격자 내부는 채우지 않음
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
  let legAngle = sin(walkCycle) * 0.5;  // phoneUp 조거
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
  let legAngle = sin(walkCycle) * 0.5;  // phoneUp 조거
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
  let notificationY = height - 80 - 120; // 캐릭터 머리 위로 위치 조정
  push();
  translate(characterX - 110, notificationY - 30);
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
      floatSpeed: random(0.02, 0.04),
      visible: false,
      isHovered: false,
      isExploding: false,
      explosionProgress: 0
    });
  }
  visibleEmojis2 = 0;
  emojiTimer2 = millis();
  explosions = [];
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
      floatSpeed: random(0.02, 0.04),
      isHovered: false,
      isExploding: false,
      explosionProgress: 0
    });
  }
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
      floatSpeed: random(0.02, 0.04),
      isHovered: false,
      isExploding: false,
      explosionProgress: 0
    });
  }
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
      floatSpeed: random(0.02, 0.04),
      isHovered: false,
      isExploding: false,
      explosionProgress: 0
    });
  }
}

function initializeIcons(icons, numIcons, maxHeight) {
  let emojiTypes = ["💓", "👍", "👋", "💬", "📨", "🔔"];
  icons.length = 0;
  for (let i = 0; i < numIcons; i++) {
    let startY = random(0, maxHeight);
    icons.push({
      x: random(width),
      y: startY,
      baseY: startY,
      emoji: random(emojiTypes),
      size: random(30, 40),
      floatOffset: random(TWO_PI),
      floatSpeed: random(0.02, 0.04),
      isHovered: false,
      isExploding: false,
      explosionProgress: 0
    });
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
    
    // 마우스 호버 체크
    let d = dist(mouseX, mouseY, icon.x, icon.y);
    icon.isHovered = d < icon.size;
    
    // 터지는 효과 업데이트
    if (icon.isExploding) {
      icon.explosionProgress += 0.1;
      if (icon.explosionProgress >= 1) {
        icon.visible = false;
        continue;
      }
    }
    
    // 이모지 그리기
    push();
    if (icon.isHovered) {
      // 호버 효과 - 테두리에서 빛나는 효과
      for (let j = 0; j < 3; j++) {
        noFill();
        stroke(255, 255, 0, 100 - j * 30);
        strokeWeight(3 - j);
        ellipse(icon.x, icon.y, icon.size + 10 + j * 5);
      }
      // 호버 시 이모지 크기 증가
      textSize(icon.size * 1.2);
    } else {
      textSize(icon.size);
    }
    
    if (icon.isExploding) {
      // 터지는 효과
      let scale = 1 + sin(icon.explosionProgress * PI) * 0.5;
      let alpha = 255 * (1 - icon.explosionProgress);
      textSize(icon.size * scale);
      fill(255, alpha);
      text(icon.emoji, icon.x, icon.y);
      
      // 파편 효과
      for (let j = 0; j < 8; j++) {
        let angle = j * PI / 4;
        let distance = icon.explosionProgress * 50;
        let x = icon.x + cos(angle) * distance;
        let y = icon.y + sin(angle) * distance;
        textSize(icon.size * 0.3);
        fill(255, alpha);
        text(icon.emoji, x, y);
      }
    } else {
      fill(255);
      text(icon.emoji, icon.x, icon.y);
    }
    pop();
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

  // 버스가 멈췄을 때만 호버 효과 적용
  if (isBusStopped) {
    // 마우스 호버 체크 - 버스의 실제 영역을 고려
    let mouseXRelative = mouseX - busX;  // 버스 기준 마우스 X 좌표
    let mouseYRelative = mouseY - busY;  // 버스 기준 마우스 Y 좌표
    
    // 버스의 실제 영역 내에 있는지 확인 (본체 + 바퀴 영역)
    let isHovered = mouseXRelative > 0 && 
                   mouseXRelative < 300 && 
                   mouseYRelative > 0 && 
                   mouseYRelative < 110;  // 바퀴까지 포함한 높이
    
    if (isHovered) {
      // 호버 시 버스 크기 증가
      scale(1.1);
      translate(-15, -10);  // 크기 증가로 인한 위치 조정
    }
  }

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
    // 마우스 호버 체크
    let d = dist(mouseX, mouseY, bellX, height - 250);
    let isHovered = d < 15;  // 기본 크기의 반지름
    
    // 호버 시 크기 증가
    let bellSize = isHovered ? 39 : 30;  // 30% 증가 (30 * 1.3 = 39)
    
    fill(255, 0, 0);
    ellipse(bellX, height - 250, bellSize, bellSize);
    fill(255);
    textSize(isHovered ? 13 : 10);  // 텍스트 크기도 비례해서 증가
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

  // 마우스 호버 체크
  let mouseXRelative = mouseX - (BUILDING_CENTER - BUILDING_WIDTH/2);
  let mouseYRelative = mouseY - (BUILDING_Y - ROOF_HEIGHT);
  
  // 카페 건물 영역 내에 있는지 확인
  let isHovered = mouseXRelative > 0 && 
                 mouseXRelative < BUILDING_WIDTH && 
                 mouseYRelative > 0 && 
                 mouseYRelative < (BUILDING_HEIGHT + ROOF_HEIGHT);

  push();  // 현재 변환 상태 저장
  
  if (isHovered) {
    // 호버 시 건물 크기 증가
    translate(BUILDING_CENTER, BUILDING_Y + BUILDING_HEIGHT/2);  // 건물 중앙을 기준점으로
    scale(1.1);
    translate(-BUILDING_CENTER, -(BUILDING_Y + BUILDING_HEIGHT/2));  // 원래 위치로 되돌림
  }

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

  pop();  // 변환 상태 복원
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
    
    let floatY = sin(frameCount * icon.floatSpeed + icon.floatOffset) * (icon.size / 4);
    icon.y = icon.baseY + floatY;
    
    // 마우스 호버 체크
    let d = dist(mouseX, mouseY, icon.x, icon.y);
    icon.isHovered = d < icon.size;
    
    // 터지는 효과 업데이트
    if (icon.isExploding) {
      icon.explosionProgress += 0.1;
      if (icon.explosionProgress >= 1) {
        icon.visible = false;
        continue;
      }
    }
    
    // 이모지 그리기
    push();
    if (icon.isHovered) {
      // 호버 효과 - 테두리에서 빛나는 효과
      for (let j = 0; j < 3; j++) {
        noFill();
        stroke(255, 255, 0, 100 - j * 30);
        strokeWeight(3 - j);
        ellipse(icon.x, icon.y, icon.size + 10 + j * 5);
      }
      // 호버 시 이모지 크기 증가
      textSize(icon.size * 1.2);
    } else {
      textSize(icon.size);
    }
    
    if (icon.isExploding) {
      // 터지는 효과
      let scale = 1 + sin(icon.explosionProgress * PI) * 0.5;
      let alpha = 255 * (1 - icon.explosionProgress);
      textSize(icon.size * scale);
      fill(255, alpha);
      text(icon.emoji, icon.x, icon.y);
      
      // 파편 효과
      for (let j = 0; j < 8; j++) {
        let angle = j * PI / 4;
        let distance = icon.explosionProgress * 50;
        let x = icon.x + cos(angle) * distance;
        let y = icon.y + sin(angle) * distance;
        textSize(icon.size * 0.3);
        fill(255, alpha);
        text(icon.emoji, x, y);
      }
    } else {
      fill(255);
      text(icon.emoji, icon.x, icon.y);
    }
    pop();
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
    drawLeftArm(walkCycle5, true);
    drawLeftLeg(walkCycle5, true);
    
    fill(255);
    stroke(0);
    strokeWeight(2);
    rectMode(CENTER);
    rect(0, -40, 20, 50, 10);
    
    drawRightArm(walkCycle5, true);
    drawRightLeg(walkCycle5, true);
    
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(0, -80, 30, 30);
    
    if (millis() - eyeGlowTimer5 < 500) {
      fill(255, 0, 0);
      noStroke();
      ellipse(5, -80, 8, 8);
      for (let i = 0; i < 3; i++) {
        noFill();
        stroke(255, 0, 0, 100 - i * 30);
        strokeWeight(2 - i * 0.5);
        ellipse(5, -80, 10 + i * 5, 10 + i * 5);
      }
    } else {
      fill(0);
      ellipse(5, -80, 5, 5);
    }
    
    drawPhone(walkCycle5, true);
  }
  pop();
}

function drawCharacter3() {
  push();
  translate(characterX3, height - 80);
  scale(1.3);
  
  drawLeftArm(walkCycle3, true);
  drawLeftLeg(walkCycle3, true);
  
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  drawRightArm(walkCycle3, true);
  drawRightLeg(walkCycle3, true);
  
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  if (millis() - eyeGlowTimer3 < 500) {
    fill(255, 0, 0);
    noStroke();
    ellipse(5, -80, 8, 8);
    for (let i = 0; i < 3; i++) {
      noFill();
      stroke(255, 0, 0, 100 - i * 30);
      strokeWeight(2 - i * 0.5);
      ellipse(5, -80, 10 + i * 5, 10 + i * 5);
    }
  } else {
    fill(0);
    ellipse(5, -80, 5, 5);
  }
  
  drawPhone(walkCycle3, true);
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
    
    let floatY = sin(frameCount * icon.floatSpeed + icon.floatOffset) * (icon.size / 4);
    icon.y = icon.baseY + floatY;
    
    // 마우스 호버 체크
    let d = dist(mouseX, mouseY, icon.x, icon.y);
    icon.isHovered = d < icon.size;
    
    // 터지는 효과 업데이트
    if (icon.isExploding) {
      icon.explosionProgress += 0.1;
      if (icon.explosionProgress >= 1) {
        icon.visible = false;
        continue;
      }
    }
    
    // 이모지 그리기
    push();
    if (icon.isHovered) {
      // 호버 효과 - 테두리에서 빛나는 효과
      for (let j = 0; j < 3; j++) {
        noFill();
        stroke(255, 255, 0, 100 - j * 30);
        strokeWeight(3 - j);
        ellipse(icon.x, icon.y, icon.size + 10 + j * 5);
      }
      // 호버 시 이모지 크기 증가
      textSize(icon.size * 1.2);
    } else {
      textSize(icon.size);
    }
    
    if (icon.isExploding) {
      // 터지는 효과
      let scale = 1 + sin(icon.explosionProgress * PI) * 0.5;
      let alpha = 255 * (1 - icon.explosionProgress);
      textSize(icon.size * scale);
      fill(255, alpha);
      text(icon.emoji, icon.x, icon.y);
      
      // 파편 효과
      for (let j = 0; j < 8; j++) {
        let angle = j * PI / 4;
        let distance = icon.explosionProgress * 50;
        let x = icon.x + cos(angle) * distance;
        let y = icon.y + sin(angle) * distance;
        textSize(icon.size * 0.3);
        fill(255, alpha);
        text(icon.emoji, x, y);
      }
    } else {
      fill(255);
      text(icon.emoji, icon.x, icon.y);
    }
    pop();
  }
}

function drawCharacter7() {
  push();
  translate(characterX7, height - 80);
  scale(1.3);
  
  drawLeftArm(walkCycle7, true);
  drawLeftLeg(walkCycle7, true);
  
  fill(255);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, -40, 20, 50, 10);
  
  drawRightArm(walkCycle7, true);
  drawRightLeg(walkCycle7, true);
  
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(0, -80, 30, 30);
  
  if (millis() - eyeGlowTimer7 < 500) {
    fill(255, 0, 0);
    noStroke();
    ellipse(5, -80, 8, 8);
    for (let i = 0; i < 3; i++) {
      noFill();
      stroke(255, 0, 0, 100 - i * 30);
      strokeWeight(2 - i * 0.5);
      ellipse(5, -80, 10 + i * 5, 10 + i * 5);
    }
  } else {
    fill(0);
    ellipse(5, -80, 5, 5);
  }
  
  drawPhone(walkCycle7, true);
  pop();
}

function drawLyingCharacter7() {
  // 마우스 호버 체크
  const characterX = width/3 + 180;
  const characterY = height - 100;
  const isHovered = dist(mouseX, mouseY, characterX, characterY - 45) < 40;
  const characterScale = isHovered ? 1.43 : 1.3;  // 1.3 * 1.1 = 1.43 (10% 증가)

  push();
  translate(characterX, characterY);
  scale(characterScale);
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
  if (millis() - eyeGlowTimer7 < 500) {
    // 빨간색으로 빛나는 효과
    fill(255, 0, 0);
    noStroke();
    ellipse(1, -50, 8, 8);
    // 빛나는 효과
    for (let i = 0; i < 3; i++) {
      noFill();
      stroke(255, 0, 0, 100 - i * 30);
      strokeWeight(2 - i * 0.5);
      ellipse(1, -50, 10 + i * 5, 10 + i * 5);
    }
  } else {
    fill(0);
    ellipse(1, -50, 5, 5);
  }
  
  // 핸드폰을 든 팔 (수직으로)
  push();
  translate(-40, -40);
  rotate(PI - PI/12);  // 수직으로
  fill(255);  // 투명도 제거
  stroke(0);  // 투명도 제거
  strokeWeight(2);
  rectMode(CENTER);
  rect(-15, 15, 10, 30, 5);
  
  // 손 (팔 끝에)
  fill(255);  // 투명도 제거
  ellipse(-15, 30, 8, 8);
  
  // 핸드폰 (손 끝에)
  push();
  translate(-15, 30);
  rotate(PI/2);
  fill(200);  // 투명도 제거
  stroke(0);  // 투명도 제거
  strokeWeight(2);
  rectMode(CENTER);
  rect(5, 7, 10, 20, 5);
  
  // 핸드폰에서 나오는 빛
  noStroke();
  fill(255, 255, 200, 100);  // 원래 투명도로 복원
  triangle(5, 7, -20, 50, -40, 0);
  pop();
  pop();
  
  rectMode(CORNER);
  pop();
}

function drawEmojis2() {
  textAlign(CENTER, CENTER);
  
  if (millis() - emojiTimer2 > 500 && visibleEmojis2 < NUM_ICONS2) {
    icons2[visibleEmojis2].visible = true;
    visibleEmojis2++;
    emojiTimer2 = millis();
  }
  
  for (let i = 0; i < visibleEmojis2; i++) {
    let icon = icons2[i];
    if (!icon.visible) continue;
    
    if (icon.x < -50 || icon.x > width + 50 || icon.y < 0 || icon.y > height - 80) {
      icon.x = random(width);
      let newY = random(0, height - 80);
      icon.y = newY;
      icon.baseY = newY;
    }
    
    let floatY = sin(frameCount * icon.floatSpeed + icon.floatOffset) * (icon.size / 4);
    icon.y = icon.baseY + floatY;
    
    let d = dist(mouseX, mouseY, icon.x, icon.y);
    icon.isHovered = d < icon.size;
    
    if (icon.isExploding) {
      icon.explosionProgress += 0.1;
      if (icon.explosionProgress >= 1) {
        icon.visible = false;
        continue;
      }
    }
    
    push();
    if (icon.isHovered) {
      // 호버 효과 - 테두리에서 빛나는 효과
      for (let j = 0; j < 3; j++) {
        noFill();
        stroke(255, 255, 0, 100 - j * 30);
        strokeWeight(3 - j);
        ellipse(icon.x, icon.y, icon.size + 10 + j * 5);
      }
      // 호버 시 이모지 크기 증가
      textSize(icon.size * 1.2);
    } else {
      textSize(icon.size);
    }
    
    if (icon.isExploding) {
      let scale = 1 + sin(icon.explosionProgress * PI) * 0.5;
      let alpha = 255 * (1 - icon.explosionProgress);
      textSize(icon.size * scale);
      fill(255, alpha);
      text(icon.emoji, icon.x, icon.y);
      
      for (let j = 0; j < 8; j++) {
        let angle = j * PI / 4;
        let distance = icon.explosionProgress * 50;
        let x = icon.x + cos(angle) * distance;
        let y = icon.y + sin(angle) * distance;
        textSize(icon.size * 0.3);
        fill(255, alpha);
        text(icon.emoji, x, y);
      }
    } else {
      fill(255);
      text(icon.emoji, icon.x, icon.y);
    }
    pop();
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

function mousePressed() {
  if (currentScene === 0) {
    // 입력 칸 클릭 처리
    let inputBoxX = introCharacterX;
    let inputBoxY = height - 80 - 250 + 20;
    if (dist(mouseX, mouseY, inputBoxX, inputBoxY) < 100) {
      introUserName = prompt('이름을 입력하세요:');
      if (introUserName !== '') {
        introNameEnteredTime = millis();
      }
    }
  } else if (currentScene === 2) {
  // Scene 2의 이모지 클릭 처리
    for (let icon of icons2) {
      if (!icon.visible || icon.isExploding) continue;
      
      let d = dist(mouseX, mouseY, icon.x, icon.y);
      if (d < icon.size) {
        icon.isExploding = true;
        icon.explosionProgress = 0;
        eyeGlowTimer2 = millis();
        return;
      }
    }
    
    // NEXT 버튼 클릭 처리
    if (showNextButton && 
        mouseX > NEXT_BUTTON_X && mouseX < NEXT_BUTTON_X + NEXT_BUTTON_WIDTH &&
        mouseY > NEXT_BUTTON_Y && mouseY < NEXT_BUTTON_Y + NEXT_BUTTON_HEIGHT) {
      currentScene = 3;
    }
  } else if (currentScene === 3) {
  // Scene 3의 이모지 클릭 처리
    for (let icon of icons3) {
      if (icon.isExploding) continue;
      
      let d = dist(mouseX, mouseY, icon.x, icon.y);
      if (d < icon.size) {
        icon.isExploding = true;
        icon.explosionProgress = 0;
        eyeGlowTimer3 = millis();
        return;
      }
    }
    
    // 버스 클릭 처리
    if (isBusStopped) {
    let busY = height - 200;
    if (mouseX > busX && mouseX < busX + 300 &&
        mouseY > busY && mouseY < busY + 100) {
      currentScene = 4;
    }
  }
  } else if (currentScene === 4) {
    // 하차벨 클릭 처리
    let bellXs = [175, 475];
    for (let bellX of bellXs) {
      if (dist(mouseX, mouseY, bellX, height - 250) < 15) {
        currentScene = 5;
        return;
      }
    }
  } else if (currentScene === 5) {
    // Scene 5의 이모지 클릭 처리
    for (let icon of icons5) {
      if (icon.isExploding) continue;
      
      let d = dist(mouseX, mouseY, icon.x, icon.y);
      if (d < icon.size) {
        icon.isExploding = true;
        icon.explosionProgress = 0;
        eyeGlowTimer5 = millis();
      return;
    }
  }
  
    // 카페 건물 클릭 처리
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 &&
        mouseY > height - 280 && mouseY < height - 80) {
      currentScene = 6;
    }
  } else if (currentScene === 6) {
    // 친구 캐릭터 클릭 처리
    if (showText) {
    const friendX = width / 2 + 125;
    const friendY = height - 105;
    const clickRadius = 30;
    
    if (dist(mouseX, mouseY, friendX, friendY - 80) < clickRadius) {
      showText = false;
      showSpeechBubble = true;
        speechBubbleTimer = 0;
      return;
    }
  }
  
    // 메인 캐릭터 클릭 처리
    if (showSpeechBubble && millis() - speechBubbleTimer > 4000) {
    const characterX = width/2 - 130;
    const characterY = height - 105;
    
      if (mouseX > characterX - 50 && mouseX < characterX + 50 &&
          mouseY > characterY - 100 && mouseY < characterY + 50) {
        currentScene = 7;
      }
    }
  } else if (currentScene === 7) {
    // Scene 7의 이모지 클릭 처리
    for (let icon of icons7) {
      if (icon.isExploding) continue;
      
      let d = dist(mouseX, mouseY, icon.x, icon.y);
      if (d < icon.size) {
        icon.isExploding = true;
        icon.explosionProgress = 0;
        eyeGlowTimer7 = millis();
        return;
      }
    }
    
    // 캐릭터 클릭 처리
    const characterX = width/3 + 180;
    const characterY = height - 100;
    const clickRadius = 50;
    
    if (dist(mouseX, mouseY, characterX, characterY - 45) < clickRadius) {
      currentScene = 8;
      return;
    }
  } else if (currentScene === 8) {
    // Scene 8의 핸드폰 클릭 처리 (캐릭터 손의 핸드폰 위치로 판정)
    const phoneGlobalX = (width / 2 + 50) + (-48) * 2.5 + (-26) * 2.5;
    const phoneGlobalY = (height / 2 - 80) + 28 * 2.5 + 8 * 2.5;
    if (dist(mouseX, mouseY, phoneGlobalX, phoneGlobalY) < 30) {
      if (!isFillingEmojis8 && emojiFillProgress8 === 0) {
        emojiPositions8 = Array.from({length: NUM_EMOJIS}, () => ({
          x: -17 + random(-20, 20),
          y: 35 + random(-25, 25)
        }));
        isFillingEmojis8 = true;
        lastEmojiTime8 = millis();
      }
    }
  }
}

function keyPressed() {
  if (currentScene === 0 && introUserName !== '') {
    if (keyCode === 32) { // 스페이스바
      currentScene = 1;
    }
  } else if (currentScene === 1) {
    if (keyCode === RIGHT_ARROW && !isWalking1) {
    isWalking1 = true;
  }
  } else if (currentScene === 8) {
  // 엔터키로 엔딩 크레딧으로 전환 (장면 8)
    if (keyCode === ENTER) {
    currentScene = 9;
    creditsTimer = millis();
  }
}
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
  rect(5, 7, 10, 20, 5);
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

function drawSpeechBubble() {
  const friendX = width / 2 + 125;
  const friendY = height - 105;
  
  push();
  translate(friendX + 60, friendY - 80);
  
  // 말풍선 본체
  fill(255);
  noStroke();
  rect(0, -40, 120, 60, 10);
  
  // 말풍선 꼬리
  fill(255);
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(-20, -10); 
  vertex(0, -20);  
  endShape(CLOSE);
  
  // 말풍선 텍스트
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  text("안녕!", 60, -19);
  text("오랜만이야!", 60, 1);
  
  pop();
}

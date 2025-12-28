#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <windows.h>

#define MAX_LEVEL 10
#define BASE_TIME 10000

// 화면표시함수
void clearScreen() {
#ifdef _WIN32
    system("cls");
#else
    system("clear");
#endif
}

// 난수열 생성
void generateSequence(char* seq, int length) {
    srand(time(NULL));
    for (int i = 0; i < length; i++) {
        seq[i] = '0' + rand() % 10;
    }
    seq[length] = '\0';
}

// 주 논리
void playGame() {
    int level = 1;
    int score = 0;
    char input[100];

    while (level <= MAX_LEVEL) {
        char sequence[MAX_LEVEL + 1];
        generateSequence(sequence, level + 2);

        clearScreen();
        printf("제 %d 관문\n", level);
        printf("이 숫자의 순서를 기억하십시오：\n%s", sequence);
        fflush(stdout);

        // 디스플레이 시간 감소
        int sleepTime = BASE_TIME - (level * 500);
        if (sleepTime < 500) sleepTime = 500;
        Sleep(sleepTime);

        clearScreen();
        printf("시간이 다 되었습니다! 숫자를 입력하십시오.：");

        fgets(input, sizeof(input), stdin);
        input[strcspn(input, "\n")] = '\0'; // 줄 바꿈 제거

        if (strcmp(sequence, input) == 0) {
            score += level * 10;
            printf("정답! 현재 득점：%d\n", score);
            level++;
        }
        else {
            printf("땡! 정답은：%s\n", sequence);
            printf("잔여관문：%d\n", MAX_LEVEL - level);
            Sleep(2000);
            break;
        }

        Sleep(1000);
    }

    clearScreen();
    printf("게임 끝! 최종 득점：%d\n", score);
}

// 메뉴 보이기
void showMenu() {
    clearScreen();
    printf("================================\n");
    printf("     디지털 기억 훈련 게임\n");
    printf("================================\n");
    printf("1. 게임 시작\n");
    printf("2. 게임 설명\n");
    printf("3. 게임 탈퇴\n");
    printf("선택해주세요：");
}

// 게임 설명
void showInstructions() {
    clearScreen();
    printf("게임 규칙 안내\n");
    printf("------------------------------\n");
    printf("1. 이 게임은 총 %d 개의 관문으로 구성되어 있습니다.\n", MAX_LEVEL);
    printf("2. 각 관문에는 무작위의 숫자들이 화면에 잠시 표시됩니다.\n");
    printf("3. 주어진 시간 내에 숫자 배열을 기억해야 합니다.\n");
    printf("4. 정확하게 입력하면 다음 관문으로 넘어갈 수 있습니다.\n");
    printf("5. 관문이 올라갈수록 숫자의 길이는 길어지고 이를 볼 수 있는 시간은 점점 짧아집니다.\n");
    printf("\nEnter 키를 눌러 홈 메뉴로 돌아가기...\n");
    getchar();
}

void numbermemory() {
    int choice;

    do {
        showMenu();
        scanf_s("%d", &choice);
        getchar(); // 입력 버퍼 지우기

        switch (choice) {
        case 1:
            playGame();
            break;
        case 2:
            showInstructions();
            break;
        case 3:
            printf("ByeBye！\n");
            Sleep(1000);
            system("cls");
            break;
        default:
            printf("잘못된 선택입니다! 다시 입력하십시오.\n");
            Sleep(1000);
        }
    } while (choice != 3);

    return 0;
}
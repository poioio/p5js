#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <windows.h> 

void wordchain();
void miro();
void numbermemory();

void printTitle() {
    system("cls");

    const char* title[] = {
        "###############################################",
        "#                                             #",
        "#              MINI GAME WORLD                #",
        "#                                             #",
        "###############################################",
        "",
        "   [1] 숫자 기억 게임 (Number Memory)",
        "   [2] 미로 찾기 게임 (Maze Runner)",
        "   [3] 끝말잇기 게임 (Word Chain)",
        "   [0] 종료 (Exit)",
        ""
    };

    for (int i = 0; i < sizeof(title) / sizeof(title[0]); i++) {
        printf("%s\n", title[i]);
        Sleep(100);  
    }
}

int main() {
    int choice;

    while (1) {
        printTitle();
        printf("   ▶ 번호를 입력하세요: ");
        scanf("%d", &choice);
        getchar();

        system("cls");

        switch (choice) {
        case 1:
            numbermemory();
            break;
        case 2:
            miro();
            break;
        case 3:
            wordchain();
            break;
        case 0:
            printf("게임을 종료합니다. 안녕히 가세요!\n");
            return 0;
        default:
            printf("잘못된 입력입니다. 다시 선택하세요.\n");
            Sleep(1000);
        }
    }

    return 0;
}

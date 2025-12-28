#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>
#include <wchar.h>
#include <Windows.h>
#include <time.h>
#include "word.h"

void clear_Screen() {
#ifdef _WIN32
    system("cls");
#else
    system("clear");
#endif
}

int is_used[MAX_WORDS] = { 0 };


// 첫 글자 추출
wchar_t get_first_syllable(wchar_t* word) {
    return word[0];
}

// 마지막 글자 추출
wchar_t get_last_syllable(wchar_t* word) {
    int len = wcslen(word);
    return (len > 0) ? word[len - 1] : L'\0';
}

// 유니코드 변환
void convert_to_wchar(const char* src, wchar_t* dest) {
    mbstowcs(dest, src, MAX_LENGTH);
}

// 유니코드 역변환
void convert_to_char(const wchar_t* src, char* dest) {
    wcstombs(dest, src, MAX_LENGTH);
}

// 컴퓨터 단어 선택
int find_word_by_first(wchar_t ch) {
    wchar_t temp[MAX_LENGTH];

    for (int i = 0; i < word_count; i++) {
        if (is_used[i]) continue;
        convert_to_wchar(word_list[i], temp);
        if (get_first_syllable(temp) == ch) {
            return i;
        }
    }
    return -1;
}

void wordchain() {
    clear_Screen();
    setlocale(LC_ALL, "Korean");
    srand((unsigned int)time(NULL));

    wchar_t prev_word[MAX_LENGTH];
    wchar_t input[MAX_LENGTH];
    char temp[MAX_LENGTH];
    int idx = rand() % word_count;

    is_used[idx] = 1;
    convert_to_wchar(word_list[idx], prev_word);
    printf("게임 시작! 컴퓨터: %s\n", word_list[idx]);

    while (1) {
        printf("단어를 입력하세요: ");
        fgets(temp, sizeof(temp), stdin);
        temp[strcspn(temp, "\n")] = 0;
        convert_to_wchar(temp, input);

        if (get_first_syllable(input) != get_last_syllable(prev_word)) {
            printf("올바르지 않은 단어입니다. 끝말이 맞지 않습니다.\n");
            break;
        }

        int found = -1;
        for (int i = 0; i < word_count; i++) {
            if (!is_used[i] && wcscmp(input, word_list[i]) == 0) {
                found = i;
                break;
            }
        }

        if (found != -1) {
            is_used[found] = 1;
        }

        wchar_t last_char = get_last_syllable(input);
        int comp_idx = find_word_by_first(last_char);

        if (comp_idx == -1) {
            printf("컴퓨터가 더 이상 단어를 찾지 못합니다.\n");
            break;
        }

        convert_to_wchar(word_list[comp_idx], prev_word);
        is_used[comp_idx] = 1;
        printf("컴퓨터: %s\n", word_list[comp_idx]);
    }
    
    Sleep(3000);
    system("cls");
    return;

}

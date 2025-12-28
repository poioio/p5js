#include <stdio.h>
#include <windows.h>
#include <conio.h>
#include <wincon.h>

#define MAX_SIZE 12
#define XPOS 50
#define YPOS 5

#define LEFT 75
#define RIGHT 77
#define UP 72
#define DOWN 80

char maze1[MAX_SIZE][MAX_SIZE] = {
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
    { 'x','0','1','1','1','1','1','1','1','1','1','1' },
    { '1','0','1','1','0','0','0','1','1','1','1','1' },
    { '1','0','0','0','0','1','0','1','1','0','0','0' },
    { '1','0','1','0','1','1','0','1','1','0','1','0' },
    { '1','1','1','1','1','1','0','0','0','0','1','y' },
    { '1','1','1','1','1','1','1','1','0','1','1','1' },
    { '1','1','1','1','1','1','1','1','0','0','0','1' },
    { '1','1','1','1','1','1','1','1','0','0','0','1' },
    { '1','1','1','1','1','1','1','1','1','1','0','0' },
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
};

char maze2[MAX_SIZE][MAX_SIZE] = {
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
    { 'x','0','0','0','1','1','1','1','1','1','1','1' },
    { '1','1','1','0','1','0','0','0','1','1','1','1' },
    { '1','0','0','0','1','0','1','0','0','0','0','1' },
    { '1','0','1','1','1','0','1','1','1','1','0','1' },
    { '1','0','0','0','0','0','0','0','0','1','0','y' },
    { '1','1','1','1','1','1','1','1','0','1','1','1' },
    { '1','1','1','1','1','1','1','1','0','0','0','1' },
    { '1','1','1','1','1','1','1','1','1','1','0','1' },
    { '1','1','1','1','1','1','1','1','1','1','0','1' },
    { '1','1','1','1','1','1','1','1','1','1','0','0' },
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
};

char maze3[MAX_SIZE][MAX_SIZE] = {
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
    { 'x','0','1','1','1','1','1','1','1','1','1','1' },
    { '1','0','0','0','1','0','0','0','0','0','1','1' },
    { '1','1','1','0','0','1','1','0','0','1','0','0' },
    { '1','0','0','0','0','0','1','1','1','0','1','0' },
    { '1','1','0','1','1','0','0','1','1','1','1','y' },
    { '1','1','0','1','1','1','0','0','0','0','0','0' },
    { '1','1','0','1','1','1','1','0','1','1','0','1' },
    { '1','1','0','0','0','0','0','0','0','1','1','1' },
    { '1','1','1','1','1','1','0','1','0','1','1','1' },
    { '1','1','1','0','1','1','1','0','1','1','1','1' },
    { '1','1','1','1','1','1','1','1','1','1','1','1' }
};

char maze4[MAX_SIZE][MAX_SIZE] = {
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
    { 'x','0','1','1','1','1','1','1','1','1','1','1' },
    { '1','0','0','0','1','0','0','0','0','0','1','0' },
    { '1','1','1','0','0','1','1','0','1','0','0','1' },
    { '1','0','1','1','0','0','1','0','0','1','0','1' },
    { '1','1','1','1','1','0','1','1','0','1','0','y' },
    { '1','0','0','1','0','0','1','1','0','1','1','1' },
    { '1','1','1','1','0','1','0','0','0','0','0','1' },
    { '1','0','1','1','0','1','1','0','0','1','1','1' },
    { '1','1','0','1','0','0','0','0','1','1','1','1' },
    { '1','1','1','1','1','0','1','1','1','1','1','1' },
    { '1','1','1','1','1','1','1','1','1','1','1','1' }
};

char maze5[MAX_SIZE][MAX_SIZE] = {
    { '1','1','1','1','1','1','1','1','1','1','1','1' },
    { 'x','0','1','1','1','1','1','0','1','1','1','1' },
    { '1','0','1','0','1','0','0','0','0','1','1','0' },
    { '0','0','1','1','0','0','1','0','1','0','1','1' },
    { '0','1','1','1','1','0','1','1','0','1','1','1' },
    { '0','0','0','0','1','0','1','1','1','1','0','y' },
    { '1','1','1','0','1','0','1','1','1','1','0','1' },
    { '1','1','1','0','1','1','0','0','0','1','0','0' },
    { '1','1','1','0','0','1','0','1','0','1','1','0' },
    { '1','0','1','1','0','0','0','1','0','1','0','0' },
    { '1','0','1','1','1','1','1','0','0','0','0','1' },
    { '1','1','1','1','1','1','1','1','1','1','1','1' }
};


void GotoXY(int x, int y);
void print_mazeGame(char maze[][MAX_SIZE], int row);
int is_block(char maze[][MAX_SIZE], int row, int col);
int move_maze(char maze[][MAX_SIZE], int* row, int* col);
void CursorView(char show);
int GetKey();
int is_finish(char maze[][MAX_SIZE], int i, int j);
void play_clear_message();

void miro()
{
    system("cls");

    CursorView(0);

    // 콘솔 글꼴 크기 설정
    HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    CONSOLE_FONT_INFOEX fontInfo = { 0 };
    fontInfo.cbSize = sizeof(CONSOLE_FONT_INFOEX);
    fontInfo.dwFontSize.Y = 36;
    SetCurrentConsoleFontEx(hConsole, FALSE, &fontInfo);

    GotoXY(XPOS - 3, YPOS - 2);
    printf("미로 찾기 게임");

    int row = 1, col = 0;
    while (1)
    {
        print_mazeGame(maze1, 12);
        if (move_maze(maze1, &row, &col)) {
            play_clear_message();
            break;
        }
    }

    // 두 번째 미로 시작
    row = 1; col = 0;
    while (1)
    {
        print_mazeGame(maze2, 12);
        if (move_maze(maze2, &row, &col)) {
            play_clear_message();
            break;
        }
    }

    row = 1; col = 0;
    while (1)
    {
        print_mazeGame(maze3, 12);
        if (move_maze(maze3, &row, &col)) {
            play_clear_message();
            break;
        }
    }

    row = 1; col = 0;
    while (1)
    {
        print_mazeGame(maze4, 12);
        if (move_maze(maze4, &row, &col)) {
            play_clear_message();
            break;
        }
    }

    row = 1; col = 0;
    while (1)
    {
        print_mazeGame(maze5, 12);
        if (move_maze(maze5, &row, &col)) {
            play_clear_message();
            break;
        }
    }

    GotoXY(XPOS, YPOS + MAX_SIZE + 2);
    printf("모든 미로 클리어! 게임 종료!\n");
    Sleep(1000);
    system("cls");
    return 0;
}

void CursorView(char show)
{
    HANDLE hConsole;
    CONSOLE_CURSOR_INFO ConsoleCursor;
    hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
    ConsoleCursor.bVisible = show;
    ConsoleCursor.dwSize = 1;
    SetConsoleCursorInfo(hConsole, &ConsoleCursor);
}

void GotoXY(int x, int y)
{
    COORD Pos;
    Pos.X = x;
    Pos.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), Pos);
}

int GetKey()
{
    if (_kbhit() != 0)
    {
        return _getch();
    }
    return 0;
}

void print_mazeGame(char maze[][MAX_SIZE], int row)
{
    for (int i = 0; i < row; i++)
    {
        GotoXY(XPOS, YPOS + i);
        for (int j = 0; j < MAX_SIZE; j++)
        {
            if (maze[i][j] == '1')
                printf("■");
            else if (maze[i][j] == 'y')
                printf("★");
            else if (maze[i][j] == '0')
                printf("□");
            else
                printf("●");
        }
    }
}

int is_block(char maze[][MAX_SIZE], int i, int j)
{
    return (maze[i][j] == '1');
}

int is_finish(char maze[][MAX_SIZE], int i, int j)
{
    return (maze[i][j] == 'y');
}

void play_clear_message()
{
    Beep(1047, 150);
    Sleep(50);
    Beep(1319, 150);
    Sleep(50);
    Beep(1568, 300);

    GotoXY(XPOS, YPOS + MAX_SIZE + 1);
    printf("클리어!! 다음 미로로...\n");
    Sleep(1000);
    system("cls");
}

int move_maze(char maze[][MAX_SIZE], int* row, int* col)
{
    int chr;
    int i = *row;
    int j = *col;

    chr = GetKey();
    if (chr == 0 || chr == 0xe0)
    {
        chr = GetKey();
        switch (chr)
        {
        case UP:    i--; break;
        case DOWN:  i++; break;
        case LEFT:  j--; break;
        case RIGHT: j++; break;
        default: return 0;
        }

        if (is_finish(maze, i, j))
        {
            maze[*row][*col] = '0';
            maze[i][j] = 'x';
            print_mazeGame(maze, 12);
            return 1;
        }
        else if (!is_block(maze, i, j))
        {
            maze[*row][*col] = '0';
            maze[i][j] = 'x';
            *row = i;
            *col = j;
        }
        else
        {
            Beep(450, 100);
        }
    }
    return 0;
}

#include "WatchHistory.h"

void WatchHistory::Add(const char* title)
{
    if (count >= MAX_HISTORY) {
        cout << "시청 목록이 가득 찼습니다." << endl;
        return;
    }

    titles[count] = new char[strlen(title) + 1];
    strcpy_s(titles[count], strlen(title) + 1, title);
    count++;
}

void WatchHistory::Show()
{
    if (count == 0) {
        cout << "시청 기록이 없습니다." << endl;
        return;
    }

    cout << "[시청 목록]\n";
    for (int i = 0; i < count; i++) {
        cout << i + 1 << ". " << titles[i] << endl;
    }
}

#pragma once
#ifndef WATCH_HISTORY_H
#define WATCH_HISTORY_H

#include <iostream>
#include <cstring>

using std::cout;
using std::endl;

class WatchHistory
{
    static const int MAX_HISTORY = 100; // 최대 100개 영상 저장
    char* titles[MAX_HISTORY];
    int count;
public:
    WatchHistory()
    {
        count = 0;
        for (int i = 0; i < MAX_HISTORY; i++)
            titles[i] = nullptr;
    }

    ~WatchHistory()
    {
        for (int i = 0; i < count; i++)
            delete[] titles[i];
    }

    void Add(const char* title);

    void Show();
};

#endif

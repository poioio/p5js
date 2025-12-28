#pragma once
#ifndef IPTV_SYSTEM_H
#define IPTV_SYSTEM_H

#include <iostream>
#include <vector>
#include <string>
#include "Content.h"        
#include "User.h"           
#include "SearchEngine.h"   
#include "Membership.h"     

using std::vector;
using std::string;
using std::cout;
using std::endl;
using std::cin;

// 메뉴 항목 정의
enum MainMenu { SEARCH = 1,MOVIE_MENU,DRAMA_MENU,ENTERTAINMENT_MENU,MY_PAGE,SIGN_UP,EXIT
};

// Control 클래스
class IPTVSystem {
private:
    vector<Content*> contentList;
    vector<User*> userList;
    User* currentUser;

    SearchEngine searchEngine;
    Membership membershipManager;

    bool checkLoginStatus() const;
    void DisplayContentMenu(int contentTypeID, const string& title);
    void PlayContent(Content* content);

public:
    IPTVSystem();
    ~IPTVSystem();

    void DisplayMenu() const;
    void InitializeData();

    void Search();
    void MovieMenu();
    void DramaMenu();
    void EntertainmentMenu();
    void MyPage();
    void SignUp();
};

#endif

#include <iostream>
#include "IPTVSystem.h" 
#include "User.h" 

using std::cout;
using std::endl;
using std::cin;

int main() {
    // Control 클래스 객체 생성
    IPTVSystem system;

    // 초기 데이터 세팅
    system.InitializeData();

    int choice_int = 0;

    cout << "SSU IPTV 서비스 시작" << endl;

    while (1) {
        system.DisplayMenu(); // AccountHandler::Menu() 역할

        if (!(cin >> choice_int)) {
            cin.clear();
            cin.ignore(10000, '\n');
            continue;
        }

        MainMenu choice = static_cast<MainMenu>(choice_int);

        switch (choice) {
        case SEARCH:
            system.Search();
            break;
        case MOVIE_MENU:
            system.MovieMenu();
            break;
        case DRAMA_MENU:
            system.DramaMenu();
            break;
        case ENTERTAINMENT_MENU:
            system.EntertainmentMenu();
            break;
        case MY_PAGE:
            system.MyPage();
            break;
        case SIGN_UP:
            system.SignUp();
            break;
        case EXIT:
            cout << "프로그램을 종료합니다. 감사합니다." << endl;
            return 0; 
        default:
            cout << "유효하지 않은 메뉴 번호입니다. 다시 선택해 주세요." << endl;
            break;
        }
    }

    return 0;
}
#include "IPTVSystem.h"
#include "Movie.h"
#include "Drama.h"
#include "Entertainment.h"
#include "User.h"
#include <iostream>
#include <string> 

using std::cout;
using std::endl;
using std::cin;

// 생성자 및 소멸자
IPTVSystem::IPTVSystem() : currentUser(nullptr) {}

IPTVSystem::~IPTVSystem() {
    for (Content* c : contentList) {
        delete c;
    }
    for (User* u : userList) {
        delete u;
    }
    cout << "IPTV System 종료: 메모리 정리 완료." << endl;
}

// 초기 데이터 세팅
void IPTVSystem::InitializeData() {
    cout << "### 시스템 초기 데이터 설정 중... ###" << endl;
    //push_back은 vector의 맨 끝에 새로운 요소를 추가해주는 함수 , c++표준 라이브러리 함수 
    contentList.push_back(new Movie("기생충", 2019, 0));
    contentList.push_back(new Movie("타이타닉", 1998, 0));
    contentList.push_back(new Movie("범죄도시", 2017, 19));
    contentList.push_back(new Movie("파묘", 2025, 0));
    contentList.push_back(new Movie("라라랜드", 2016, 0));
    contentList.push_back(new Drama("도깨비", 2016, 0));
    contentList.push_back(new Drama("더 글로리", 2022, 0));
    contentList.push_back(new Drama("상속자들", 2013, 0));
    contentList.push_back(new Drama("미스터 션샤인", 2018, 0));
    contentList.push_back(new Drama("슬기로운 의사생활", 2020, 0));
    contentList.push_back(new Entertainment("무한도전", 2005, 0));
    contentList.push_back(new Entertainment("환승연애", 2021, 0));
    contentList.push_back(new Entertainment("런닝맨", 2010, 0));
    contentList.push_back(new Entertainment("나 혼자 산다", 2013, 0));
    contentList.push_back(new Entertainment("놀면 뭐하니?", 2019, 0));

    cout << "### 초기 데이터 설정 완료! 총 " << contentList.size() << "개 콘텐츠 등록. ###" << endl;
}

// 메뉴 출력
void IPTVSystem::DisplayMenu() const {
    cout << "\n========== 전체 메뉴 ==========" << endl;
    cout << "1. 검색" << endl;
    cout << "2. 영화 목록" << endl;
    cout << "3. 드라마 목록" << endl;
    cout << "4. 예능 목록" << endl;
    cout << "5. 마이페이지" << endl;
    cout << "6. 회원가입" << endl;
    cout << "7. 프로그램 종료" << endl;
    cout << "===============================" << endl;
    cout << "메뉴 선택: ";
}

// 사용자 인증 및 기능 호출
bool IPTVSystem::checkLoginStatus() const {
    if (currentUser == nullptr || !currentUser->IsRegistered()) {
        cout << "--------------------------------------------------------" << endl;
        cout << "** 회원이 아닙니다. 회원가입 후 시도해주세요. **" << endl;
        cout << "--------------------------------------------------------" << endl;
        return false;
    }
    return true;
}

void IPTVSystem::PlayContent(Content* content) {
    if (content == nullptr || currentUser == nullptr) {
        return;
    }
    int requiredAge = content->GetAgeLimit();
    if (requiredAge > 0) {
        int userAge = currentUser->GetAge();

        if (userAge < requiredAge) {
            cout << "\n==========================================" << endl;
            cout << content->GetTitle() << " 콘텐츠는 " << requiredAge << "세 미만 시청 불가입니다." << endl;
            cout << "==========================================" << endl;
            return; // 재생 불가
        }
    }
    int userPlan = currentUser->getPaymentPlan();

    if (userPlan == 0) {
        cout << "결제를 하지 않으셨습니다. 영상 재생 불가. 플랜을 선택하세요." << endl;
        return;
    }
    string finalResolution = content->GetResolutionString(userPlan);

    cout << "\n[재생 시작] \"" << content->GetTitle() << "\"";
    cout << "을(를) 회원 등급에 따라 " << finalResolution << "로 재생합니다." << endl;

    currentUser->AddWatch(content->GetTitle().c_str());
    cout << " 시청 기록에 \"" << content->GetTitle() << "\"이(가) 추가되었습니다." << endl;
}

void IPTVSystem::MyPage() {
    if (!checkLoginStatus()) return;
    currentUser->ShowInfo(); 
    if (!currentUser->IsRegistered()) {
        currentUser = nullptr;
        cout << "시스템에서 로그아웃되었습니다. 감사합니다. enter키를 누르면 메인메뉴로 돌아갑니다." << endl;
        cin.clear();
        cin.ignore(10000, '\n');
    }
}

void IPTVSystem::DisplayContentMenu(int contentTypeID, const string& title) {
    //목록 필터링 및 출력
    cout << "\n==========================================" << endl;
    cout << title << " 목록" << endl;
    cout << "==========================================" << endl;

    vector<Content*> filteredList;
    int index = 1;

    for (Content* content : contentList) {
        // ID를 기준으로 필터링 (Movie:1, Drama:2, Entertainment:3)
        if (content->GetContentTypeID() == contentTypeID) {
            filteredList.push_back(content);
            cout << index++ << ". " << content->GetTitle() << endl;
        }
    }

    if (filteredList.empty())
    {
        cout << "등록된 " << title << " 콘텐츠가 없습니다." << endl;
        return;
    }
    cout << "==========================================" << endl;

    //사용자 입력 받기
    int selection = 0;
    cout << "재생할 영상 번호 선택 (0 입력 시 이전 메뉴): ";
    cin.clear();
    cin.ignore(10000, '\n');

    if (!(cin >> selection)) {
        cin.clear();
        cin.ignore(10000, '\n');
        cout << "잘못된 입력입니다." << endl;
        return;
    }

    //재생 및 시청 기록 추가
    if (selection > 0 && selection <= (int)filteredList.size()) {
        Content* playedContent = filteredList[selection - 1];

        PlayContent(playedContent); 
    }
    else if (selection != 0) {
        cout << "유효하지 않은 번호입니다." << endl;
    }
    // 함수의 끝에서 남은 입력 버퍼를 정리 없어도 작동하는데는 이상 없으나 프로그램 안정성을위해 제미나이가 삽입을 추천했음 
    cin.clear();
    cin.ignore(10000, '\n');
}

void IPTVSystem::Search() {
    if (!checkLoginStatus()) return;

    // 결제 확인 (검색 기능 자체에 대한 제한이므로 유지)
    if (currentUser->getPaymentPlan() == 0) {
        cout << "결제를 하지 않았습니다. 검색 기능을 사용할 수 없습니다. " << endl;
        return;
    }

    cout << "\n--- 1. 검색 메뉴 ---" << endl;
    cout << "검색어를 입력하세요: ";

    string keyword;
    cin.ignore(10000, '\n');
    getline(cin, keyword);

    if (keyword.empty()) {
        cout << "검색어를 입력해야 합니다." << endl;
        return;
    }

    vector<Content*> searchResults = searchEngine.SearchByTitle(keyword, contentList);

    if (searchResults.empty()) {
        return; // SearchEngine이 이미 메시지 출력
    }
    cout << "\n--- 검색 결과 즉시 재생 시작 ---" << endl;

    for (Content* playedContent : searchResults) {
        PlayContent(playedContent); 
    }

    cout << "메인메뉴로 돌아가려면 0을 누르세요" << endl;
    // 함수가 끝난 후 메인 메뉴로 돌아가기 위해 버퍼 정리
    cin.clear();
    cin.ignore(10000, '\n');
}

void IPTVSystem::SignUp() {
    if (currentUser != nullptr && currentUser->IsRegistered()) {
        cout << "이미 회원가입이 완료되었습니다. 플랜을 결제하려면 '마이메뉴'에 가서 결제할 수 있습니다." << endl;
        return;
    }

    User* newUser = new User();
    membershipManager.signUp(newUser);

    if (newUser->IsRegistered()) {
        // 등록 성공 시에만 currentUser와 userList에 추가하고 결제 로직 실행
        currentUser = newUser;
        userList.push_back(newUser);

        // 회원가입 후 결제 메뉴 실행
        cout << "\n회원가입이 완료되었습니다. 플랜을 선택하시겠습니까? (1: 예, 0: 아니오): ";
        int sel;
        cin >> sel;
        if (sel == 1) {
            currentUser->GetPayment().Pay();
        }
    }
    else {
        // 등록 실패 시 메모리 해제
        delete newUser;
    }
}

// 콘텐츠 메뉴 
void IPTVSystem::MovieMenu(){
    if (!checkLoginStatus()) return;
    DisplayContentMenu(1, "영화");
}

void IPTVSystem::DramaMenu(){
    if (!checkLoginStatus()) return;
    DisplayContentMenu(2, "드라마");
}

void IPTVSystem::EntertainmentMenu(){
    if (!checkLoginStatus()) return;
    DisplayContentMenu(3, "예능");
}
  
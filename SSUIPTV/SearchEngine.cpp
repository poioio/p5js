#include "SearchEngine.h"
#include <iostream>
#include <string>
#include <algorithm>

using std::cin;
using std::cout;
using std::endl;
using std::vector;
using std::string;


vector<Content*> SearchEngine::SearchByTitle(const string& keyword, const vector<Content*>& contentList) const {

    // 검색된 콘텐츠 담을 임시 벡터
    vector<Content*> foundContents;

    // 콘텐츠 목록 돌며 검색 수행
    for (Content* content : contentList) {
        if (content->GetTitle().find(keyword)<content->GetTitle().length()) {
            foundContents.push_back(content);
        }
    }

    if (foundContents.empty()) {
        cout << "존재하지 않습니다." << endl;
        // 반환 타입이 vector<Content*>이므로, 빈 벡터를 반환
        return foundContents;
    }

    cout << "\n==========================================" << endl;
    cout << " 검색 결과 (" << keyword << "): 총 " << foundContents.size() << "건" << endl;
    cout << "==========================================" << endl;

    for (size_t i = 0; i < foundContents.size(); ++i) {
         cout << i + 1 << ". " << foundContents[i]->GetTitle() << endl;
        
    }
    cout << "==========================================" << endl;

    //검색 결과를 IPTVSystem으로 반환
    return foundContents;
}
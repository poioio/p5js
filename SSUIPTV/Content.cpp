#include "Content.h"
using std::cout;
using std::endl;

Content::Content(const string& t, int y, int limit)
    : title(t), year(y), ageLimit(limit) {
}

Content::~Content() {}

string Content::GetResolutionString(int plan) const {
    if (plan == 2) { // 프리미엄 회원
        return "1080p";
    }
    // 일반 회원
    else { return "720p"; }
}

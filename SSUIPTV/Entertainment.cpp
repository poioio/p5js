#include "Entertainment.h"
#include "Content.h"

using std::cout;
using std::endl;
using std::string;

Entertainment::Entertainment(const string& t,int y, int limit)
    : Content(t, y, limit){
    this->contentTypeID = 3;
}

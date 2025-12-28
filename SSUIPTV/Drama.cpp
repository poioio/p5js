#include "Drama.h"
#include "Content.h"
#include <iostream>
#include <string>
using std::cout;
using std::endl;

Drama::Drama(const string& t, int y,int limit)
    : Content(t, y, limit) {
    this->contentTypeID = 2;
}
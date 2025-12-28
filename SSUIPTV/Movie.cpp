#include "Movie.h"
#include "Content.h"
using std::cout;
using std::endl;

Movie::Movie(const string& t,int y, int limit)
    : Content(t, y, limit){
    this->contentTypeID = 1;
}
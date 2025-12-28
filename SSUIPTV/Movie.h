#pragma once
#ifndef MOVIE_H
#define MOVIE_H
#include "Content.h"

class Movie :public Content {
	string director;
public:
	Movie() :Content("", 0, 0){}
	Movie(const string& t, int y, int limit=0);
};
#endif
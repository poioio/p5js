#pragma once
#ifndef DRAMA_H
#define DRAMA_H
#include "Content.h"

class Drama : public Content {
public:
	Drama() :Content("", 0, 0){}
	Drama(const string& t, int y, int limit=0);
};
#endif
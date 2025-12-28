#pragma once
#ifndef ENTERTAINMENT_H
#define ENTERTAINMENT_H

#include "Content.h"
class Entertainment :public Content {
	
public:
	Entertainment() :Content("", 0,0) {}
	Entertainment(const string& t, int y, int limit=0);
};

#endif
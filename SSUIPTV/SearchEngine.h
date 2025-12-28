#pragma once
#ifndef SEARCH_ENGINE_H
#define SEARCH_ENGINE_H

#include <string>
#include <vector>
#include "Content.h"
using std::string;
using std::vector;

class SearchEngine {
public:
	vector<Content*> SearchByTitle(const string& keyword, const vector<Content*>& contentList) const;
};

#endif
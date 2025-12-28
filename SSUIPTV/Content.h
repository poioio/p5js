#pragma once
#ifndef CONTENT_H
#define CONTENT_H

#include <string>
#include<iostream>
using std::string;

class Content {
protected:
	string title;
	int year;
	int contentTypeID;
	int ageLimit;

public:
	Content(const string& t, int y, int limit = 0);
	~Content();
	string GetTitle()const { return title; }
	int GetDate()const { return year; }
	int GetContentTypeID()const { return contentTypeID; }
	int GetAgeLimit()const { return ageLimit; }
	string GetResolutionString(int plan) const;// 플랜에 따라 해상도 다름
};

class Movie;
class Drama;
class Entertainment;

#endif

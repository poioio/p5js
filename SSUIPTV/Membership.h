#pragma once
#ifndef MEMBERSHIP_H
#define MEMBERSHIP_H

#include "User.h" 

class Membership {
public:
    // IPTVSystem으로부터 가입할 User 객체 포인터를 받아서 처리
    void signUp(User* newUser);
};

#endif
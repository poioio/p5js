#pragma once
#ifndef __USER_H__
#define __USER_H__
#include <iostream>
#include <cstring>
#include "Payment.h"       // Payment 정의 먼저
#include "WatchHistory.h"  // WatchHistory 정의 포함

using std::cin;
using std::cout;
using std::endl;
using std::string;

class User
{
    static int nextNum; // 전체 회원 수
    int num;            // 가입 번호
    int membernum;      // 회원번호

    char* name;
    char* phone;
    int age;

    bool isRegistered;  // 회원가입 여부

    Payment pay;
    WatchHistory history;
public:
    User()
    {
        num = 0;
        membernum = 0;
        name = nullptr;
        phone = nullptr;
        age = 0;
        isRegistered = false;
    }


    ~User()
    {
        delete[] name;
        delete[] phone;
    }

    void SignUp();  // 메뉴 6번에서 호출할 회원가입 함수

    void SetUser(const char* _name, const char* _phone, int _age);

    bool IsRegistered() const;

    Payment& GetPayment() { return pay; }

    Payment& GetRefund() { return pay; }

    int getPaymentPlan() const { return pay.GetMembershipStatus(); }

    void AddWatch(const char* title);

    void ShowInfo();

    void Withdrawal();
    
    int GetAge() const { return age; }
};


#endif

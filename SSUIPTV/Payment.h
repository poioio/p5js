#pragma once
#ifndef PAYMENT_H
#define PAYMENT_H
#include <iostream>
using std::cout;
using std::endl;
using std::cin;

class Payment
{
    int membership; // 0: 미결제, 1: 일반, 2: 프리미엄
public:
    Payment() { membership = 0; }

    void SetMembership(int m) { membership = m; }
    int GetMembership() { return membership; }

    void ShowMembership();

    void Pay();    // 결제
    void Refund();  //환불

    int GetMembershipStatus() const { return membership; }
};

#endif

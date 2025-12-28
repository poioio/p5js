#include "User.h"

int User::nextNum;

void User::SignUp()
{
    char tempName[50];
    char tempPhone[50];
    int tempAge;

    cout << "==========회원가입==========" << endl;
    cout << "이    름: ";
    cin >> tempName;
    cout << "전화번호: ";
    cin >> tempPhone;
    cout << "나    이: ";
    cin >> tempAge;

    SetUser(tempName, tempPhone, tempAge);
    isRegistered = true;

    cout << "회원가입이 완료되었습니다." << endl;
}

void User::Withdrawal() {
    if (!isRegistered) {
        cout << "이미 탈퇴하신 상태 입니다." << endl;
        return;
    }
    string tempName = (name != nullptr) ? name : "회원";
    if (name != nullptr) {
        delete[]name;
        name = nullptr;
    }
    if (phone != nullptr) {
        delete[]phone;
        phone = nullptr;
    }
    age = 0;
    isRegistered = false;
    pay.SetMembership(0);

    cout << "\n===========================" << endl;
    cout << tempName << "님, 회원 탈퇴가 완료 되었습니다." << endl;
    cout << "===============================" << endl;
}

void User::SetUser(const char* _name, const char* _phone, int _age)
{
    if (name != nullptr) delete[] name;
    if (phone != nullptr) delete[] phone;

    name = new char[strlen(_name) + 1];
    strcpy_s(name, strlen(_name) + 1, _name);

    phone = new char[strlen(_phone) + 1];
    strcpy_s(phone, strlen(_phone) + 1, _phone);

    age = _age;

    nextNum++;
    num = nextNum;
    membernum = 10000 + num;
}

bool User::IsRegistered() const { return isRegistered; }

void User::AddWatch(const char* title)
{
    history.Add(title);
}

void User::ShowInfo()
{
    if (!isRegistered) {
        cout << "회원이 아닙니다. 회원가입 후 시도해주세요." << endl;
        return;
    }

    cout << "\n ----------------마이페이지-----------------\n";
    cout << "회원번호: " << membernum << endl;
    cout << "이    름: " << (name ? name : "미등록") << endl;
    cout << "전화번호: " << (phone ? phone : "미등록") << endl;
    cout << "나    이: " << age << endl;

    cout << "멤 버 십: ";
    pay.ShowMembership();

    history.Show();

    cout << "\n[추가 메뉴]\n";
    cout << "1. 결제(플랜 변경) | 2. 환불 | 3. 탈퇴 |0을 누르면 메인 메뉴로 돌아갑니다. \n";
    cout << "선택: ";
    int sub_sel;
    cin >> sub_sel;
    if (sub_sel == 1) {
        pay.Pay();    // Payment::Pay 호출
    }
    else if (sub_sel == 2) {
        pay.Refund(); // Payment::Refund 호출
    }
    else if (sub_sel == 3) {
        char confirm;
        cout << "정말 탈퇴하시겠습니까? (Y/N): ";
        cin >> confirm;
        cin.clear();
        cin.ignore(10000, '\n');

        if (confirm == 'Y' || confirm == 'y') {
            Withdrawal();
            return;
        }
        else {
            cout << "탈퇴가 취소되었습니다." << endl;
        }
    }
    cout << "------------------------------------------\n";
}

#include "Payment.h"

void Payment::ShowMembership()
{
    if (membership == 0) cout << "미결제 회원" << endl;
    else if (membership == 1) cout << "일반 회원" << endl;
    else if (membership == 2) cout << "프리미엄 회원" << endl;
    else cout << "알 수 없음" << endl;
}

void Payment::Pay()
{
    cout << "\n========== 결제 창 ==========\n";
    cout << "결제할 플랜을 선택하세요.\n";
    cout << "1. 일반 회원 (9,900)\n";
    cout << "2. 프리미엄 회원 (14,900)\n";
    cout << "0. 취소\n";
    cout << "선택: ";

    int plan;
    cin >> plan;

    if (plan == 0) {
        cout << "결제가 취소되었습니다.\n";
        return;
    }
    if (plan != 1 && plan != 2) {
        cout << "잘못된 선택입니다!\n";
        return;
    }

    char card[30];
    char pw[10];

    cout << "카드 번호(숫자만 입력): ";
    cin >> card;

    cout << "비밀번호 앞 2자리: ";
    cin >> pw;

    membership = plan;

    cout << "\n결제가 완료되었습니다!\n";
    cout << "현재 회원 등급: ";
    ShowMembership();
    cout << "=============================\n";
}

void Payment::Refund()
{
    if (membership == 0) {
        cout << "\n현재 결제된 플랜이 없습니다. (미결제 회원)\n";
        return;
    }

    cout << "\n현재 플랜: ";
    ShowMembership();
    cout << "정말 환불하시겠습니까? (1: 예, 0: 아니오) : ";

    int sel;
    cin >> sel;

    if (sel != 1) {
        cout << "환불을 취소했습니다.\n";
        return;
    }

    membership = 0;

    cout << "환불이 완료되었습니다. 현재 상태: ";
    ShowMembership();
    cout << endl;
}
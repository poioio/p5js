#include "Membership.h"

void Membership::signUp(User* newUser) {
    if (newUser != nullptr) {
        newUser->SignUp();
    }
}
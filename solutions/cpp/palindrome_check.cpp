#include <iostream>
#include <algorithm>
using namespace std;

bool isPalindrome(string s) {
    string r = s;
    reverse(r.begin(), r.end());
    return s == r;
}

int main() {
    cout << isPalindrome("level");
}

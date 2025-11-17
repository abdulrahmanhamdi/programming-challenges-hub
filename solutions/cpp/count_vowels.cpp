#include <iostream>
#include <string>
using namespace std;

int countVowels(string s) {
    string vowels = "aeiouAEIOU";
    int count = 0;
    for (char c : s)
        if (vowels.find(c) != string::npos) count++;
    return count;
}

int main() {
    cout << countVowels("apple");
}

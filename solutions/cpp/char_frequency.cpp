#include <iostream>
#include <unordered_map>
using namespace std;

unordered_map<char,int> charFrequency(string s) {
    unordered_map<char,int> f;
    for(char c:s) f[c]++;
    return f;
}

int main() {
    auto m = charFrequency("banana");
    for(auto &x:m) cout<<x.first<<":"<<x.second<<" ";
}

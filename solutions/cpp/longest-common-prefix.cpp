#include <iostream>
#include <vector>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    string p = strs[0];
    for (auto& w : strs) {
        while (w.find(p) != 0) p = p.substr(0, p.size()-1);
        if (p.empty()) return "";
    }
    return p;
}

int main() {
    vector<string> v = {"flower","flow","flight"};
    cout << longestCommonPrefix(v);
}

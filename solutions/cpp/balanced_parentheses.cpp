#include <iostream>
#include <stack>
#include <unordered_map>
using namespace std;

bool isBalanced(string s) {
    stack<char> st;
    unordered_map<char,char> p = {{')','('},{']','['},{'}','{'}};
    for(char ch:s) {
        if(ch=='('||ch=='['||ch=='{') st.push(ch);
        else if(p.count(ch)) {
            if(st.empty()||st.top()!=p[ch]) return false;
            st.pop();
        }
    }
    return st.empty();
}

int main() {
    cout << isBalanced("()[{}]");
}

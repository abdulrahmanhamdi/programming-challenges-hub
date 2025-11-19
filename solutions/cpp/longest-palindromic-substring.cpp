#include <iostream>
#include <string>
using namespace std;

pair<int,int> expand(string s, int l, int r){
    while(l>=0 && r<s.size() && s[l]==s[r]){l--;r++;}
    return {l+1,r-1};
}

string longestPalindrome(string s){
    int st=0,en=0;
    for(int i=0;i<s.size();i++){
        auto [l1,r1]=expand(s,i,i);
        auto [l2,r2]=expand(s,i,i+1);
        if(r1-l1 > en-st){st=l1;en=r1;}
        if(r2-l2 > en-st){st=l2;en=r2;}
    }
    return s.substr(st,en-st+1);
}

int main(){ cout<<longestPalindrome("babad"); }

#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;

int ladderLength(string begin, string end, vector<string> wordList){
    unordered_set<string> dict(wordList.begin(), wordList.end());
    if(!dict.count(end)) return 0;

    queue<pair<string,int>> q;
    q.push({begin,1});

    while(!q.empty()){
        auto [w,l]=q.front(); q.pop();
        if(w==end) return l;

        for(int i=0;i<w.size();i++){
            char orig=w[i];
            for(char c='a';c<='z';c++){
                w[i]=c;
                if(dict.count(w)){
                    dict.erase(w);
                    q.push({w,l+1});
                }
            }
            w[i]=orig;
        }
    }
    return 0;
}

int main(){
    cout<<ladderLength("hit","cog",{"hot","dot","dog","lot","log","cog"});
}

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> intersect(vector<int>& a, vector<int>& b) {
    unordered_map<int,int> f;
    for(int x:a) f[x]++;
    vector<int> r;
    for(int x:b) if(f[x]>0){r.push_back(x); f[x]--;}
    return r;
}

int main(){
    vector<int>a={1,2,2,1},b={2,2};
    auto r=intersect(a,b);
    for(int x:r) cout<<x<<" ";
}

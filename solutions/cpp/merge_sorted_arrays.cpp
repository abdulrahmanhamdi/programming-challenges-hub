#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeSorted(vector<int>& a, vector<int>& b) {
    vector<int> r;
    int i=0,j=0;
    while(i<a.size() && j<b.size()) {
        if(a[i]<b[j]) r.push_back(a[i++]);
        else r.push_back(b[j++]);
    }
    while(i<a.size()) r.push_back(a[i++]);
    while(j<b.size()) r.push_back(b[j++]);
    return r;
}

int main() {
    vector<int> c = mergeSorted(*(new vector<int>{1,3,5}), *(new vector<int>{2,4,6}));
    for(int x:c) cout<<x<<" ";
}

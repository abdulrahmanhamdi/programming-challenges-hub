#include <iostream>
#include <vector>
using namespace std;

vector<int> moveZeros(vector<int>& arr) {
    vector<int> r;
    int zeros = 0;
    for(int x:arr) {
        if(x==0) zeros++;
        else r.push_back(x);
    }
    while(zeros--) r.push_back(0);
    return r;
}

int main() {
    vector<int> v={0,1,0,3,12};
    auto r=moveZeros(v);
    for(int x:r) cout<<x<<" ";
}

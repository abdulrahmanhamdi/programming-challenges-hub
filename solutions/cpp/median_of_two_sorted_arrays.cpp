#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

double findMedian(vector<int>a, vector<int>b){
    vector<int> c=a;
    c.insert(c.end(), b.begin(), b.end());
    sort(c.begin(), c.end());
    int n=c.size();
    if(n%2) return c[n/2];
    return (c[n/2-1]+c[n/2])/2.0;
}

int main(){
    cout<<findMedian({1,3},{2});
}

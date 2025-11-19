#include <iostream>
#include <vector>
using namespace std;

int missingNumber(vector<int>& nums) {
    int n = nums.size();
    int exp = n*(n+1)/2;
    int sum = 0;
    for(int x:nums) sum+=x;
    return exp - sum;
}

int main() {
    vector<int> v={3,0,1};
    cout<<missingNumber(v);
}

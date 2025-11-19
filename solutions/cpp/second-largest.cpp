#include <iostream>
#include <set>
#include <vector>
using namespace std;

int secondLargest(vector<int>& arr) {
    set<int> s(arr.begin(), arr.end());
    auto it = s.end(); 
    it--; 
    it--; 
    return *it;
}

int main() {
    vector<int> v = {10,20,4,45,99};
    cout << secondLargest(v);
}

#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int,int> mp;
    for (int i = 0; i < nums.size(); i++) {
        int diff = target - nums[i];
        if (mp.count(diff)) return {mp[diff], i};
        mp[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> v = {2,7,11,15};
    auto r = twoSum(v, 9);
    cout << r[0] << "," << r[1];
}

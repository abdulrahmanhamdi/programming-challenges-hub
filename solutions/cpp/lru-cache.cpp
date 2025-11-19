#include <iostream>
#include <list>
#include <unordered_map>
using namespace std;

class LRUCache {
public:
    int cap;
    list<int> order;
    unordered_map<int,pair<int,list<int>::iterator>> mp;

    LRUCache(int capacity):cap(capacity){}

    int get(int key){
        if(!mp.count(key)) return -1;
        order.erase(mp[key].second);
        order.push_back(key);
        mp[key].second = --order.end();
        return mp[key].first;
    }

    void put(int key,int value){
        if(mp.count(key)){
            order.erase(mp[key].second);
        } else if(mp.size()==cap){
            int old = order.front();
            order.pop_front();
            mp.erase(old);
        }
        order.push_back(key);
        mp[key]={value,--order.end()};
    }
};

int main(){
    LRUCache c(2);
    c.put(1,1); c.put(2,2);
    cout<<c.get(1)<<endl;
    c.put(3,3);
    cout<<c.get(2);
}

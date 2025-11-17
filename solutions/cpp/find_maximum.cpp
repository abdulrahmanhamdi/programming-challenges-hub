#include <iostream>
using namespace std;

int findMax(int arr[], int n) {
    int maxv = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > maxv) maxv = arr[i];
    return maxv;
}

int main() {
    int a[3] = {1, 5, 3};
    cout << findMax(a, 3);
}

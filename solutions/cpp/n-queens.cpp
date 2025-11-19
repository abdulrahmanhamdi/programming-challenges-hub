#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<vector<string>> res;
vector<string> board;
int n;

void backtrack(int r, vector<int>& cols, vector<int>& d1, vector<int>& d2){
    if(r==n){
        res.push_back(board);
        return;
    }
    for(int c=0;c<n;c++){
        if(cols[c]||d1[r-c+n]||d2[r+c]) continue;
        board[r][c]='Q';
        cols[c]=d1[r-c+n]=d2[r+c]=1;
        backtrack(r+1,cols,d1,d2);
        board[r][c]='.';
        cols[c]=d1[r-c+n]=d2[r+c]=0;
    }
}

vector<vector<string>> solveNQueens(int N){
    n=N;
    res.clear();
    board.assign(n,string(n,'.'));
    vector<int> cols(n),d1(2*n),d2(2*n);
    backtrack(0,cols,d1,d2);
    return res;
}

int main(){
    auto r = solveNQueens(4);
    cout<<r.size();
}

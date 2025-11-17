import java.util.*;

public class NQueens {
    public static java.util.List<java.util.List<String>> solveNQueens(int n) {
        java.util.List<java.util.List<String>> res = new java.util.ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) java.util.Arrays.fill(row, '.');

        Set<Integer> cols = new HashSet<>();
        Set<Integer> d1 = new HashSet<>();
        Set<Integer> d2 = new HashSet<>();

        backtrack(0);
        return res;

        void backtrack(int r) {
            if (r == n) {
                java.util.List<String> copy = new java.util.ArrayList<>();
                for (char[] row : board) copy.add(new String(row));
                res.add(copy);
                return;
            }
            for (int c = 0; c < n; c++) {
                if (cols.contains(c) || d1.contains(r-c) || d2.contains(r+c)) continue;
                board[r][c]='Q';
                cols.add(c); d1.add(r-c); d2.add(r+c);
                backtrack(r+1);
                board[r][c]='.';
                cols.remove(c); d1.remove(r-c); d2.remove(r+c);
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(solveNQueens(4).size());
    }
}
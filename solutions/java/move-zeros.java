import java.util.*;

public class MoveZeros {
    public static int[] moveZeros(int[] arr) {
        int[] result = new int[arr.length];
        int idx = 0;
        for (int n : arr) if (n != 0) result[idx++] = n;
        return result;
    }
    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(moveZeros(new int[]{0,1,0,3,12})));
    }
}
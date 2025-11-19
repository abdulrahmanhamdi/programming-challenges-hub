public class FindMaximum {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int n : arr) if (n > max) max = n;
        return max;
    }
    public static void main(String[] args) {
        System.out.println(findMax(new int[]{1,5,3}));
    }
}
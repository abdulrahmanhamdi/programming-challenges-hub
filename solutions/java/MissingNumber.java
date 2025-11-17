public class MissingNumber {
    public static int missingNumber(int[] nums) {
        int n = nums.length;
        int expected = n*(n+1)/2;
        int sum = 0;
        for (int x : nums) sum += x;
        return expected - sum;
    }
    public static void main(String[] args) {
        System.out.println(missingNumber(new int[]{3,0,1}));
    }
}
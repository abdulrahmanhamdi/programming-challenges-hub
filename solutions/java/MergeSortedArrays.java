import java.util.*;

public class MergeSortedArrays {
    public static int[] mergeSorted(int[] a, int[] b) {
        int i=0, j=0;
        int[] result = new int[a.length + b.length];
        int k = 0;
        while (i<a.length && j<b.length) {
            if (a[i] < b[j]) result[k++] = a[i++];
            else result[k++] = b[j++];
        }
        while (i<a.length) result[k++] = a[i++];
        while (j<b.length) result[k++] = b[j++];
        return result;
    }
    public static void main(String[] args) {
        int[] r = mergeSorted(new int[]{1,3,5}, new int[]{2,4,6});
        System.out.println(java.util.Arrays.toString(r));
    }
}
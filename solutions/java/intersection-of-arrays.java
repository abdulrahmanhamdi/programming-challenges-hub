import java.util.*;

public class IntersectionOfArrays {
    public static int[] intersect(int[] a, int[] b) {
        Map<Integer,Integer> freq = new HashMap<>();
        java.util.List<Integer> result = new java.util.ArrayList<>();
        for (int x : a) freq.put(x, freq.getOrDefault(x,0)+1);
        for (int x : b) {
            if (freq.getOrDefault(x,0) > 0) {
                result.add(x);
                freq.put(x, freq.get(x)-1);
            }
        }
        return result.stream().mapToInt(i->i).toArray();
    }
    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(intersect(new int[]{1,2,2,1}, new int[]{2,2})));
    }
}
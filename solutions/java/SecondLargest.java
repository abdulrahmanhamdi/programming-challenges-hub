import java.util.*;

public class SecondLargest {
    public static int secondLargest(int[] arr) {
        Set<Integer> set = new HashSet<>();
        for (int n : arr) set.add(n);
        java.util.List<Integer> list = new java.util.ArrayList<>(set);
        java.util.Collections.sort(list);
        return list.get(list.size()-2);
    }
    public static void main(String[] args) {
        System.out.println(secondLargest(new int[]{10,20,4,45,99}));
    }
}
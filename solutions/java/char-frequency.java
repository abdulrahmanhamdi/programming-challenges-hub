import java.util.*;

public class CharFrequency {
    public static Map<Character,Integer> charFrequency(String s) {
        Map<Character,Integer> freq = new HashMap<>();
        for (char ch : s.toCharArray()) freq.put(ch, freq.getOrDefault(ch,0)+1);
        return freq;
    }
    public static void main(String[] args) {
        System.out.println(charFrequency("banana"));
    }
}
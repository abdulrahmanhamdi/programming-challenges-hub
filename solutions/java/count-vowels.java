public class CountVowels {
    public static int countVowels(String s) {
        String vowels = "aeiouAEIOU";
        int count = 0;
        for (char c : s.toCharArray()) {
            if (vowels.indexOf(c) != -1) count++;
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println(countVowels("apple"));
    }
}
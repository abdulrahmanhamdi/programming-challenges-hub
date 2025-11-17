public class PalindromeCheck {
    public static boolean isPalindrome(String s) {
        return s.equals(new StringBuilder(s).reverse().toString());
    }
    public static void main(String[] args) {
        System.out.println(isPalindrome("level"));
    }
}
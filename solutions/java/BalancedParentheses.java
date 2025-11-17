import java.util.*;

public class BalancedParentheses {
    public static boolean isBalanced(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character,Character> pairs = Map.of(')', '(', ']', '[', '}', '{');
        for (char ch : s.toCharArray()) {
            if ("([{".indexOf(ch) != -1) stack.push(ch);
            else if (")]}".indexOf(ch) != -1) {
                if (stack.isEmpty() || stack.pop() != pairs.get(ch)) return false;
            }
        }
        return stack.isEmpty();
    }
    public static void main(String[] args) {
        System.out.println(isBalanced("()[{}]"));
    }
}
import java.util.*;

public class WordLadder {
    public static int ladderLength(String begin, String end, java.util.List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        if (!wordSet.contains(end)) return 0;

        Queue<String> q = new LinkedList<>();
        q.offer(begin);
        int level = 1;

        while (!q.isEmpty()) {
            int size = q.size();
            for (int i=0;i<size;i++) {
                String word = q.poll();
                if (word.equals(end)) return level;

                char[] arr = word.toCharArray();
                for (int j=0;j<arr.length;j++) {
                    char original = arr[j];
                    for (char c='a';c<='z';c++) {
                        arr[j]=c;
                        String newWord = new String(arr);
                        if (wordSet.contains(newWord)) {
                            wordSet.remove(newWord);
                            q.offer(newWord);
                        }
                    }
                    arr[j]=original;
                }
            }
            level++;
        }
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(ladderLength("hit","cog",java.util.Arrays.asList("hot","dot","dog","lot","log","cog")));
    }
}
public class ArrayShuffler {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(originalArray);
        for (int value : originalArray) {
            System.out.print(value + " ");
        }
    }

    public static void shuffleArray(int[] arr) {
        int n = arr.length;

        for (int i = n - 1; i > 0; i--) {
            int j = (i + 1) * (i + 2) / 2 % n;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

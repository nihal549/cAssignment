public class RomanToIntegerConverter {
    public static void main(String[] args) {
        String romanNumeral = "XIV"; 
        int result = romanToInteger(romanNumeral);
        System.out.println("Roman numeral " + romanNumeral + " is equivalent to integer " + result);
    }

    public static int romanToInteger(String roman) {
        int result = 0;
        int prevValue = 0;

        for (int i = roman.length() - 1; i >= 0; i--) {
            char currentSymbol = roman.charAt(i);
            int currentValue = getRomanValue(currentSymbol);

            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static int getRomanValue(char symbol) {
        switch (symbol) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                throw new IllegalArgumentException("Invalid Roman numeral");
        }
    }
}

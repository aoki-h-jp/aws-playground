public class Sample2_4 {
    public static void main(String[] args){
        int num1 = 10;
        num1 = 20;
        final int num2 = 10;
        // これはエラーになる
        // num2 = 20;
    }
}

class Sample3_5 {
    public static void main(String[] args){
        int a = 10; int b = 10; int c = 10; int d = 10;
        boolean result1 = a++ > 10 & ++b > 10;
        System.out.println(result1);
        boolean result2 = c++ > 10 && ++d > 10;
        System.out.println(result2);
    }
}
import java.security.AlgorithmConstraints;

class Sample3_3{
    public static void main(String[] args){
        int a = 10; int b = 10; int c = 10; int d = 10;
        System.out.println(a++);
        System.out.println(++b);
        System.out.println(c--);
        System.out.println(--d);

        a = 10; b = 10; c = 10; d = 10;
        b = ++a;
        System.out.println(a+b);
        d = c++;
        System.out.println(c+d);
    }
}
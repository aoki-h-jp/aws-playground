public class Sample2_7 {
   public static void main(String[] args){
    int a = 10;
    // プリミティブな値はdeepcopyされる
    int b = a;
    System.out.println(a + b);
    b = 50;
    System.out.println(a + b);
   } 
}

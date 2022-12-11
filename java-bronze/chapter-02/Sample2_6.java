public class Sample2_6 {
    public static void main(String[] args){
        int i;
        // 初期化されていないのでエラーになる
        // System.out.println(i);
        int[] array = new int[1];
        // これは勝手に初期化されるのでエラーにはならない
        System.out.println(array[0]);
    }
}

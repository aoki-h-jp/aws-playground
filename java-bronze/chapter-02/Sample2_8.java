class Sample2_8 {
    public static void main(String[] args){
        int[] a = new int[1];
        // 配列のコピーはshallowcopyになる
        int[] b = a;
        a[0] = 10;
        System.out.println(a[0] + b[0]);
        b[0] = 50;
        System.out.println(a[0] + b[0]);
    }
}
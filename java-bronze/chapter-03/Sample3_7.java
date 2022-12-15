class Sample3_7 {
    public static void main(String[] args){
        int num = 5;
        if (num < 10) {
            System.out.println("num < 10");
        }
        num = 20;
        // カッコなしの場合は処理文は1行だけ
        if (num >= 100)
            System.out.println("num < 100");
        System.out.println("outside");
    }
}
class Super3 {
    public Super3() {
        System.out.println("Super()");
    }
    public Super3(int a) {
        System.out.println("Super(int a)");
    }
}

class Sub3 extends Super3 {
    public Sub3() {
        System.out.println("Sub()");
    }
    public Sub3(int a) {
        System.out.println("Sub(int a)");
    }
}

class Sample7_6 {
    public static void main(String[] args) {
        // コンストラクタはsuper→subの順に読み込まれる
        Sub3 s1 = new Sub3();
        // こう書いてもSuper(int a)が呼ばれるわけではない、明示的にしないといけない
        Sub3 s2 = new Sub3(10);
    }
}
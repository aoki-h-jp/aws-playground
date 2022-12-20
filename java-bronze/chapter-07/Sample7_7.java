class Super4 {
    public Super4() {
        System.out.println("Super()");
    }
    public Super4(int a) {
        System.out.println("Super(int a)");
    }
}

class Sub4 extends Super4 {
    public Sub4() {
        System.out.println("Sub()");
    }
    public Sub4(int a) {
        super(a);
        System.out.println("Sub(int a)");
    }
}

class Sample7_7 {
    public static void main(String[] args) {
        Sub4 s1 = new Sub4();
        Sub4 s2 = new Sub4(10);
    }
}
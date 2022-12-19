class Test3 {
    int instanceVal = 100;
    static int staticVal = 200;
    void methodA() {
        System.out.println(instanceVal);
    }
    static void methodB() {
        System.out.println(staticVal);
    }
}

class Sample6_6 {
    public static void main(String[] args){
        // インスタンス化しないと参照できない
        // System.out.println(Test3.instanceVal);
        System.out.println(Test3.staticVal);
        // Test3.methodA();
        Test3.methodB();

        System.out.println("---------------------------");
        Test3 t = new Test3();
        System.out.println(t.instanceVal);
        System.out.println(t.staticVal);
        t.methodA();
        t.methodB();
    }
}
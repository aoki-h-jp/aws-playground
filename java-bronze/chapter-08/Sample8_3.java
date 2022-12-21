interface MyInterface {
    // 全部暗黙的にpublic static finalになる
    int b = 10;
    final int c = 20;
    public int d = 30;
    static int e = 40;
    public final int f = 50;
    
    // 全部暗黙的にpublic abstractになる
    public abstract void methodA();
    abstract void methodB();
    void methodC();
}

class MyClass implements MyInterface {
    public void methodA(){}
    public void methodB(){}
    public void methodC(){}
}

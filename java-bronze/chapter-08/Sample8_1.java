abstract class Super {
    protected abstract void methodA();
    public void methodB(){}
}

class Sub extends Super {
    // abstract classのabstract methodは具象methodの実装の際必ず書く
    protected void methodA(){}
    // これはあってもなくてもいい
    public void methodB(){}
}
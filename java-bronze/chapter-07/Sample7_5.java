class Super2 {
    int num;
    public void methodA() {
        num += 100;
    }
    public void print() {
        System.out.println(num);
    }
}

class Sub2 extends Super2 {
    public void methodA() {
        num += 500;
    }
    public void methodB() {
        methodA();
        print();
        super.methodA();
        print();
    }
}

class Sample7_5 {
    public static void main(String[] args){
        Sub2 s = new Sub2();
        s.methodB();
    }
}
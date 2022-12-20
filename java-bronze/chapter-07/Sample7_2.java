class Super {
    public void print(String s) {
        System.out.println(s);
    }
    public void method(){}
}

class Sub extends Super {
    public void print(String s) {
        System.out.println("Sub"+s);
    }
}

class Sample7_2 {
    public static void main(String[] args) {
        Super s1 = new Super();
        Sub s2 = new Sub();
        s1.print("Java");
        s2.print("Java");
    }
}
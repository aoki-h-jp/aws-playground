class Sample8_5 {
    public static void main(String[] args){
        double a = 10.5;
        // cには10が代入される(切り捨て?)
        int c = (int)a;
        System.out.println(c);
        foo((short)c);
    }
    static void foo(short d){
        System.out.println(d);
    }
}
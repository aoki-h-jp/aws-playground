class Employee2 {
    int id;
    String name;
    // コンストラクタもオーバーロードできる
    Employee2() {
        System.out.println("Employee2");
    }
    Employee2(String name) {
        System.out.println("Employee2(String name)");
    }
    Employee2(int id) {
        System.out.println("Employee2(int id)");
    }
    Employee2(int id, String name) {
        System.out.println("Employee2(int id, String name)");
    }
}

class Sample6_5 {
    public static void main(String[] args){
        Employee2 a = new Employee2();
        Employee2 b = new Employee2("yamamoto");
        Employee2 c = new Employee2(100);
        Employee2 d = new Employee2(100, "yamamoto");
    }
}
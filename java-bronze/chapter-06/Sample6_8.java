class Employee3 {
    private int id;
    public Employee3(int i) {
        id = i;
    }
    public int getId() {
        return id;
    }
}

public class Sample6_8 {
    public static void main(String[] args) {
        Employee3 emp = new Employee3(100);
        // privateな変数はインスタンス化しても参照できない
        // System.out.println(emp.id);
        System.out.println(emp.getId());
    }
}
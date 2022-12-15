class Sample3_11 {
    public static void main(String[] args){
        int a = 10;
        if (a > 0) {
            System.out.println("a>0");
            if (a % 2 == 0) {
                System.out.println("a%2=0");
            }
        } else {
            if (a == 0){
                System.out.println("a=0");
            } else {
                System.out.println("a<0");
            }
        } 
    }
}
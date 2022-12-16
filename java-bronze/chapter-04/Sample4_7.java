class Sample4_7 {
    public static void main(String[] args){
        char[] array = {'a', 'b', 'c', 'd', 'e'};

        for (char c: array) {
            System.out.println(c+"");
        }
        System.out.println();
        for (int count = 0; count < array.length; count++){
            System.out.println(array[count]+"");
        }
    }
}
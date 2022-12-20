class SuperA {}

final class SuperB {}

class SuperC {
    void print(){}
}

class SuperD {
    final void print(){}
}

class SubA extends SuperA {}
// SuperBはfinalなので継承できない
// class SubB extends SuperB {}
class SubC extends SuperC {}
// SuperDの中身にfinalがあるので継承できない
// class SubD extends SuperD {}
class Person {
    #firstname;
    #lastname = "独習";
    #age;

    constructor (firstname) {
        this.#firstname = firstname;
    }

    get fullname () {
        return this.#lastname + this.#firstname;
    }

    set age (value) {
        this.#age = Number(value);
    }

    get age() {
        return this.#age;
    }
}

const taro = new Person("太郎");
taro.age = 18;
console.log(taro.age);
console.log(taro.fullname);
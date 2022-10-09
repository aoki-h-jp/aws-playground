class Person {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    set gender (sex) {
        if (sex == "男" || sex == "女" || sex == "トランスジェンダー") {
            this._gender = sex
        } else {
            throw "genderプロパティには男、女またはトランスジェンダーを設定してください。"
        }
    }

    get gender () {
        return this._gender
    }
}


const taro = new Person('a', 'b');
taro.gender = '男';
console.log(taro._gender);
console.log(taro);
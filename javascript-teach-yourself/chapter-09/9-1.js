class User {
    constructor (username, password, roll) {
        this.username = username;
        this.password = password;
        this.roll = roll;
    }

    login () {
        this.check();
        console.log(`ログイン [${this.username} / ${this.password}]`);
    }

    check () {
        console.log(`ログイン情報をチェックします。`);
    }

    checkRoll () {
        if (this.roll == 'admin') {
            console.log('管理者権限です。');
        } else {
            console.log('一般ユーザーです。')
        }
    }
}

const taro = new User("独習太郎", "taro-pwd", "admin");
taro.login();
taro.checkRoll();
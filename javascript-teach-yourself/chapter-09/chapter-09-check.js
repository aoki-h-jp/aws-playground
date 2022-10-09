class User {
    constructor (username) {
        this.username = username;
        this.deleted = 0;
    }

    login () {
        if (this.deleted == 0) {
            console.log(`${this.username}はログインに成功しました。`);
        } else {
            console.log(`${this.username}はログインに失敗しました。`);
        }
    }
}

class AdminUser extends User {
    constructor (username) {
        super(username);
    }

    // 引数のuserの単語はなんでもいい (今はUserが入る前提なのでuser.deletedが存在する前提で書けばいい)
    // userをunkoにしても動く
    deleteUser (unko) {
        if (!(unko instanceof User)) {
            throw new Error('unkoオブジェクトを引数にする必要があります。');
        }
        unko.deleted = 1;
        console.log(`${unko.username}を削除しました。`);
    }
}

const a = new User('a');
const b = new AdminUser('b');
b.deleteUser(a);
a.login();
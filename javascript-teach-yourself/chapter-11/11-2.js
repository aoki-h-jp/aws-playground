const todos = [
    {title: "晩御飯", priority: 2, completed: false},
    {title: "ゴミ出し", priority: 1, completed: true},
    {title: "食材の買い出し", priority: 3, completed: false},
    {title: "洗濯", priority: 2, completed: true},
    {title: "録画の視聴", priority: 1, completed: false},
]

let notCompleted = new Array();

todos.forEach(msg => {
    if (msg.completed == true) {
        console.log(`${msg.title}は完了!`);
    } else {
        console.log(`${msg.title}をやらないと!`);
        notCompleted.push(msg);
    }
});

notCompleted.sort((msg, msg2) => {
    return msg2.priority - msg.priority;
});
console.log(notCompleted);

function printTodo (todos) {
    todos.forEach(msg => {
        if (msg.completed == true) {
            console.log(`${msg.title}は完了!`);
        } else {
            console.log(`${msg.title}をやらないと!`);
            notCompleted.push(msg);
        }
    });
}

printTodo(notCompleted);
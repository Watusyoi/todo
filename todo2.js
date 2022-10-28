const form = document.getElementById("form");
const input = document.getElementById("todo-btn-add");
const ul = document.getElementById("ul");
const btn = document.getElementById("btn");
const todos = JSON.parse(localStorage.getItem("todos"));


if (todos){
    todos.forEach(todo => {
        add(todo);
    });
};
//リストに追加するよ　submitエンターキー
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(input.value);
    add();
});
//リストに追加するよパート2　click左クリックした時
btn.addEventListener("click", function(event){
    event.preventDefault();
    console.log(input.value);
    add();
});

// リストについての実行内容追加、削除、編集など
function add(todo) {
    //分岐　なにも入力されないとき何もしない
    let todoText = input.value;
    if(todo){
        todoText = todo;
    }
    //分岐　入力されたら以下を実行します
    if(todoText.length > 0){
        //リストを作る
        //削除ボタンを作る
        //チェックボックスをつくらないといけない
        const li = document.createElement("li");
        const button = document.createElement('button');
        button.textContent="Delete";
        button.type ="button";
        button.classList.add("btn2");

        li.innerText = todoText;
        li.classList.add("list-group-item");

        
        //追加するもの
        ul.appendChild(button);
        ul.appendChild(li);
        input.value = "";
        saveData();

        //削除ボタンを左クリックしたら削除 ボタンとリスト
        button.addEventListener("click", function(event){
            button.remove();
            li.remove();
            saveData();
        });
        //リストを左クリックしたら斜線を引く
        li.addEventListener("click", function(){
            li.classList.toggle("text-decoration-line-through");
        });
    }
}
//リロードしたときに保存されるようにする
function saveData(){
    const lists = document.querySelectorAll("li");
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
};
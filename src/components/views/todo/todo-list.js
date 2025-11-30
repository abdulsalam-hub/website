var tododata = document.querySelector("input");
var btn = document.querySelector("button");
var todores = document.querySelector('ul');



btn.addEventListener('click', () => {
    if (tododata.value === Number) {
        todolist.innerHTML = tododata.value.toString().trim().split("").join("-");
    }
    if (tododata.value === "") {
        tododata.style.border = "5px red solid";
        alert('TODO not Added!!!');
        todolist.value === "";
    }

    var todolist = document.createElement('li');
    var delet = document.createElement('button');


    todores.append(todolist);
    todolist.innerHTML = tododata.value;
    todolist.appendChild(delet);
    delet.innerText = "delete ";
    delet.classList.add('del')
    delet.addEventListener('click', () => {
        todolist.remove()
    })

})
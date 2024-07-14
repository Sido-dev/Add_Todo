// let todoList = [];

let todoList = [{
    name: 'Welcome to Sudhanshu Todo List feel Free to add whatever you like. ',
    Duedate: '2030-12-31'
}];


const storedTodoList = localStorage.getItem("todoList");
if (storedTodoList) {
  todoList = JSON.parse(storedTodoList);
}

function Addtodo() {
  const inputElement = document.querySelector(".NameInput");
  let name = inputElement.value;
  const DateElement = document.querySelector(".DateInput");
  let Duedate = DateElement.value;

  todoList.push({ name, Duedate });
  console.log(todoList);
  inputElement.value = "";
  DateElement.value = "";
  renderTodoList();
  saveToStorage(); 
}

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, Duedate } = todoObject;
    let html = `Sr No.${Number(i + 1)}<div>${name}</div><div>${Duedate}</div><button onclick="deleteTodo(${i})" class="DeleteItem">Delete</button>`;
    todoListHTML += html;
  }
  document.querySelector(".container").innerHTML = todoListHTML;
  saveToStorage(); 
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
  saveToStorage(); 
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

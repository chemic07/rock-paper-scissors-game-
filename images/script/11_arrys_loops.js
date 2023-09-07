const todoList = ["watch movie", "wash dishes"];
let todoListHTML = ""; // Define todoListHTML here

renderTodoList();

function renderTodoList() {
  todoListHTML = ""; // Reset todoListHTML before re-rendering

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}

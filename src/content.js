const contentContainer=document.createElement("div");
contentContainer.className="contentContainer";

let todoFragment=document.createDocumentFragment();

const contentHeader=document.createElement("h2");
contentHeader.className="contentHeader";
contentHeader.textContent="Inbox";
todoFragment.appendChild(contentHeader);

const todoContainer=document.createElement("div");
todoContainer.className="todoContainer";

let objectsFragment=document.createDocumentFragment();
//create elements here with a function maybe
const testTodo=document.createElement("div");
testTodo.className="todo";

const todoText=document.createElement("div");
todoText.className="todoText";
todoText.textContent="complete this project.";
testTodo.appendChild(todoText);

const todoCommands=document.createElement("div");
todoCommands.textContent="delete etc...";   //date, complete, delete at least
testTodo.appendChild(todoCommands);

objectsFragment.appendChild(testTodo);

const newTodo=document.createElement("div");
newTodo.className="todo";
newTodo.id="newTodo";
newTodo.textContent="Add a new todo";
newTodo.addEventListener("click", ()=>todoForm.hidden=false);
objectsFragment.appendChild(newTodo);

const todoForm=document.createElement("form");  //put on another file that both files can use
todoForm.className="todoForm";
todoForm.id="newTodoForm";
todoForm.hidden=true;

const newText=document.createElement("input");
newText.className="newTodoText";
newText.type="text";
todoForm.appendChild(newText);

const buttonContainer=document.createElement("div");
buttonContainer.className="buttonContainer";
const addButton=document.createElement("button");
addButton.className="todoButtons";
addButton.id="add";
addButton.textContent="Create";
//addButton.addEventListener...
buttonContainer.appendChild(addButton);

const cancelButton=document.createElement("button");
cancelButton.className="todoButtons";
cancelButton.id="cancel";
cancelButton.textContent="Cancel";
//cancelButton.addEventListener...
buttonContainer.appendChild(cancelButton);

todoForm.appendChild(buttonContainer);
objectsFragment.appendChild(todoForm);

todoContainer.appendChild(objectsFragment);

todoFragment.appendChild(todoContainer);
contentContainer.appendChild(todoFragment);


//add maybe a default index page where to create todos and then distribuite according to date
export const content=contentContainer;
import { openForm } from "./functions";
import { closeForm } from "./functions";
/*import { createTodo } from "./functions";
import { renderTodo } from "./functions";*/
import { createAction } from "./functions";
import { init } from "./functions"

const contentContainer=document.createElement("div");
contentContainer.className="contentContainer";

let todoFragment=document.createDocumentFragment();

const contentHeader=document.createElement("h2");
contentHeader.className="contentHeader";
contentHeader.textContent="Inbox";
todoFragment.appendChild(contentHeader);

const todoContainer=document.createElement("div");
todoContainer.className="todoContainer";
//test second container, works
const renderedTodos=document.createElement("div");
renderedTodos.className="renderedTodos";
todoContainer.appendChild(renderedTodos);

init(renderedTodos);    //container initalization

let objectsFragment=document.createDocumentFragment();
//create elements here with a function maybe
/*const testTodo=document.createElement("div");
testTodo.className="todo";

const todoText=document.createElement("div");
todoText.className="todoText";
todoText.textContent="complete this project.";
testTodo.appendChild(todoText);

const todoCommands=document.createElement("div");
todoCommands.textContent="delete etc...";   //date, complete, delete at least
testTodo.appendChild(todoCommands);

objectsFragment.appendChild(testTodo);*/

const todoForm=document.createElement("form");
todoForm.className="todoForm";
todoForm.id="newTodoForm";
todoForm.hidden=true;
todoForm.onkeydown = (e)=>{
    if(e.keyCode == 13){
        e.preventDefault();
        //createAction(newText.value, todoForm, renderedTodos);
        createAction(newText.value, todoForm);
    }
    if(e.keyCode == 27){
        todoForm.reset();
        closeForm(todoForm);
    }
};

const newText=document.createElement("input");
newText.className="newTodoText";
newText.type="text";
todoForm.appendChild(newText);

const buttonContainer=document.createElement("div");
buttonContainer.className="buttonContainer";
const addButton=document.createElement("button");
addButton.className="todoButtons";
addButton.id="add";
addButton.type="button";
addButton.textContent="Create";
//addButton.addEventListener("click", ()=>createAction(newText.value, todoForm, renderedTodos));  //change
addButton.addEventListener("click", ()=>createAction(newText.value, todoForm));
buttonContainer.appendChild(addButton);

const cancelButton=document.createElement("button");
cancelButton.className="todoButtons";
cancelButton.id="cancel";
cancelButton.type="reset";
cancelButton.textContent="Cancel";
cancelButton.addEventListener("click", ()=>closeForm(todoForm));
buttonContainer.appendChild(cancelButton);

todoForm.appendChild(buttonContainer);

const newTodo=document.createElement("div");
newTodo.className="todo";
newTodo.id="newTodo";
newTodo.textContent="Add a new todo";
newTodo.addEventListener("click", ()=>openForm(todoForm));   //TESTING, this works
objectsFragment.appendChild(newTodo);

objectsFragment.appendChild(todoForm);

todoContainer.appendChild(objectsFragment);

todoFragment.appendChild(todoContainer);
contentContainer.appendChild(todoFragment);


//add maybe a default index page where to create todos and then distribuite according to date
export const content=contentContainer;
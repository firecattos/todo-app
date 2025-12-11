const todos=[];

class Todo{
    //constructor(title, description, dueDate, priority, id){
    constructor(title){
        this.title=title;
        /*this.description=description;
        this.dueDate=dueDate;   //for now avoid date module due to npm breach
        this.priority=priority;
        this.id=id;   */
    }
}

export function openForm(form){
    form.hidden=false;
}

export function closeForm(form){
    form.hidden=true;
}

export function createTodo(desc){  //dataset for id
    todos.push(new Todo(desc));
    //console.log("todos: "+todos[0].title);
}

export function renderTodo(){
    console.table(todos);
    const renderFragment=document.createDocumentFragment();
    todos.forEach((elem)=>{
        const todoDiv=document.createElement("div");
        todoDiv.className="todo";

        const todoText = document.createElement("div");
        todoText.className="todoText";
        todoText.textContent=elem.title;

        todoDiv.appendChild(todoText);

        const todoCommands=document.createElement("div");
        todoCommands.textContent="delete etc...";   //date, complete, delete at least
        todoDiv.appendChild(todoCommands);

        renderFragment.appendChild(todoDiv);
    });

    //appendTodo(todoDiv);
    return(renderFragment);
}

export function createAction(content, form, renderElement){
    createTodo(content);
    //console.log("newText value: "+newText.value);
    console.log("newText value: "+content);
    form.reset();
    closeForm(form);
    //todoContainer.appendChild(renderTodo());    //clean area before
    renderElement.innerHTML="";
    renderElement.appendChild(renderTodo());    //clean area before
}

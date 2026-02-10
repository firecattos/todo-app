class Todo{
    //constructor(title, description, dueDate, priority, id){
    constructor(title, id){
        this.title=title;
        /*this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;*/
        this.id=id;     //uuid dataset
        //this.done=done ? done:false;
        this.done=false;
    }
}

class TodoList{
    constructor(){
        this.todos=[];
    }

    addTodo(title){
        this.todos.push(new Todo(title, crypto.randomUUID()));  //generate inside Todo?
    }

    getTodos(){
        //return this.todos;
        return [...this.todos];
    }

    removeTodos(id){
        this.todos = this.todos.filter((todo)=> todo.id!=id);
    }
}

const todoList=new TodoList();

let rerender;   //replace old rerendering logic with this

export function init(container){
    rerender=createRenderer(container);
    rerender();

    container.addEventListener("click", (e)=>{  //works
        const delTod=e.target.closest(".deleteTodo");
        if(delTod){
            const todoId=delTod.closest(".todo").dataset.id;
            todoList.removeTodos(todoId);
            rerender();
            return;
        }
    });
}

function createRenderer(container){
    return ()=>{
        container.innerHTML="";
        container.appendChild(renderTodo(todoList.getTodos()));
    };
}

export function openForm(form){
    form.hidden=false;
}

export function closeForm(form){
    form.hidden=true;
}

export function renderTodo(/*renderElement*/){   //change
    const tempTodos=todoList.getTodos();
    console.table(tempTodos);
    const renderFragment=document.createDocumentFragment();
    tempTodos.forEach((elem)=>{
        const todoDiv=document.createElement("div");
        todoDiv.className="todo";
        todoDiv.dataset.id=elem.id; //remove after testing

        const todoTextContainer=document.createElement("div");
        todoTextContainer.className="todoTextContainer";

        const todoStatus=document.createElement("input");
        todoStatus.className="todoStatus";
        todoStatus.type="checkbox";
        todoStatus.addEventListener("click", ()=>{
            toggleStatus(elem.id);
            //renderingArea(renderElement);
            rerender();
        });
        todoTextContainer.appendChild(todoStatus);
        //todoDiv.appendChild(todoStatus);

        //if(elem.done) todoTextContainer.className+=" completed";
        if(elem.done){
            todoDiv.className+=" completed";
            todoStatus.checked=true;
        }

        const todoText = document.createElement("div");
        todoText.className="todoText";
        todoText.textContent=elem.title;
        todoTextContainer.appendChild(todoText);
        //todoDiv.appendChild(todoText);
        todoDiv.appendChild(todoTextContainer); //this works with right styling, but better switch to grid? NO

        const todoCommands=document.createElement("div");
        todoCommands.className="todoCommands";
        //todoCommands.textContent="delete etc...";   //date, complete, delete at least
        //complete before todo content, maybe priority? and a popup to modify if that's the case
        const dateSelector=document.createElement("p"); //date type for input (active???), div for output
        dateSelector.className="dateSelector";
        dateSelector.textContent="No date";
        todoCommands.appendChild(dateSelector);

        const deleteButton=document.createElement("p");
        deleteButton.className="deleteTodo";
        deleteButton.textContent="Del"; //use array splice? no
        /*deleteButton.addEventListener("click", ()=>{
            todoList.removeTodos(elem.id);
            //renderingArea(renderElement);
            rerender();
        });*/
        todoCommands.appendChild(deleteButton);

        
        todoDiv.appendChild(todoCommands);

        renderFragment.appendChild(todoDiv);
    });

    //appendTodo(todoDiv);
    return(renderFragment);
}

//refresh closures, it seems I've used them without actively remembering 

//https://blog.jeremyquinto.com/guide-to-dates-in-javascript-plus-making-it-easier-with-date-fns

function toggleStatus(id){
    //console.log("inside toggle function");
    const elem=todoList.getTodos().find((todo)=>todo.id===id);
    switch(elem.done){
        case true:
            elem.done=false;
            break;
        
        case false:
            elem.done=true;
            break;
    }
}

/*function renderingArea(renderElement){  //look into event delegation instead of render everything again
    renderElement.innerHTML="";
    renderElement.appendChild(renderTodo(renderElement));
}*/

export function createAction(content, form, renderElement){
    if(content===""){
        console.log("empty detected");
        return;
    }
    if(content[0]===" "){   //content.trim()???
        if(content.length>1){
            switch(content[1]){
                case "":
                    console.log("space detected");
                    return;
                case " ":
                    console.log("space detected");
                    return;
                default: 
                    break;
            }
        }
        else{
            console.log("space detected");
            return;
        }
    }
    //createTodo(content);
    todoList.addTodo(content);
    //console.log("newText value: "+newText.value);
    console.log("newText value: "+content);
    form.reset();
    closeForm(form);
    //todoContainer.appendChild(renderTodo());    //clean area before
    /*renderElement.innerHTML="";
    renderElement.appendChild(renderTodo(renderElement));*/    //clean area before; pass renderElement?
    //renderingArea(renderElement);
    rerender();
}

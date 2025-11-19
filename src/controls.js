const controlPanel=document.createElement("div");
controlPanel.className="controlPanel";

const userPanel=document.createElement("div");
userPanel.className="userPanel";
userPanel.textContent="Sign in";
//username, notifications etc
controlPanel.appendChild(userPanel);

const todoControls=document.createElement("div");
todoControls.className="todoControls";

const controlFragment=document.createDocumentFragment();

const newTodo=document.createElement("div");
newTodo.className="newTodo";
newTodo.textContent="Add task";
//newTodo.addEventListener("click", ()=> console.log("event listener testing.")); //works fine
//event delegation
controlFragment.appendChild(newTodo);

const inboxSelector=document.createElement("div");
inboxSelector.className="inboxSelector";
inboxSelector.textContent="Inbox"
controlFragment.appendChild(inboxSelector);

const todaySelector=document.createElement("div");
todaySelector.className="dateSelector";
todaySelector.id="today";
todaySelector.textContent="Today";
controlFragment.appendChild(todaySelector);

const dateSelector=document.createElement("div");
dateSelector.className="dateSelector";
dateSelector.id="custom";
dateSelector.textContent="Select date";
controlFragment.appendChild(dateSelector);
todoControls.appendChild(controlFragment);

const todoProjects=document.createElement("div");
todoProjects.className="projectControls";

controlPanel.appendChild(todoControls);

const projectPanel=document.createElement("div");
projectPanel.className="projectPanel";

const projectFragment=document.createDocumentFragment();
//look into toggler behavior for new projects maybe
const projectsHeader=document.createElement("h3");
projectsHeader.className="projectsHeader";
projectsHeader.textContent="Projects";
projectFragment.appendChild(projectsHeader);

const newProject=document.createElement("div");
newProject.className="newProject";
newProject.textContent="Add project";
newProject.addEventListener("click", ()=>projectForm.hidden=false);
projectFragment.appendChild(newProject);

const projectForm=document.createElement("form");
projectForm.className="projectForm";
projectForm.id="newProjectForm";
projectForm.hidden=true;

const newText=document.createElement("input");
newText.className="newProjectText";
newText.type="text";
projectForm.appendChild(newText);

const buttonContainer=document.createElement("div");
buttonContainer.className="buttonContainer";
const addButton=document.createElement("button");
addButton.className="projectButtons";
addButton.id="add";
addButton.textContent="Create";
//addButton.addEventListener...
buttonContainer.appendChild(addButton);

const cancelButton=document.createElement("button");
cancelButton.className="projectButtons";
cancelButton.id="cancel";
cancelButton.textContent="Cancel";
//cancelButton.addEventListener...
buttonContainer.appendChild(cancelButton);

projectForm.appendChild(buttonContainer);
projectFragment.appendChild(projectForm);

projectPanel.appendChild(projectFragment);
controlPanel.appendChild(projectPanel);

export const controls=controlPanel;
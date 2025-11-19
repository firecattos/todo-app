import "./style.css";
import {controls} from "./controls.js"
import {content} from "./content.js";

const controlsDiv=document.querySelector(".controls");
const contentDiv=document.querySelector(".content");

//test
controlsDiv.innerHTML="";
controlsDiv.appendChild(controls);

contentDiv.innerHTML="";
contentDiv.appendChild(content);
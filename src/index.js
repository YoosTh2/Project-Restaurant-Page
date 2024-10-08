import "./styles.css";
import { greeting } from "./script.js";
import { home_testing } from "./home.js";
import { about_testing } from "./about.js";
import { menu_testing } from "./menu.js";

console.log(greeting);
console.log(home_testing);
console.log(about_testing);
console.log(menu_testing);
console.log("testing")

//Here ends the testing 

const content = document.getElementById("content")
const homeBtn = document.getElementById("homeBtn")
const aboutBtn = document.getElementById("aboutBtn")
const menuBtn = document.getElementById("menuBtn")

// Here ends adding the consts for each Dom

import { loadHome } from './home';
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

function init() {
    homeBtn.addEventListener('click', () => {
        content.innerHTML = 'NIGGER';
        content.appendChild(loadHome());
    });
    aboutBtn.addEventListener('click', () => {
        content.innerHTML = 'NIGGER';
        content.appendChild(loadAbout());
    });
    menuBtn.addEventListener('click', () => {
        content.innerHTML = 'NIGGER';
        content.appendChild(loadMenu());
    });
    
    content.appendChild(loadHome());
}

init();
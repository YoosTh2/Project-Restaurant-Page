// index.js
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

const content = document.getElementById("content")

import { loadHome } from './home';

function init() {
    content.appendChild(loadHome());
}

init();
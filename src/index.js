import "./styles.css";
import { loadMain } from "./loadMain.js";
import { loadMenu } from "./loadMenu.js";
import { loadAbout } from "./loadAbout.js";

document.querySelector("button:nth-child(1)")
    .addEventListener("click", loadMain);
document.querySelector("button:nth-child(2)")
    .addEventListener("click", loadMenu);
document.querySelector("button:nth-child(3)")
    .addEventListener("click", loadAbout);

loadMain();

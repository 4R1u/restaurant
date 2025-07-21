import "./styles.css";
import { loadMain } from "./loadMain.js";
import { loadMenu } from "./loadMenu.js";

document.querySelector("button:nth-child(1)")
    .addEventListener("click", loadMain);
document.querySelector("button:nth-child(2)")
    .addEventListener("click", loadMenu);

loadMain();

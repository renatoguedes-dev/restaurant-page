
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import "../styles/style.css"

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contacts = document.querySelector("#contacts");
const brandText = document.querySelector(".brand-text");

export default function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
}

home.addEventListener("click", createHome);
brandText.addEventListener("click", createHome);
menu.addEventListener("click", createMenu);
contacts.addEventListener("click", createContacts)

createHome();
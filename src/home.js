import createHeader from "./header";
import createMain from "./body";
import createFooter from "./footer";
import removeAllChildNodes from "./index";

export default function openHome() {

  const content = document.querySelector('#content');

  removeAllChildNodes(content);
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  return content;
}


 
import createHeader from "./header";
import createMain from "./body";
import createMenu from "./menu";
import createFooter from "./footer";
import openHome from "./home";


openHome();

export default function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};




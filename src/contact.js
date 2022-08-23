import createHeader from "./header";
import createFooter from "./footer";
import removeAllChildNodes from "./index";

function createContact() {
  const contact = document.createElement('main');
  contact.classList.add('contact');

  const div = document.createElement('div');
  div.classList.add('contact-us');

  const talkToUs = document.createElement('h2');
  talkToUs.textContent = "Wanna talk to us?";

  const phoneImg = document.createElement('img');
  phoneImg.src = "./images/phone-icon.png";
  phoneImg.alt = "picture of a phone";

  contact.appendChild(div);
  div.appendChild(talkToUs);
  div.appendChild(phoneImg);

  return contact;
}

export default function openContact() {
  const content = document.querySelector('#content');

  removeAllChildNodes(content);
  content.appendChild(createHeader());
  content.appendChild(createContact());
  content.appendChild(createFooter());

  return content;
}
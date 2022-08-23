import openContact from "./contact";
import openHome from "./home";
import openMenu from "./menu";

export default function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  
  header.appendChild(createBrandName());
  header.appendChild(createNav());
  
  return header;
};

function createBrandName() {
  
  const brandDiv = document.createElement('div');
  brandDiv.classList.add('brand');
  
  const brandName = document.createElement('h1');
  brandName.textContent = "Holder Coffee Shop";
  
  brandDiv.appendChild(brandName);

  return brandDiv;  
}

function createNav() {
  
  const navDiv = document.createElement('div');
  navDiv.classList.add('nav');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('button-nav');
  homeBtn.textContent = "Home";
  homeBtn.addEventListener('click', openHome);

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('button-nav');
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener('click', openMenu);

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('button-nav');
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener('click', openContact);

  navDiv.appendChild(homeBtn);
  navDiv.appendChild(menuBtn);
  navDiv.appendChild(contactBtn);

  return navDiv;
}


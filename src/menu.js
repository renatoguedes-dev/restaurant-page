
import createHeader from "./header";
import createFooter from "./footer";
import removeAllChildNodes from "./index";

function createMenu() {
  const menu = document.createElement('main');
  menu.classList.add('menu');

  const div = document.createElement('div');
  div.classList.add('menu-grid');

  const divEspresso = document.createElement('div');
  div.classList.add('espresso');
  const espressoImg = document.createElement('img');
  espressoImg.src = "./images/espresso.jpg"
  espressoImg.alt = "a delicious espresso coffee"
  const espressoPrice = document.createElement('div');
  espressoPrice.textContent = "Espresso $ 4.00"

  const divLatte = document.createElement('div');
  div.classList.add('latte');
  const latteImg = document.createElement('img');
  latteImg.src = "./images/latte.jpg"
  latteImg.alt = "a latte with a rose drawn on the top"
  const lattePrice = document.createElement('div');
  lattePrice.textContent = "Latte $ 5.00"

  const divIcedCoffee = document.createElement('div');
  div.classList.add('iced-coffee');
  const icedCoffeeImg = document.createElement('img');
  icedCoffeeImg.src = "./images/iced-coffee.jpg"
  icedCoffeeImg.alt = "iced coffee in a plastic cup"
  const icedCoffeePrice = document.createElement('div');
  icedCoffeePrice.textContent = "Iced Coffee $ 5.50"

  const divBagels = document.createElement('div');
  div.classList.add('bagels');
  const bagelsImg = document.createElement('img');
  bagelsImg.src = "./images/bagels.jpg"
  bagelsImg.alt = "bagels in a basket"
  const bagelsPrice = document.createElement('div');
  bagelsPrice.textContent = "Bagels $ 6.00"

  menu.appendChild(div);
  div.appendChild(divEspresso);
  div.appendChild(divLatte);
  div.appendChild(divIcedCoffee);
  div.appendChild(divBagels);

  divEspresso.appendChild(espressoImg);
  divEspresso.appendChild(espressoPrice);

  divLatte.appendChild(latteImg);
  divLatte.appendChild(lattePrice);

  divIcedCoffee.appendChild(icedCoffeeImg);
  divIcedCoffee.appendChild(icedCoffeePrice);

  divBagels.appendChild(bagelsImg);
  divBagels.appendChild(bagelsPrice);

  return menu
}

export default function openMenu() {
  const content = document.querySelector('#content');

  removeAllChildNodes(content);
  content.appendChild(createHeader());
  content.appendChild(createMenu());
  content.appendChild(createFooter());

  return content;
}
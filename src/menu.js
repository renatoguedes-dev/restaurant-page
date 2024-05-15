import removeAllChildNodes from "./index.js";
import pizza1 from "./assets/pizza1.png"
import pizza2 from "./assets/pizza2.png"
import pizza3 from "./assets/pizza3.png"
import shopping_cart from "./assets/shopping_cart.png"


export default function createMenu() {
    const content = document.querySelector('#content');
    removeAllChildNodes(content);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.textContent = "Menu";
    
    const menuOptions = document.createElement("div");
    menuOptions.classList.add("menu-options");

    const menuCardOne = createCardOne();
    const menuCardTwo = createCardTwo();
    const menuCardThree = createCardThree();

    // appending children
    content.appendChild(menuContainer);
    menuContainer.appendChild(menuText);
    menuContainer.appendChild(menuOptions);
    menuOptions.appendChild(menuCardOne);
    menuOptions.appendChild(menuCardTwo);
    menuOptions.appendChild(menuCardThree);


    return content;
}

function createCardOne() {

    const menuCardOne = document.createElement("div");
    menuCardOne.classList.add("menu-card");

    // menu-card one's children
    const pizzaPictureOne = document.createElement("div");
    pizzaPictureOne.classList.add("pizza-picture");

    const pizzaNameOne = document.createElement("div");
    pizzaNameOne.classList.add("pizza-name");
    pizzaNameOne.textContent = "Mushroom-chicken"
    
    const pizzaDescriptionOne = document.createElement("div");
    pizzaDescriptionOne.classList.add("pizza-description");
    pizzaDescriptionOne.textContent = "Chicken breast, fresh mushrooms, canned cucumber, mozzarella cheese, mushroom sauce"
    
    const pizzaSizesOne = document.createElement("div");
    pizzaSizesOne.classList.add("pizza-sizes");
    
    const pizzaCartPriceOne = document.createElement("div");
    pizzaCartPriceOne.classList.add("pizza-cart-price");

    // menu-card one's grandchildren
    const pizzaImgOne = document.createElement("img");
    pizzaImgOne.src = pizza1;
    pizzaImgOne.alt = "mushroom-chicken pizza";

    const pizzaSizesButtonOne = document.createElement("button");
    pizzaSizesButtonOne.textContent = "25 cm"

    const pizzaSizesButtonTwo = document.createElement("button");
    pizzaSizesButtonTwo.textContent = "30 cm"

    const pizzaSizesButtonThree = document.createElement("button");
    pizzaSizesButtonThree.textContent = "35 cm"

    const cartIconButton = document.createElement("button");
    cartIconButton.classList.add("cart-icon")
    const cartIcon = document.createElement("img");
    cartIcon.src = shopping_cart;
    cartIcon.alt = "shopping cart icon";

    const price = document.createElement("div");
    price.textContent = "$ 19.80"

    // menu-card one's children
    menuCardOne.appendChild(pizzaPictureOne);
    menuCardOne.appendChild(pizzaNameOne);
    menuCardOne.appendChild(pizzaDescriptionOne);
    menuCardOne.appendChild(pizzaSizesOne);
    menuCardOne.appendChild(pizzaCartPriceOne);

    // menu-card one's grandchildren
    pizzaPictureOne.appendChild(pizzaImgOne);
    pizzaSizesOne.appendChild(pizzaSizesButtonOne);
    pizzaSizesOne.appendChild(pizzaSizesButtonTwo);
    pizzaSizesOne.appendChild(pizzaSizesButtonThree);
    pizzaCartPriceOne.appendChild(cartIconButton);
    cartIconButton.appendChild(cartIcon);
    pizzaCartPriceOne.appendChild(price);

    return menuCardOne;
}


function createCardTwo() {

    const menuCardTwo = document.createElement("div");
    menuCardTwo.classList.add("menu-card");

    // menu-card two's children
    const pizzaPictureTwo = document.createElement("div");
    pizzaPictureTwo.classList.add("pizza-picture");

    const pizzaNameTwo = document.createElement("div");
    pizzaNameTwo.classList.add("pizza-name");
    pizzaNameTwo.textContent = "Pepperoni"
    
    const pizzaDescriptionTwo = document.createElement("div");
    pizzaDescriptionTwo.classList.add("pizza-description");
    pizzaDescriptionTwo.textContent = "Princi pepperoni made of beef, mozzarella cheese, salt, spices and olives on the top"
    
    const pizzaSizesTwo = document.createElement("div");
    pizzaSizesTwo.classList.add("pizza-sizes");
    
    const pizzaCartPriceTwo = document.createElement("div");
    pizzaCartPriceTwo.classList.add("pizza-cart-price");

    // menu-card two's grandchildren
    const pizzaImgTwo = document.createElement("img");
    pizzaImgTwo.src = pizza2;
    pizzaImgTwo.alt = "pepperoni pizza";

    const pizzaSizesButtonOne = document.createElement("button");
    pizzaSizesButtonOne.textContent = "25 cm"

    const pizzaSizesButtonTwo = document.createElement("button");
    pizzaSizesButtonTwo.textContent = "30 cm"

    const pizzaSizesButtonThree = document.createElement("button");
    pizzaSizesButtonThree.textContent = "35 cm"

    const cartIconButton = document.createElement("button");
    cartIconButton.classList.add("cart-icon")
    const cartIcon = document.createElement("img");
    cartIcon.src = shopping_cart;
    cartIcon.alt = "shopping cart icon";

    const price = document.createElement("div");
    price.textContent = "$ 16.75"

    // menu-card one's children
    menuCardTwo.appendChild(pizzaPictureTwo);
    menuCardTwo.appendChild(pizzaNameTwo);
    menuCardTwo.appendChild(pizzaDescriptionTwo);
    menuCardTwo.appendChild(pizzaSizesTwo);
    menuCardTwo.appendChild(pizzaCartPriceTwo);

    // menu-card one's grandchildren
    pizzaPictureTwo.appendChild(pizzaImgTwo);
    pizzaSizesTwo.appendChild(pizzaSizesButtonOne);
    pizzaSizesTwo.appendChild(pizzaSizesButtonTwo);
    pizzaSizesTwo.appendChild(pizzaSizesButtonThree);
    pizzaCartPriceTwo.appendChild(cartIconButton);
    cartIconButton.appendChild(cartIcon);
    pizzaCartPriceTwo.appendChild(price);

    return menuCardTwo;
}


function createCardThree() {

    const menuCardThree = document.createElement("div");
    menuCardThree.classList.add("menu-card");

    // menu-card two's children
    const pizzaPictureThree = document.createElement("div");
    pizzaPictureThree.classList.add("pizza-picture");

    const pizzaNameThree = document.createElement("div");
    pizzaNameThree.classList.add("pizza-name");
    pizzaNameThree.textContent = "Filet Special"
    
    const pizzaDescriptionThree = document.createElement("div");
    pizzaDescriptionThree.classList.add("pizza-description");
    pizzaDescriptionThree.textContent = "Filet mignon, tomato sauce, shredded corned beef, Catupiry, mozzarela cheese, purple onion"
    
    const pizzaSizesThree = document.createElement("div");
    pizzaSizesThree.classList.add("pizza-sizes");
    
    const pizzaCartPriceThree = document.createElement("div");
    pizzaCartPriceThree.classList.add("pizza-cart-price");

    // menu-card two's grandchildren
    const pizzaImgThree = document.createElement("img");
    pizzaImgThree.src = pizza3;
    pizzaImgThree.alt = "filet special pizza";

    const pizzaSizesButtonOne = document.createElement("button");
    pizzaSizesButtonOne.textContent = "25 cm"

    const pizzaSizesButtonTwo = document.createElement("button");
    pizzaSizesButtonTwo.textContent = "30 cm"

    const pizzaSizesButtonThree = document.createElement("button");
    pizzaSizesButtonThree.textContent = "35 cm"

    const cartIconButton = document.createElement("button");
    cartIconButton.classList.add("cart-icon")
    const cartIcon = document.createElement("img");
    cartIcon.src = shopping_cart;
    cartIcon.alt = "shopping cart icon";

    const price = document.createElement("div");
    price.textContent = "$ 22.50"

    // menu-card one's children
    menuCardThree.appendChild(pizzaPictureThree);
    menuCardThree.appendChild(pizzaNameThree);
    menuCardThree.appendChild(pizzaDescriptionThree);
    menuCardThree.appendChild(pizzaSizesThree);
    menuCardThree.appendChild(pizzaCartPriceThree);

    // menu-card one's grandchildren
    pizzaPictureThree.appendChild(pizzaImgThree);
    pizzaSizesThree.appendChild(pizzaSizesButtonOne);
    pizzaSizesThree.appendChild(pizzaSizesButtonTwo);
    pizzaSizesThree.appendChild(pizzaSizesButtonThree);
    pizzaCartPriceThree.appendChild(cartIconButton);
    cartIconButton.appendChild(cartIcon);
    pizzaCartPriceThree.appendChild(price);

    return menuCardThree;
}
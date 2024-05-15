import removeAllChildNodes from "./index.js";

export default function createHome() {
    const content = document.querySelector('#content');
    removeAllChildNodes(content);

    const headline = document.createElement("div");
    headline.classList.add("home-container");

    const h1 = document.createElement("h1");
    h1.textContent = "Holder Pizza";

    const p = document.createElement("p");
    p.textContent = "We've been making pizza in the wood-fired oven for 15 years now. When you take a bite, you'll taste the fresh tomatoes and spices: basil, oregano, marjoram. Hurry up and come and see it for yourself!"

    const button = document.createElement("button");
    button.classList.add("fake-button");
    button.textContent = "Make an Order";

    headline.appendChild(h1);
    headline.appendChild(p);
    headline.appendChild(button);
    content.appendChild(headline);

    return content;
}
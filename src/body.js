export default function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');

  const div = document.createElement('div');
  div.classList.add('about-us');

  const paragraphOne = document.createElement('p'); 
  paragraphOne.textContent = "Our coffee is the best coffee shop you'll find in the city. When you feel like drinking some coffee, come visit us and enjoy our delicious beverages."

  const image = document.createElement('img');
  image.src = "./images/cappuccino.jpg"
  image.alt = "Cappuccino being prepared"

  const paragraphTwo = document.createElement('p'); 
  paragraphTwo.textContent = "Did you know that your daily morning coffee provides you with more than just an energy boost? It's also shown to protect us against Type 2 diabetes and liver diseases as well as lowering the risks of heart failure."

  main.appendChild(div);
  div.appendChild(paragraphOne);
  div.appendChild(image);
  div.appendChild(paragraphTwo);

  return main;
}

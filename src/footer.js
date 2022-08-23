export default function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  footer.textContent = "Copyright © Renato Guedes - 2022"

  return footer;
}
import removeAllChildNodes from "./index.js";

export default function createContacts() {
    const content = document.querySelector('#content');
    removeAllChildNodes(content);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container")

    const contactUs = document.createElement("h1");
    contactUs.classList.add("contact-us");
    contactUs.textContent = "Contact Us";

    const contactOptions = document.createElement("div");
    contactOptions.classList.add("contact-options");

    // first option
    const contactCardOne = document.createElement("div");
    contactCardOne.classList.add("contact-card");
    const contactTitleOne = document.createElement("h2");
    contactTitleOne.classList.add("contact-title");
    contactTitleOne.textContent = "Ron Restaurant";
    const contactInfoOne = document.createElement("div");
    contactInfoOne.classList.add("contact-info");
    const phoneOne = document.createElement("div");
    phoneOne.classList.add("phone");
    phoneOne.textContent = "444-555-6666";
    const emailOne = document.createElement("div");
    emailOne.classList.add("email");
    emailOne.textContent = "totallyRealEmail@notFake.com";

    // second option
    const contactCardTwo = document.createElement("div");
    contactCardTwo.classList.add("contact-card");
    const contactTitleTwo = document.createElement("h2");
    contactTitleTwo.classList.add("contact-title");
    contactTitleTwo.textContent = "Davie Restaurant";
    const contactInfoTwo = document.createElement("div");
    contactInfoTwo.classList.add("contact-info");
    const phoneTwo = document.createElement("div");
    phoneTwo.classList.add("phone");
    phoneTwo.textContent = "444-555-6666";
    const emailTwo = document.createElement("div");
    emailTwo.classList.add("email");
    emailTwo.textContent = "totallyRealEmail@notFake.com";

    // footer
    const footer = createFooter();

    content.appendChild(contactContainer);
    content.appendChild(footer);
    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(contactOptions);

    // first option
    contactOptions.appendChild(contactCardOne);
    contactCardOne.appendChild(contactTitleOne);
    contactCardOne.appendChild(contactInfoOne);
    contactInfoOne.appendChild(phoneOne);
    contactInfoOne.appendChild(emailOne);

    // second option
    contactOptions.appendChild(contactCardTwo);
    contactCardTwo.appendChild(contactTitleTwo);
    contactCardTwo.appendChild(contactInfoTwo);
    contactInfoTwo.appendChild(phoneTwo);
    contactInfoTwo.appendChild(emailTwo);

    return content;
}


function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("created-by");
    footer.textContent = "Created by Renato Guedes";

    return footer;
}
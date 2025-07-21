function loadAbout() {
    const mainDiv = document.querySelector('#content');
    mainDiv.textContent = "";
    const heading = document.createElement('h1');
    const about = document.createElement('p');
    const contact = document.createElement('p');

    heading.textContent = "About";
    about.textContent = "We are a restaurant located in the center of your city. We serve all kinds of continental cuisine, and are open 24/7.";
    contact.textContent = "Contact us: 62248461+4R1u@users.noreply.github.com";

    mainDiv.appendChild(heading);
    mainDiv.appendChild(about);
    mainDiv.appendChild(contact);
}

export { loadAbout };
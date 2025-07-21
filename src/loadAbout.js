function loadAbout() {
    const mainDiv = document.querySelector('#content');
    mainDiv.textContent = "";
    const heading = document.createElement('h1');
    const about = document.createElement('p');
    const contact = document.createElement('p');

    heading.textContent = "About";
    about.textContent = "We serve the best food in town.";
    contact.textContent = "Contact us: 62248461+4R1u@users.noreply.github.com";

    mainDiv.appendChild(heading);
    mainDiv.appendChild(about);
    mainDiv.appendChild(contact);
}

export { loadAbout };
function loadMain() {
    const mainDiv = document.querySelector('#content');
    mainDiv.textContent = "";
    const heading = document.createElement('h1');
    const imagePlaceholder = document.createElement('div');
    const headline = document.createElement('p');

    heading.textContent = "Restaurant";
    imagePlaceholder.classList.add("image-placeholder");
    imagePlaceholder.textContent = "Placeholder for an image";
    headline.textContent = "We serve the best food in town.";

    mainDiv.appendChild(heading);
    mainDiv.appendChild(imagePlaceholder);
    mainDiv.appendChild(headline);
}

export { loadMain };
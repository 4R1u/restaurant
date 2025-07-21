function loadMain() {
    const mainDiv = document.querySelector('#content');
    mainDiv.textContent = "";
    const heading = document.createElement('h1');
    const imagePlaceholder = document.createElement('div');
    const loremIpsum = document.createElement('p');

    heading.textContent = "Restaurant";
    imagePlaceholder.classList.add("image-placeholder");
    imagePlaceholder.textContent = "Placeholder for an image";
    loremIpsum.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis mollitia similique neque aliquid reprehenderit ipsam ducimus rerum dolorem! Totam, culpa. Voluptatum reiciendis minima quae veniam et. Voluptatem assumenda rerum aliquam?";

    mainDiv.appendChild(heading);
    mainDiv.appendChild(imagePlaceholder);
    mainDiv.appendChild(loremIpsum);
}

export { loadMain };
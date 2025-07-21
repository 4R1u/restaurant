function loadMenu() {
    const mainDiv = document.querySelector('#content');
    mainDiv.textContent = "";
    const heading = document.createElement('h1');
    heading.classList.add("menu-header");
    heading.textContent = "Menu";
    mainDiv.appendChild(heading);

    for (let i = 0; i < 10; ++i) {
        const menuEntry = document.createElement("div");
        menuEntry.classList.add("menu-entry");
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.textContent = "Menu Item";
        const menuSubtitle = document.createElement("div");
        menuSubtitle.classList.add("menu-subtitle");
        menuSubtitle.textContent = "Menu Subtitle";
        const menuPrice = document.createElement("div");
        menuPrice.classList.add("price");
        menuPrice.textContent = "$5.00";

        menuEntry.appendChild(menuItem);
        menuEntry.appendChild(menuSubtitle);
        menuEntry.appendChild(menuPrice);

        mainDiv.appendChild(menuEntry);
    }
}

export { loadMenu };
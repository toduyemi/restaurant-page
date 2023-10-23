function createTemplate() {

    const headerCtr = document.createElement('header');

    const navCtr = document.createElement('nav');
    const homeDiv = document.createElement('div');
    const menuDiv = document.createElement('div');
    const aboutDiv = document.createElement('div');

    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const aboutLink = document.createElement('a');

    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    aboutLink.textContent = 'About';

    homeDiv.classList.add('header-tab', 'home-link');
    menuDiv.classList.add('header-tab', 'menu-link');
    aboutDiv.classList.add('header-tab', 'about-link');
    homeDiv.appendChild(homeLink);
    menuDiv.appendChild(menuLink);
    aboutDiv.appendChild(aboutLink);

    navCtr.appendChild(homeDiv);
    navCtr.appendChild(menuDiv);
    navCtr.appendChild(aboutDiv);

    headerCtr.appendChild(navCtr);

    document.body.prepend(headerCtr);
}

export default createTemplate;
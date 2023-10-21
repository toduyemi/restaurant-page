function createHomePage() {
    'use strict';

    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';

    const headerCtr = document.createElement('header');
    const homeDiv = document.createElement('div');
    const menuDiv = document.createElement('div');
    const aboutDiv = document.createElement('div');

    const homeLink = document.createElement('a');
    const menuLink = document.createElement('a');
    const aboutLink = document.createElement('a');


    const centerPageDiv = document.createElement('div')
    const blurbHeadline = document.createElement('h2');
    const blurbText = document.createElement('p');

    centerPageDiv.classList.add('blurb-ctr');
    homeDiv.classList.add('header-tab');
    menuDiv.classList.add('header-tab');
    aboutDiv.classList.add('header-tab');

    homeLink.textContent = 'Home';
    menuLink.textContent = 'Menu';
    aboutLink.textContent = 'About';

    blurbHeadline.textContent = 'books and beans'
    blurbText.textContent = 'Laboris excepteur eiusmod labore magna pariatur qui anim amet proident. Sint Lorem consequat dolore irure ea aliquip dolore ad. Labore adipisicing Lorem adipisicing consequat ad eu eu. Pariatur velit ad occaecat sit. Culpa aliquip velit anim sunt id non nisi cillum tempor occaecat.'

    homeDiv.appendChild(homeLink);
    menuDiv.appendChild(menuLink);
    aboutDiv.appendChild(aboutLink);

    headerCtr.appendChild(homeLink);
    headerCtr.appendChild(menuLink);
    headerCtr.appendChild(aboutLink);


    centerPageDiv.appendChild(blurbHeadline);
    centerPageDiv.appendChild(blurbText);

    contentDiv.appendChild(headerCtr);
    contentDiv.appendChild(centerPageDiv);

}

export default createHomePage;
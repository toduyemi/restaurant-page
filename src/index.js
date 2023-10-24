import createHomePage from './home-page.js';
import createTemplate from './restaurant-template.js';
import createContactPage from './contact-page.js';
import createMenuPage from './menu-page.js';

import './style.css';


(function () {
    const restaurantPage = {

        init: function () {
            createTemplate();
            createHomePage();
            this.cacheDom();
            this.bindEvents();
        },

        cacheDom: function () {
            this.homeLink = document.querySelector('.home-link');
            this.menuLink = document.querySelector('.menu-link');
            this.contactLink = document.querySelector('.about-link');
        },

        bindEvents: function () {
            this.homeLink.addEventListener('click', createHomePage);
            this.menuLink.addEventListener('click', createMenuPage);
            this.contactLink.addEventListener('click', createContactPage);
        }
    };

    restaurantPage.init();


})();

if (module && module.hot) {
    module.hot.accept();
}
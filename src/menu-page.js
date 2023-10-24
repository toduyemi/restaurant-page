import jadeCity from './assets/jade_city.png';
import bOC from './assets/beware_of_chicken.jpeg';
import unSouled from './assets/unsouled.jpeg';

function createMenuPage() {

    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';
    contentDiv.className = 'menu-page'

    const menuHeader = document.createElement('h1');
    const menuItemsDiv = document.createElement('div');
    menuItemsDiv.classList.add('menu-ctr')

    menuHeader.textContent = 'our coffee and recommendations'

    const menuDiv1 = document.createElement('div');
    const header1 = document.createElement('h2');
    const jCimg = new Image();
    jCimg.src = jadeCity;
    header1.textContent = 'Jade City by Fonda Lee'

    menuDiv1.appendChild(jCimg);
    menuDiv1.appendChild(header1);

    const menuDiv2 = document.createElement('div');
    const header2 = document.createElement('h2');
    const coffeeUl = document.createElement('ul')
    const coffeeLi1 = document.createElement('li');
    const coffeeLi2 = document.createElement('li');
    const coffeeLi3 = document.createElement('li');
    const coffeeLi4 = document.createElement('li');

    header2.textContent = 'Coffee';
    coffeeLi1.textContent = 'Hot';
    coffeeLi2.textContent = '5';
    coffeeLi3.textContent = 'Cold';
    coffeeLi4.textContent = '4';

    coffeeUl.appendChild(coffeeLi1);
    coffeeUl.appendChild(coffeeLi2);
    coffeeUl.appendChild(coffeeLi3);
    coffeeUl.appendChild(coffeeLi4);

    menuDiv2.appendChild(header2);
    menuDiv2.appendChild(coffeeUl);



    const menuDiv3 = document.createElement('div');
    const header3 = document.createElement('h2');
    const teaUl = document.createElement('ul')
    const teaLi1 = document.createElement('li');
    const teaLi2 = document.createElement('li');
    const teaLi3 = document.createElement('li');
    const teaLi4 = document.createElement('li');

    header3.textContent = 'Tea';
    teaLi1.textContent = 'Matcha Latte';
    teaLi2.textContent = '7';
    teaLi3.textContent = 'Earl Grey';
    teaLi4.textContent = '9';

    teaUl.appendChild(teaLi1);
    teaUl.appendChild(teaLi2);
    teaUl.appendChild(teaLi3);
    teaUl.appendChild(teaLi4);

    menuDiv3.appendChild(header3);
    menuDiv3.appendChild(teaUl);

    const menuDiv4 = document.createElement('div');
    const header4 = document.createElement('h2');
    const boCimg = new Image();
    boCimg.src = bOC;
    header4.textContent = 'Beware of Chicken by CasualFarmer';

    menuDiv4.appendChild(boCimg);
    menuDiv4.appendChild(header4);


    const menuDiv5 = document.createElement('div');
    const header5 = document.createElement('h2');
    const unsouledImg = new Image();
    unsouledImg.src = unSouled;
    header5.textContent = 'Unsouled by Will Wight';

    menuDiv5.appendChild(unsouledImg);
    menuDiv5.appendChild(header5);

    const menuDiv6 = document.createElement('div');
    const header6 = document.createElement('h2');
    const specialtyUl = document.createElement('ul')
    const specialtyLi1 = document.createElement('li');
    const specialtyLi2 = document.createElement('li');
    const specialtyLi3 = document.createElement('li');
    const specialtyLi4 = document.createElement('li');

    header6.textContent = 'Speciality Coffee';
    specialtyLi1.textContent = 'Espresso';
    specialtyLi2.textContent = '4';
    specialtyLi3.textContent = 'Capaccino';
    specialtyLi4.textContent = '6';

    specialtyUl.appendChild(specialtyLi1);
    specialtyUl.appendChild(specialtyLi2);
    specialtyUl.appendChild(specialtyLi3);
    specialtyUl.appendChild(specialtyLi4);

    menuDiv6.appendChild(header6);
    menuDiv6.appendChild(specialtyUl);


    menuItemsDiv.appendChild(menuDiv1);
    menuItemsDiv.appendChild(menuDiv2);
    menuItemsDiv.appendChild(menuDiv3);
    menuItemsDiv.appendChild(menuDiv4);
    menuItemsDiv.appendChild(menuDiv5);
    menuItemsDiv.appendChild(menuDiv6);

    contentDiv.appendChild(menuHeader);
    contentDiv.appendChild(menuItemsDiv);

    menuDiv1.classList.add('book-item');
    menuDiv4.classList.add('book-item');
    menuDiv5.classList.add('book-item');

    menuDiv2.classList.add('drink-item');
    menuDiv3.classList.add('drink-item');
    menuDiv6.classList.add('drink-item');

}

export default createMenuPage;
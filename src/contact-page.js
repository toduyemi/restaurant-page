function createContactPage() {
    'use strict';

    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';
    contentDiv.className = 'contact-page'


    const addressDiv = document.createElement('div');
    const addressHeader = document.createElement('h2');
    const addressUl = document.createElement('ul');
    const addressLi1 = document.createElement('li');
    const addressLi2 = document.createElement('li');
    const addressLi3 = document.createElement('li');

    addressHeader.textContent = 'Address';
    addressLi1.textContent = '666 Sin St';
    addressLi2.textContent = 'Vancouver';
    addressLi3.textContent = 'V6X6X6';

    addressUl.appendChild(addressLi1);
    addressUl.appendChild(addressLi2);
    addressUl.appendChild(addressLi3);

    addressDiv.appendChild(addressHeader);
    addressDiv.appendChild(addressUl);

    const hoursDiv = document.createElement('div');
    const hoursHeader = document.createElement('h2');
    const hoursUl = document.createElement('ul');
    const hoursLi1 = document.createElement('li');
    const hoursLi2 = document.createElement('li');

    hoursHeader.textContent = 'Hours';
    hoursLi1.textContent = 'Mon - Thurs: 11am - 12am';
    hoursLi2.textContent = 'Fri - Sun: 11am - 2am';

    hoursUl.appendChild(hoursLi1);
    hoursUl.appendChild(hoursLi2);

    hoursDiv.appendChild(hoursHeader);
    hoursDiv.appendChild(hoursUl);

    const contactDiv = document.createElement('div');
    const contactUsHeader = document.createElement('h2');
    const contactUl = document.createElement('ul');
    const contactLi1 = document.createElement('li');
    const contactLi2 = document.createElement('li');

    contactUl.appendChild(contactLi1);
    contactUl.appendChild(contactLi2);

    contactDiv.appendChild(contactUsHeader);
    contactDiv.appendChild(contactUl);

    contactUsHeader.textContent = 'Contact';
    contactLi1.textContent = 'Phone: 123 456 7890';
    contactLi2.textContent = 'Email: cuddleandread@gmail.com';


    const contactForm = document.createElement('form');
    const nameInput = document.createElement('input');
    const phoneInput = document.createElement('input');
    const emailInput = document.createElement('input');
    const textInput = document.createElement('textarea');
    const contactFormBtn = document.createElement('button');

    contactForm.appendChild(nameInput);
    contactForm.appendChild(phoneInput);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(textInput);
    contactForm.appendChild(contactFormBtn);


    nameInput.setAttribute('placeholder', 'Full Name');
    phoneInput.setAttribute('placeholder', 'Phone');
    emailInput.setAttribute('placeholder', 'Email');
    textInput.setAttribute('placeholder', 'Message');
    contactFormBtn.textContent = 'Send';

    const embeddedMapDiv = document.createElement('div');
    embeddedMapDiv.classList.add('map-ctr');
    const embeddedMap = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d83320.05578410138!2d-123.15044831026556!3d49.26215120639332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1697948559216!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    embeddedMapDiv.innerHTML = embeddedMap;

    contentDiv.appendChild(addressDiv);
    contentDiv.appendChild(hoursDiv);
    contentDiv.appendChild(contactDiv);
    contentDiv.appendChild(embeddedMapDiv);
    contentDiv.appendChild(contactForm);

}

export default createContactPage;
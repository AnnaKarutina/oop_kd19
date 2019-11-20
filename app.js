// document meetodid
// elementide kustutamine

// leia antud DOM-is kõik li elemendid
const liEmenedid = document.querySelectorAll('li');
// kustuta konkreetne element
liEmenedid[2].remove();

// leia antud DOM-is ul element
const ulElement = document.querySelector('ul');
// kustuta antud elemendist li
// li on ul child elemendid
ulElement.removeChild(liEmenedid[1]);

// nimekirja element
const liElement = liEmenedid[0]; 
// kustutamislink
const link = liElement.children[0];
// class ja atribute - kustutamine
// class
let sisu = link.className;
sisu = link.classList;
sisu = link.classList[1];
link.classList.remove('secondary-content');
link.classList.add('secondary-content');
sisu = link.classList;
sisu = link;

// atrubuut
sisu = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
sisu = link;
console.log(sisu);
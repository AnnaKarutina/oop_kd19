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

console.log(ulElement);
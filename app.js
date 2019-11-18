// document meetodid
// elementide asendamine

// leia vana element h5
const vanaPealkiri = document.querySelector('h5');
// leia kaart, kus antud pealkiri on
const divCardAction = document.querySelector('.card-action');

// loo uus pealkiri
const uusPealkiri = document.createElement('h3');
// lisa id
uusPealkiri.id = 'new-title';
// lisa sisu
// uusPealkiri.appendChild(document.createTextNode('Uued ülesanded'));
uusPealkiri.textContent = 'Uued ülesanded';

// asenda vana pealkiri uuega
divCardAction.replaceChild(uusPealkiri, vanaPealkiri);

// asenda span h3 vastu

// loo uus pealkiri
const pohiPealkiri = document.createElement('h3');
// täienda sisuga
pohiPealkiri.textContent = 'Ülesanded';
// leia pealkirja vanem div
const divCardContent = document.querySelector('.card-content');
// leia divi vana pealkiri
const vanaPohiPealkiri = document.querySelector('span');
// asenda antud divi vanem pealkiri uuega
divCardContent.replaceChild(pohiPealkiri, vanaPohiPealkiri);
console.log(pohiPealkiri);
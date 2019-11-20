// sündmused

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const text = document.querySelector('h5');

// kustutame lisUusYlesanne väärtus
lisaUusYlesanne.value = '';

// klaviatuur
// keydown
// lisaUusYlesanne.addEventListener('keydown', syndmus);
// keyup
// lisaUusYlesanne.addEventListener('keyup', syndmus);
// keypress
// lisaUusYlesanne.addEventListener('keypress', syndmus);
// focus
// lisaUusYlesanne.addEventListener('focus', syndmus);
// blur
// lisaUusYlesanne.addEventListener('blur', syndmus);
// paste
// lisaUusYlesanne.addEventListener('paste', syndmus);
// cut
// lisaUusYlesanne.addEventListener('cut', syndmus);
// input
// lisaUusYlesanne.addEventListener('input', syndmus);


function syndmus(e){
  // logi sündmuse tüüp
  console.log(`Sündmuse tüüp: ${e.type}`);
  // kontrollime vormi kaudu saadetud väärtus
  console.log(lisaUusYlesanne.value);
  // väljastame ülesanne HTML-is
  text.innerText = lisaUusYlesanne.value;
}
// sündmused

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const text = document.querySelector('h5');

// kustutame lisUusYlesanne väärtus
lisaUusYlesanne.value = '';

// vormi saatmine
form.addEventListener('submit', syndmus);

function syndmus(e){
  // logi sündmuse tüüp
  console.log(`Sündmuse tüüp: ${e.type}`);
  // kontrollime vormi kaudu saadetud väärtus
  console.log(lisaUusYlesanne.value);
  // väljastame ülesanne HTML-is
  text.innerText = lisaUusYlesanne.value;
}
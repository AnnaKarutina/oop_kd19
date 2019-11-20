// sündmused

const kustutaKoik = document.querySelector('.clear-tasks');
const text = document.querySelector('h5');
const kaart = document.querySelector('.card');
// click
// kustutaKoik.addEventListener('click', syndmus);
// double click
// kustutaKoik.addEventListener('dblclick', syndmus);
// mouse down
// kustutaKoik.addEventListener('mousedown', syndmus);
// mouse up
// kustutaKoik.addEventListener('mouseup', syndmus);
// mouse enter
// kaart.addEventListener('mouseenter', syndmus);
// mouse leave
// kaart.addEventListener('mouseleave', syndmus);
// mouse over
// kaart.addEventListener('mouseover', syndmus);
// mouse out
// kaart.addEventListener('mouseout', syndmus);
// mouse move
kaart.addEventListener('mousemove', syndmus);
function syndmus(e){
  // logi sündmuse tüüp
  console.log(`Sündmuse tüüp: ${e.type}`);
  // muuda text sisu: HiirX: x koord HiirY: y koord
  text.textContent =  `HiirX: ${e.offsetX} HiirY: ${e.offsetY}`;
  // koosta body värv rgb(Xkoord, Ykoord, 40);
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
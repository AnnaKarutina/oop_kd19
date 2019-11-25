// inimese kirjeldus
let eesnimi, perenimi;
let synnikuupaev;

function taisNimi(eesnimi, perenimi){
  return `${eesnimi} ${perenimi}`;
}

function arvutaVanus(synnikuupaev){
  synnikuupaev = new Date(synnikuupaev);
  vaheSekundites = Date.now() - synnikuupaev.getTime();
  vanusDate = new Date(vaheSekundites);
  aastaDate = vanusDate.getUTCFullYear();
  vanus = aastaDate - 1970;
  return `Vanus: ${vanus} aastat`;
}

console.log(taisNimi("Minu", "Laps"));
console.log(arvutaVanus("2014-08-01"));
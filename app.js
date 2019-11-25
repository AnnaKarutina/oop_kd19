// inimese kirjeldus OOP abil
// Objekt.prototype
// inimese konstruktor
function Isik(e, p, skp){
  this.eesnimi = e;
  this.perenimi = p;
  this.synnikuupaev = new Date(skp);
}
// väljasta täisnimi
Isik.prototype.taisNimi = function(){
  return `${this.eesnimi} ${this.perenimi}`;
}
// arvuta vanus
Isik.prototype.arvutaVanus = function(){
  const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
  const vanusDateKujul = new Date(vaheSekundites);
  const taisAasta = vanusDateKujul.getUTCFullYear();
  const vanus = taisAasta - 1970;
  return vanus;
}
// abiellumine
Isik.prototype.abiellus = function(uusPereNimi){
  this.perenimi = uusPereNimi;
}

const anna = new Isik('Anna', 'Karutina', '11-27-1980');
const kadi = new Isik('Kadi', 'Tamm', '07-30-1995');
console.log(anna);
kadi.abiellus('Vaher');
console.log(kadi.taisNimi());
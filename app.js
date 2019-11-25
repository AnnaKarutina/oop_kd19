// inimese kirjeldus OOP abil
// inimese konstruktor
function Isik(e, p, skp){
  this.eesnimi = e;
  this.perenimi = p;
  this.synnikuupaev = new Date(skp);

  // väljasta täisnimi
  this.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
  }

  // arvuta vanus
  this.arvutaVanus = function(){
    const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
    const vanusDateKujul = new Date(vaheSekundites);
    const taisAasta = vanusDateKujul.getUTCFullYear();
    const vanus = taisAasta - 1970;
    return vanus;
  }
}

const anna = new Isik('Anna', 'Karutina', '11-27-1980');
const kadi = new Isik('Kadi', 'Tamm', '07-30-1995');
console.log(anna.taisNimi());
console.log(kadi.taisNimi());
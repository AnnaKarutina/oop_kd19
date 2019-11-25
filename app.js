// inimese kirjeldus OOP abil
// klasside kasutus
class Isik {
  // konstruktor
  constructor(e, p, skp){
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);
  }
  // tervitus meetod
  tervitus() {
    return `Tere, ${this.eesnimi} ${this.perenimi} !`;
  }

  // vanuse arvutamine
  vanuseArvutamine(){
    const vahe = Date.now() - this.synnikuupaev.getTime();
    const vanus = new Date(vahe);
    return vanus.getUTCFullYear() - 1970;
  }

  // abiellus - uus perenimi
  abiellus(uusPerenimi) {
    this.perenimi = uusPerenimi;
  }
}

const kadi = new Isik('Kadi', 'Tamm', '07-30-1995');
console.log(kadi.tervitus());
kadi.abiellus('Vaher');
console.log(kadi.tervitus());
console.log(kadi.vanuseArvutamine());
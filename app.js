// Raamatu konstruktor
function Raamat(a, p, i){
  this.autor = a;
  this.pealkiri = p;
  this.isbn = i;
}

// Kasutaja liides - KL
// konstruktor
function KL() {

}

// KL funktsionaal
// sisendväljade puhastamine
KL.prototype.puhastaSisend = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// raamatu lisamine tabelisse
KL.prototype.lisaRaamatTabelisse = function(r){
  // loome tabeli rida
  const rida = document.createElement('tr');
  // täidame rida tabeli andmetega
  rida.innerHTML = `
    <td>${r.pealkiri}</td>
    <td>${r.autor}</td>
    <td>${r.isbn}</td>
  `;
  // lisame rida tabelisse
  tabel = document.getElementById('book-list');
  tabel.appendChild(rida);
}

// teade väljastamine
KL.prototype.teade = function(s){
  // loome div, kuhu lisada teade sõnum
  const div = document.createElement('div');
  div.className = 'alert';
  // lisame sõnumi tekst divi sisse
  const tekst = document.createTextNode(s);
  div.appendChild(tekst);
  // leiame elemendid, mille suhtes tuleb lisada uus element
  const konteiner = document.querySelector('.container');
  const vorm = document.getElementById('book-form');
  // lisame teade dokumendi
  konteiner.insertBefore(div, vorm);

  // kustutame teade 5 sekundi möödumisel
  setTimeout(function(){ 
    document.querySelector('.alert').remove();
   }, 5000);
}

// kirjeldame raamatu lisamise sündmust
document.getElementById('book-form').addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
  // võtame andmed vormist
  const pealkiri = document.getElementById('title').value;
  const autor = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  // loome raamat andmete põhjal
  const raamat = new Raamat(autor, pealkiri, isbn);

  // loome kasutaja liidese objekt temaga opereerimiseks
  const kl = new KL();

  // kui mingid andmed on puudu, 
  // siis anname märku
  if(pealkiri == '' | autor == '' | isbn == ''){
    kl.teade('Tuleb täita kõik väljad!');
  } else {
    // muidu
    // lisame sisestatud raamat tabelisse
    kl.lisaRaamatTabelisse(raamat);
    kl.teade('Raamat on lisatud!');
  }

  // puhastame väljad sisestatud andmetest
  kl.puhastaSisend();

  e.preventDefault();
}
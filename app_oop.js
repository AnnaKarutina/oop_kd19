// app_oop.js

// kirjeldame andmete lugemise sündmust LS-st
document.addEventListener('DOMContentLoaded', raamatuteTabel);

// raamatute tabeli funktsioon
function raamatuteTabel(e){
  // loome kasutaja liidese objekt temaga opereerimiseks
  const kl = new KL();
  // kutsume raamatute näitamist funktsiooni
  kl.naitaRaamatud();
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
    kl.teade('Tuleb täita kõik väljad!', 'invalid');
  } else {
    // muidu
    // lisame sisestatud raamat tabelisse
    
    kl.lisaRaamatTabelisse(raamat);

    // loome LS objekt funktsionaali kutsumiseks
    const ls = new LS();

    // salvestame raamatu andmed LS-sse
    ls.salvestaRaamat(raamat);
    // anname teade lisamisest
    kl.teade('Raamat on lisatud!', 'valid');
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend(); 
  }
  e.preventDefault();
}

// raamatu kustutamise sündmus
document.getElementById('book-list').addEventListener('click', kustutaRaamat);

function kustutaRaamat(e){
  // loome kasutaja liidese objekt temaga opereerimiseks
  const kl = new KL();

  // kutsume tabelis oleva raamatu kustutamise
  // funktsioon
  // loome X link, millel clickime kustutamiseks
  const X = e.target;
  // saame kustutava raamatu isbn kätte
  isbn = X.parentElement.previousElementSibling.textContent;
  // kustutame andmed tabeli väljundist
  kl.kustutaRaamatTabelist(X);

  // loome LS objekt funktsionaali kutsumiseks
  const ls = new LS();

  // kustutame andmed LS-st
  onKustutatud = ls.kustutaRaamatLS(isbn);
  
  // väljastame vastav teade
  if(onKustutatud){
   kl.teade('Raamat on kustutatud', 'valid');
  }
  
  e.preventDefault();
}
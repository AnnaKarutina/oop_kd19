// Raamatu konstruktor
function Raamat(a, p, i){
  this.autor = a;
  this.pealkiri = p;
  this.isbn = i;
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
  const raamat = new Raamat(pealkiri, autor, isbn);

  console.log(raamat);

  e.preventDefault();
}
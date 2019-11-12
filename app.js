// document

let sisu;

sisu = document; // sisu html-is
sisu = document.all; // html tagid kasutamisjärjekorras
sisu = document.all[2]; // konkreetne html tag
sisu = document.all.length; // palju on html tagi kasutusel

// document properties - oobjekti omadused
sisu = document.head; // head sisu
sisu = document.body; // body sisu
sisu = document.doctype; // doctype
sisu = document.domain;
sisu = document.URL;
sisu = document.characterSet;
sisu = document.contentType;

// formi andmed
sisu = document.forms; // kõik vormid
sisu = document.forms[0]; // esimene vorm
sisu = document.forms[0].id; // esimese vormi id
sisu = document.forms[0].method; // vormi töötlus meetod
sisu = document.forms[0].action;
console.log(sisu);
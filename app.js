// document meetodid
// single element selectors

sisu = document.querySelector('#title'); // id järgi
sisu = document.querySelector('.card-title'); // klassi nime järgi
sisu = document.querySelector('h5'); // elemendi järgi

// stiili muutmine
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'orange';
console.log(sisu);
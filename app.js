// document meetodid
// single element selectors

sisu = document.getElementById('title'); // html sisu
id = document.getElementById('title').id; // id
klass = document.getElementById('title').className;

// stiili muutmine
// sisu.style.background = '#333';
document.getElementById('title').style.background = '#333';
sisu.style.color = '#fff';
sisu.style.padding = '5px';
// sisu.style.display = 'none';
console.log(sisu);
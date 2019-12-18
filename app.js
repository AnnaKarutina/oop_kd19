document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);

// local json file
function getJsonData() {
  fetch('data.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    let out = '';
    out = '';
    data.forEach(function(timetable){
      out = out + `<li>${timetable.opetaja} `;
      out = out + `- ${timetable.aine}</li>`;
      console.log(out);
    });
    document.getElementById('out').innerHTML = out;
  })
  .catch(function(error) {
    console.log(error);
  })
}

// local text file
function getTextData() {
  fetch('text.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById('out').innerHTML = data;
  })
  .catch(function(error) {
    console.log(error);
  })
}


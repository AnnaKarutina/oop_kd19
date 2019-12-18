document.getElementById('btn1').addEventListener('click', getTextData);

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
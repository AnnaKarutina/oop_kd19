// weather for given location
const weather = new Weather('Tartu linn');
// app UI
const ui = new UI();

// change city - weather
const changeBtn = document.getElementById('w-change');
changeBtn.addEventListener('click', changeWeather);

function changeWeather() {
  const city = document.getElementById('city').value;
  weather.changeCityName(city);
  drawWeather();
  $('#changeCity').modal('hide');
  console.log(weather);
}

function drawWeather() {
  weather.weatherData().then(cityWeather => {
    ui.print(cityWeather);
  }).catch(error => console.log(error));
}

console.log(ui);
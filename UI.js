class UI {
  // constructor
  constructor(){
    this.cityName = document.getElementById('w-city');
    this.temp = document.getElementById('w-temp');
    this.desc = document.getElementById('w-desc');
  }

  print(cityWeather){
    this.cityName.textContent = cityWeather.name;
    const celcius = Math.round(parseFloat(cityWeather.main.temp)-273.15);
    this.temp.innerHTML = `${celcius} &deg;C`;
    this.desc.textContent = cityWeather.weather[0].description;
  }
}
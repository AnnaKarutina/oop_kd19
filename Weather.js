class Weather{
  // constructor
  constructor(c){
    this.city = c;
    this.key = '77f97b598769bf8861004c74e30ebbba';
  }

  // data from API
  async weatherData(){
    const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.city + '&appid=' + this.key);
    const data = await resp.json();
    console.log(data);
    return data;
  }

  // change city name
}
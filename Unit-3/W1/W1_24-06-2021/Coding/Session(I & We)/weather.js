let container = document.getElementById('container')

async function getWeather() {
  try {
    let city = document.getElementById('city').value
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a1a49e508328e112aa72b23f174f922`
    );
    let data = await res.json();
    console.log(data);
    showWeatherData(data)
  } catch (e) {
    console.log(e);
  }
}
//getWeather();


function showWeatherData(d) {
  let name = document.createElement('p')
  name.innerText = `Name - ${d.name}`;

  let pressure = document.createElement('p')
  pressure.innerText = `pressure - ${d.main.pressure}`;

  let temp = document.createElement('p');
  temp.innerText = `Temp - ${Math.ceil(d.main.temp-273)} C`;

  let humidity = document.createElement('p');
  humidity.innerText = `Humidity - ${d.main.humidity}`;

  container.append(name,temp,humidity,pressure)
}
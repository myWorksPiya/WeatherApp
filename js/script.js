const key = '88680ed0ca247aae5c6aeacc59629e19';

const cityForm = document.querySelector('form');
const currentDetails = document.querySelector('.currentDetails');
const forecast = document.querySelector('.forecast');

const getWeather = async (city) => {
	const base = 'http://api.openweathermap.org/data/2.5/weather';
	const query = `?q=${city}&appid=${key}&units=metric`;
	const response = await fetch(base + query);
	const data = await response.json();
	//console.log(data);
	return data;
};
const getForecast = async (city) => {
	const base = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`;
	const response = await fetch(base);
	const data = await response.json();
	//console.log(data);
	return data;
};

const updateCity = async (city) => {
	//console.log(city);
	const weatherDets = await getWeather(city);
	//console.log(weatherDets.id);
	return { weatherDets };
};

const updateForecast = async (city) => {
	const weatherForecast = await getForecast(city);
	return { weatherForecast };
};

cityForm.addEventListener('submit', (e) => {
	// prevent refreshing action
	e.preventDefault();

	// get city value
	const city = cityForm.city.value.trim();
	//console.log(city);
	cityForm.reset();

	// update the ui with the new city
	updateCity(city).then((data) => updateUIcurrent(data)).catch((err) => console.log(err));

	updateForecast(city).then((forecast) => updateUIForecast(forecast)).catch((err) => console.log(err));

	
});
const updateUIcurrent = (data) => {
	
    document.querySelector('.currentDetails').style.visibility = 'visible';

    const { weatherDets } = data;
    
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherDets.weather[0][
		'icon'
	]}.svg`;
	let date = new Date();
	const date_txt = dateFns.format(date, 'ddd, Do-MM-YYYY');
	//update details template
	currentDetails.innerHTML = `
          <h5>${weatherDets.name}<sup>${weatherDets.sys.country}</sup></h5>
          <span>${date_txt}</span>
                <div class="temp">
                    ${Math.round(weatherDets.main.temp)}<sup>°C</sup>
                     <span class="desc">Feels like ${Math.round(weatherDets.main.feels_like)}<sup>°C</sup></span>
                </div>
            <figure>
                <img class="weather-icon" src="${icon}" >
                <figcaption class="desc">${weatherDets.weather[0].description}</figcaption>
            </figure>
           

    `;
};
let i = 4;
const updateUIForecast = (data) => {
    console.log(data);
  
    const { weatherForecast } = data;

        //Extracting the image
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherForecast.list[4].weather[0]['icon']}.svg`;
  

    document.querySelector('.firstday').style.visibility = 'visible';
    document.querySelector('.secondday').style.visibility = 'visible';
    document.querySelector('.thirdday').style.visibility = 'visible';
    document.querySelector('.fourthday').style.visibility = 'visible';
    document.querySelector('.fifthday').style.visibility = 'visible';



    document.querySelector('.firstday').innerHTML = `<h2 class="weekday">
                <span>${dateFns.format(weatherForecast.list[4].dt_txt, 'ddd')}  ${dateFns.format(weatherForecast.list[4].dt_txt, 'D-MM-YY')}</span>
            </h2>
            <div class="day-temp">
                ${Math.round(weatherForecast.list[4].main.temp)}<sup>°C</sup>
            </div>
            <figure>
            <img class="weather-icon" src="${`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherForecast.list[4].weather[0]['icon']}.svg`}" >
            <figcaption>${weatherForecast.list[4].weather[0].description}</figcaption>
            </figure>`; 
      document.querySelector('.secondday').innerHTML = `<h2 class="weekday">
                <span>${dateFns.format(weatherForecast.list[8].dt_txt, 'ddd')}  ${dateFns.format(weatherForecast.list[8].dt_txt, 'D-MM-YY')}</span>
            </h2>
            <div class="day-temp">
                ${Math.round(weatherForecast.list[8].main.temp)}<sup>°C</sup>
            </div>
            <figure>
            <img class="weather-icon" src="${`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherForecast.list[8].weather[0]['icon']}.svg`}" >
            <figcaption>${weatherForecast.list[8].weather[0].description}</figcaption>
            </figure>`; 
     document.querySelector('.thirdday').innerHTML = `<h2 class="weekday">
                <span>${dateFns.format(weatherForecast.list[12].dt_txt, 'ddd')}  ${dateFns.format(weatherForecast.list[12].dt_txt, 'D-MM-YY')}</span>
            </h2>
            <div class="day-temp">
                ${Math.round(weatherForecast.list[12].main.temp)}<sup>°C</sup>
            </div>
            <figure>
            <img class="weather-icon" src="${`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherForecast.list[12].weather[0]['icon']}.svg`}" >
            <figcaption>${weatherForecast.list[12].weather[0].description}</figcaption>
            </figure>`; 
     document.querySelector('.fourthday').innerHTML = `<h2 class="weekday">
                <span>${dateFns.format(weatherForecast.list[16].dt_txt, 'ddd')}  ${dateFns.format(weatherForecast.list[16].dt_txt, 'D-MM-YY')}</span>
            </h2>
            <div class="day-temp">
                ${Math.round(weatherForecast.list[16].main.temp)}<sup>°C</sup>
            </div>
            <figure>
            <img class="weather-icon" src="${`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherForecast.list[16].weather[0]['icon']}.svg`}" >
            <figcaption>${weatherForecast.list[16].weather[0].description}</figcaption>
            </figure>`; 
     document.querySelector('.fifthday').innerHTML = `<h2 class="weekday">
                <span>${dateFns.format(weatherForecast.list[20].dt_txt, 'ddd')}  ${dateFns.format(weatherForecast.list[20].dt_txt, 'D-MM-YY')}</span>
            </h2>
            <div class="day-temp">
                ${Math.round(weatherForecast.list[20].main.temp)}<sup>°C</sup>
            </div>
            <figure>
            <img class="weather-icon" src="${`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weatherForecast.list[20].weather[0]['icon']}.svg`}" >
            <figcaption>${weatherForecast.list[20].weather[0].description}</figcaption>
            </figure>`; 
  
    

    
    
    
    
};

let inputElement=document.getElementById("search")
let searchBtn=document.getElementById("searchBtn")
let singleDayDiv=document.getElementById("singleDayData")
let forecastDiv=document.getElementById("forecastData")
let apiKey="195083ce216d426ad9736a07bcdf4041"

// search for single day forecast for selected city//

function searchWeather(event){
 event.preventDefault()
 singleDayDiv.innerHTML=""
 let city=inputElement.value
 let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

 fetch(url).then(response=>response.json()).then(data=>{
  console.log(data)

  let cityPara=document.createElement("p")
  cityPara.innerHTML=data.name

  let tempPara=document.createElement("p")
  tempPara.innerHTML=`Temperature - ${data.main.temp}`

  let windPara=document.createElement("p")
  windPara.innerHTML=`Wind Speed - ${data.wind.speed}`

  let humPara=document.createElement("p")
  humPara.innerHTML=`Humidity - ${data.main.humidity}`

singleDayDiv.append(cityPara,tempPara,windPara,humPara)

  getForecastData(city)
 })
}

// search for 5 day forecast for selected city//

function fiveDay(cityName){
forecastDiv.innerHTML=""
  let lat = data[0].lat;
  let lon = data[0].lon;
  getCurrentWeather(lat, lon);
let futureForecast=inputElement.value
let url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`

 fetch(url).then(response=>response.json()).then(data=>{
  console.log(data)

  let FutureCityPara=document.createElement("p")
  FutureCityPara.innerHTML=data.city.name

  let FutureTempPara=document.createElement("p")
  FutureTempPara.innerHTML=`Temperature - ${data.list.main.temp}`

  let FutureWindPara=document.createElement("p")
  FutureWindPara.innerHTML=`Wind Speed - ${data.list.wind.speed}`

  let FutureHumPara=document.createElement("p")
  FutureHumPara.innerHTML=`Humidity - ${data.list.main.humidity}`

forecastDiv.append(FutureCityPara,FutureTempPara,FutureWindPara,FutureHumPara)

  getForecastData(futureForecast)
  
 })

}

searchBtn.addEventListener("click",searchWeather)
let inputElement=document.getElementById("search")
let searchBtn=document.getElementById("searchBtn")
let singleDayDiv=document.getElementById("singleDayData")
let forecastDiv=document.getElementById("forecastData")
let apiKey="195083ce216d426ad9736a07bcdf4041"

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

function getForecastData(cityName){
 let url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`

 fetch(url).then(response=>response.json()).then(data=>{
  console.log(data)
 })

}

searchBtn.addEventListener("click",searchWeather)
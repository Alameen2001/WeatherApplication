

function findData(){
    let name=id_location.value;
    console.log(name);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric`)
    .then(res=>res.json()).then(data=>displayData(data))
}

function displayData(data){
    let weatherName=data.name
    let temperature=data.main.temp
    let description=data.weather[0].description
    let feelsLike=data.main.feels_like
    let windSpeed=data.wind.speed
    let pressure=data.main.pressure
    let humidity=data.main.humidity
    let minTemp=data.main.temp_min
    let maxTemp=data.main.temp_max


    let htmlData=`
    <div class="card">

    <h2>${weatherName}</h2>
    <h3>Cloudy<span>Wind ${windSpeed}km/h </h3>
    <h1>${temperature}°</h1>
    <div class="sky">
        <div class="sun"></div>
        <div class="cloud">
            <div class="circle-small"></div>
            <div class="circle-tall"></div>
            <div class="circle-medium"></div>
        </div>
    </div>
    <table>
        <tr>
            <td>TUE</td>
            <td>WED</td>
            <td>THU</td>
            <td>FRI</td>
            <td>SAT</td>
        </tr>
        <tr>
            <td>30°</td>
            <td>34°</td>
            <td>36°</td>
            <td>34°</td>
            <td>37°</td>
        </tr>
        <tr>
            <td>17°</td>
            <td>22°</td>
            <td>19°</td>
            <td>23°</td>
            <td>19°</td>
        </tr>
    </table>
</div>`

  document.querySelector('#id_result').innerHTML=htmlData

}

function fetchCurrentWeather(){
    navigator.geolocation.getCurrentPosition(p=>{fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6fa99e1f96f024f79970c5a3532b2ac6&units=metric&lat=${p.coords.latitude}&lon=${p.coords.longitude}`)
    .then(res=>res.json()).then(data=>displayData(data))})
}
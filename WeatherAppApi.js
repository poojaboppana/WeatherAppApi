async function checkWeather(){
    const apikey="a785cccf4e1840033b1a56eb47166845";
    const city= document.getElementById("city").value;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
try{
    const response=await fetch(url);
    const data= await response.json();

    document.getElementById("result").innerHTML = `
            <h2>City: ${data.name}, ${data.sys.country}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity} %</p>
            <p>🌥 Condition: ${data.weather[0].description}</p>
        `;
    document.getElementById("result").style.display="block";
    document.getElementById("WeatherAppApi").style.display="none";
}
catch(error){
alert("Enter your city name Properly");
}

}
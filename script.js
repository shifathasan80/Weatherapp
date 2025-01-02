let location = document.getElementById("location");
let image = document.getElementById("image1");
let temperature = document.getElementById("temperature");
let condition = document.getElementById("condition");
let humidity = document.getElementById("humidity");
let button = document.getElementById("button");

async function showWeather(){
    let city = location.value;
    let APIkey = "7413326f84cb26edf5963786eb8a39c6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

    try{
        let jData = await fetch(url);
        let data = jData.json();
        console.log(data);
    }

    catch{
        
    }
}

button.addEventListener(function(){
        showWeather();
})





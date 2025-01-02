let location1 = document.getElementById("location1");
let image = document.getElementById("image1");
let temperature = document.getElementById("temperature");
let condition = document.getElementById("condition");
let humidity = document.getElementById("humidity");
let button = document.getElementById("button");

async function showWeather(){
    let city = location1.value;
    let APIkey = "7413326f84cb26edf5963786eb8a39c6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;

    try{
        let data = await fetch(`${url}`).then((r)=>{
            return r.json();
        });
        // let data = jData.json();
        console.log(data);
        let tmp = Math.round(data.main.temp-273.15);
        let hum1 = data.main.humidity;
        let cdn = data.weather[0].description;
        temperature.innerHTML = `<p>${tmp}<sup>°C</sup></p>`;
        humidity.innerHTML = `<p>${hum1}%</p>`
        condition.innerHTML= `<p>${cdn}</p>`
    }

    catch(error){
        console.log(error);
    }
}

button.addEventListener('click',function(){
        showWeather();
})





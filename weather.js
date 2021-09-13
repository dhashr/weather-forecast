//Complete the Weather API Backend part using openweathermap api
let weatherapi_key = "b8b2776bbcaa753416890ca944ce3f84";
let message = document.querySelector(".location");
document.querySelector("#search").addEventListener("click", weatherreport);
function weatherreport(){
    let city = document.querySelector("#input").value;
    console.log(city);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapi_key}`;
    fetch(url)
    .then(report => report.json())
    .then(data =>{
        console.log(data);
        document.querySelector(".city").innerHTML = data.name + ",IN";
        document.querySelector(".date").innerHTML = whole_date;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".weather").innerHTML = data.weather[0].main;
        document.querySelector(".hi-low").innerHTML = data.main.temp_min + "°c"  +"/"+ data.main.temp_max + "°c";

    })
    .catch(()=>{
       message.innerHTML = "Enter the City name"    
    })
}

    let livetime = new Date();
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let days = weekdays[livetime.getDay()]; 
    let date = livetime.getDate();
    let month = livetime.getMonth();
    let year = livetime.getFullYear();
    let whole_date = days + " " + date + " " + month + " " + year;


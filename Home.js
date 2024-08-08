import { state } from "./states.js";

let locationElement = document.getElementById('location');
let tempElement = document.getElementById('temp');
let temp_feelElement = document.getElementById('feels_temp');
let humidityElement = document.getElementById('humidity');
let pressureElement = document.getElementById('pressure');
let weatherElement = document.getElementById('weather');
let plot = document.getElementById('plot');
let mapsvg = document.querySelector('.mapsvg');
const Weather_Key = 'c06916410713c0d8335731f656ff0161'; 
const Location_Key = '6688ef88daa147eb8a077d89b1193c8c';

//const img_path = './images/rain_plot.png';
// plot.src = img_path;

if (navigator.geolocation) {    
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        
        //Fetch the current location using reverse geocoding
        fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&type=city&lang=en&limit=3&format=json&apiKey=${Location_Key}`)
        .then(response => response.json())
        .then(result => locationElement.textContent = `Location : ${result.results[0].county}, ${result.results[0].state}`)
        .catch(error => console.log('error', error));

        // Fetch weather data using OpenWeatherMap API
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${Weather_Key}`)
            .then(response => response.json())
            .then(data => {
                const temperature = data.main.temp;
                const feels_temp = data.main.feels_like;
                const humid = data.main.humidity;
                const pressure = data.main.pressure;
                const weather = data.weather[0].description;
                weatherElement.textContent = `Weather : ${weather}`;
                tempElement.textContent = `Temperature : ${temperature} °C`;
                temp_feelElement.textContent = `Feels Like : ${feels_temp} °C`;
                humidityElement.textContent = `Humidity : ${humid} %`;
                pressureElement.textContent = `Air Pressure : ${pressure} hPa`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                tempElement.textContent = 'Error fetching weather data.';
            });
        },error => {
        console.error('Error getting location:', error);
        locationElement.textContent = 'Unable to retrieve location.';
    });
}    
else {
    locationElement.textContent = 'Geolocation is not supported by this browser.';
}

let state_id = document.getElementById('states');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let about = document.getElementById('about');
let services = document.getElementById('services');
let contact = document.getElementById('contact');

document.getElementById('search').addEventListener('click',()=>{
    if(state_id.value === '')
        alert('Please select a valid state');
    else{
        mapsvg.style.display = "none";
        about.style.display = 'none';
        services.style.display = 'none';
        contact.style.display = 'none';
        if(state_id.value === 'andaman & nicobar'){
            plot.src = state[0].img_path;
        }
        else if(state_id.value === 'andhra pradesh'){
            plot.src = state[1].img_path;
        }
        else if(state_id.value === 'arunachal pradesh'){
            plot.src = state[2].img_path;
        }
        else if(state_id.value === 'assam'){
            plot.src = state[3].img_path;
        }
        else if(state_id.value === 'bihar'){
            plot.src = state[4].img_path;
        }
        else if(state_id.value === 'chandigarh'){
            plot.src = state[5].img_path;
        }
        else if(state_id.value === 'chhattisgarh'){
            plot.src = state[6].img_path;
        } 
        else if(state_id.value === 'dadra & nagar'){
            plot.src = state[7].img_path;
        }
        else if(state_id.value === 'daman & diu'){
            plot.src = state[8].img_path;
        }
        else if(state_id.value === 'delhi'){
            plot.src = state[9].img_path;
        }
        else if(state_id.value === 'goa'){
            plot.src = state[10].img_path;
        }
        else if(state_id.value === 'gujarat'){
            plot.src = state[11].img_path;
        }
        else if(state_id.value === 'haryana'){
            plot.src = state[12].img_path;
        }
        else if(state_id.value === 'himachal pradesh'){
            plot.src = state[13].img_path;
        }
        else if(state_id.value === 'jharkhand'){
            plot.src = state[14].img_path;
        }
        else if(state_id.value === 'karnataka'){
            plot.src = state[15].img_path;
        }
        else if(state_id.value === 'kerala'){
            plot.src = state[16].img_path; 
        }
        else if(state_id.value === 'lakshadweep'){
            plot.src = state[17].img_path;  
        }
        else if(state_id.value === 'madhya pradesh'){
            plot.src = state[18].img_path;
        }
        else if(state_id.value === 'maharashtra'){
            plot.src = state[19].img_path; 
        }
        else if(state_id.value === 'manipur'){
            plot.src = state[20].img_path; 
        }
        else if(state_id.value === 'meghalaya'){
            plot.src = state[21].img_path; 
        }
        else if(state_id.value === 'mizoram'){
            plot.src = state[22].img_path;
        }
        else if(state_id.value === 'nagaland'){
            plot.src = state[23].img_path;
        }
        else if(state_id.value === 'odisha'){
            plot.src = state[24].img_path;
        }
        else if(state_id.value === 'puducherry'){
            plot.src = state[25].img_path;
        }
        else if(state_id.value === 'punjab'){
            plot.src = state[26].img_path;
        }
        else if(state_id.value === 'rajasthan'){
            plot.src = state[27].img_path;
        }
        else if(state_id.value === 'sikkim'){
            plot.src = state[28].img_path;  
        }
        else if(state_id.value === 'tamil nadu'){
            plot.src = state[29].img_path;  
        }
        else if(state_id.value === 'telangana'){
            plot.src = state[30].img_path;
        }
        else if(state_id.value === 'tripura'){
            plot.src = state[31].img_path; 
        }
        else if(state_id.value === 'uttar pradesh'){
            plot.src = state[32].img_path;
        }
        else if(state_id.value === 'uttarakhand'){
            plot.src = state[33].img_path; 
        }
        else if(state_id.value === 'west bengal'){
            plot.src = state[34].img_path; 
        }
        else if(state_id.value === 'india'){
            mapsvg.style.display = 'block';
            plot.style.display = 'none';
            result.style.display = 'none';
            result2.style.display = 'none';
        }
        else{
            alert('Invalid Choice! Try Again');
        }
    }
});

document.querySelector('.link-list-about').addEventListener('click',()=>{ 
    mapsvg.style.display = 'none';
    about.style.display = 'block';
    services.style.display = 'none';
    contact.style.display = 'none';
    result.style.display = 'none';
    result2.style.display = 'none';
    plot.style.display = 'none';
    
    document.getElementById('search').addEventListener('click',()=>{
        plot.style.display = 'block';
        result.style.display = 'block';
        result2.style.display = 'block';
        
        if(state_id.value === 'india'){
            mapsvg.style.display = 'block';
            plot.style.display = 'none';
            result.style.display = 'none';
            result2.style.display = 'none';
        }
    });

});

document.querySelector('.link-list-services').addEventListener('click',()=>{ 
    mapsvg.style.display = 'none';
    about.style.display = 'none';
    services.style.display = 'block';
    contact.style.display = 'none';
    result.style.display = 'none';
    result2.style.display = 'none';
    plot.style.display = 'none';
    
    document.getElementById('search').addEventListener('click',()=>{
        plot.style.display = 'block';
        result.style.display = 'block';
        result2.style.display = 'block';

        if(state_id.value === 'india'){
            mapsvg.style.display = 'block';
            plot.style.display = 'none';
            result.style.display = 'none';
            result2.style.display = 'none';
        }
    });
});

document.querySelector('.link-list-contact').addEventListener('click',()=>{ 
    mapsvg.style.display = 'none';
    about.style.display = 'none';
    services.style.display = 'none';
    contact.style.display = 'block';
    result.style.display = 'none';
    result2.style.display = 'none';
    plot.style.display = 'none';

    document.getElementById('search').addEventListener('click',()=>{
        plot.style.display = 'block';
        result.style.display = 'block';
        result2.style.display = 'block';

        if(state_id.value === 'india'){
            mapsvg.style.display = 'block';
            plot.style.display = 'none';
            result.style.display = 'none';
            result2.style.display = 'none';
        }
    });
});
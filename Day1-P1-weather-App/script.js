const key= "65305dfce8e142bf272ef6a701fec10b";
let url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let img=document.querySelector('.wheathericons')
console.log(img);

let input=document.querySelector("#search");
let button=document.querySelector('#button')

async function checkwheather (city){
let response=await fetch(url+ city+ `&appid=${key}`)
var data =await response.json();
console.log(data);

document.querySelector('.city').innerHTML=data.name;
document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector('.humidity-text').innerHTML=data.main.humidity+"%";
document.querySelector('.wind-text').innerHTML=data.wind.speed+" Km/Hr";

if(data.weather[0].main=="Clouds"){
  img.src='images/clouds.png'
}
else if(data.weather[0].main=="Clear"||"Haze"){
    img.src='images/clear.png'
}
else if(data.weather[0].main=="Rain"){
    img.src='images/rain.png'
}
else if(data.weather[0].main=="Drizzle"){
    img.src='images/drizzle.png'
}
else if(data.weather[0].main=="Snow"){
    img.src='images/snow.png'
}
else if(data.weather[0].main=="Mist"){
    img.src='images/mist.png'
}


}

button.addEventListener('click',function(e){
    e.preventDefault();
    checkwheather(input.value)

})





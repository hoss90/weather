const bg =document.getElementById("bg");
const wather =document.getElementById("weather");
const date =document.getElementById("date");
const t =document.getElementById("temp");
const l =document.getElementById("location");
const contain =document.getElementById("contain");
const dashed =document.getElementById("dashed");
const weather_img =document.getElementById("weather_img");

var request= new XMLHttpRequest();
request.onreadystatechange=function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status==200){
        var reponse=JSON.parse(this.responseText);
        wather.textContent=reponse.current.condition.text;
       t.textContent=reponse.current.temp_c +"C";
       l.textContent=reponse.location.name;
       date.textContent=reponse.location.localtime;
     if (reponse.current.condition.text==="Clear"||reponse.current.condition.text==="Sunny"){
         weather_img.src="sun.png";
     }
     else if(reponse.current.condition.text==="cloudy"||reponse.current.condition.text==="Overcast"||reponse.current.condition.text==="Partly cloudy") {weather_img.src="cloud.png";}
     else if(reponse.current.condition.text==="Light rain"||reponse.current.condition.text==="Moderate rain at times"||reponse.current.condition.text==="Moderate rain"||reponse.current.condition.text==="Heavy rain") {weather_img.src="rain.png";}

       if (reponse.current.is_day===0){
           contain.style.backgroundImage="url('nuit.png')";
       }
    else{contain.style.backgroundImage="url('jour.png')";}
    
    }
};
     const town = document.getElementById("pays");
     town.addEventListener('input', updateValue);

function updateValue(e) {
request.open('GET','http://api.weatherapi.com/v1/current.json?key=%20f506557b7a2a4c71b68102310211506&q='+e.target.value+'&aqi=no');
request.send();
};

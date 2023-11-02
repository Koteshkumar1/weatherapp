const apiKey= "e9f8cb4916e529ce3ce4fa72daa7da16";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".inputdiv input");
const searchBtn = document.querySelector(".inputdiv button");
const weatherIcon = document.querySelector(".weather-Icon1");


//change time zone
var otime;



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".locName1").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".weather-Type").innerHTML = data.weather[0].main;
    document.querySelector(".value").innerHTML = data.main.humidity +"%";
    document.querySelector(".wValue").innerHTML = data.wind.speed +" km/h";
    // document.querySelector(".tZone").innerHTML = data.timezone +" km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./assets/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./assets/images/clear22.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./assets/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./assets/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./assets/images/cmist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./assets/images/snow.png";
        }

        //CHANGING TIME ZONE
        otime = data.sys.country

        //calling timezone function
        timeZone();

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    // checkWeather();
});
function timeZone()
{
    var date= new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    // var ms=date.getMilliseconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
var tz=date.getTimezoneOffset();
var am_pm="AM"
if(hh>=12)
{
    am_pm="PM"
    if(hh>12)
    {
        hh-=12;
    }
}
// if(hh==0)
// {
//     hh=12;
// }


//minutes
if(mm>=0 && mm<10)
{
    mm=`0${mm}`
}

//second
if(ss>=0 && ss<10)
{
    ss=`0${ss}`
}

//months
if(mo==0)
{
    mo="Jan"
}
else if(mo==1)
{
    mo="Feb"
}
else if(mo==2)
{
    mo="Mar"
}
else if(mo==3)
{
    mo="Apr"
}
else if(mo==4)
{
    mo="May"
}
else if(mo==5)
{
    mo="Jun"
}
else if(mo==6)
{
    mo="Jul"
}
else if(mo==7)
{
    mo="Aug"
}
else if(mo==8)
{
    mo="Sep"
}
else if(mo==9)
{
    mo="Oct"
}
else if(mo==10)
{
    mo="Nov"
}
else
{
    mo="Dec"
}



    //change time zone

    //india
    console.log(otime)
    if(otime=="IN")
    {
        var fulltime=document.getElementById("TimeZone").innerHTML=`${dt}/${mo}/${yy} ${hh}:${mm} ${am_pm}`
        console.log(fulltime)
    }

    //america
    if(otime=="US")
    {
        am_pm="AM"
        hh=hh+12;
        mm=mm+30;
        if (mm>59)
        {
            mm=mm-59;
        }
         //changing to positive
         if (mm<0)
         {
             mm=(mm+mm)-mm;
         }
        hh=hh-9;
        if(hh>=12)
        {
            am_pm="PM"
            if(hh>12)
            {
                hh-=12;
            }
        }
        var fulltime=document.getElementById("TimeZone").innerHTML=`${dt}/${mo}/${yy} ${hh}:${mm} ${am_pm}`
        console.log(fulltime)
    }
    //russia
    console.log(mm)
    if(otime=="RU")
    {
        am_pm="AM"
        hh=hh+12;
        hh=hh-2;
        mm = Number(mm)-30;
        console.log(mm)

        //changig to clock minutes
        if (mm>59)
        {
            mm=mm-59;
        }
        //changing to positive
        if (mm<0)
        {
            mm=(mm+mm)-mm;
        }
        if(hh>=12)
        {
            am_pm="PM"
            if(hh>12)
            {
                hh-=12;
            }
        }

        console.log(hh,mm)
        var fulltime=document.getElementById("TimeZone").innerHTML=`${dt}/${mo}/${yy} ${hh}:${mm} ${am_pm}`
        console.log(fulltime)
    }
    //austrila
    if(otime=="AU")
    {
        am_pm="AM"
        hh=hh+12;
        mm = Number(mm)+30;
        if (mm>59)
        {
            mm=mm-59;
        }
         //changing to positive
         if (mm<0)
         {
             mm=(mm+mm)-mm;
         }
        hh=hh+5;
        if(hh>=12)
        {
            am_pm="PM"
            if(hh>12)
            {
                hh-=12;
            }
        }
        var fulltime=document.getElementById("TimeZone").innerHTML=`${dt}/${mo}/${yy} ${hh}:${mm} ${am_pm}`
        console.log(fulltime)
    }
    //china
    console.log(otime)
    console.log(mm)
    if(otime=="MX")
    {
        am_pm="AM"
        hh=hh+12;
        hh=hh+2;
        console.log(mm)
        mm = Number(mm)+30;
        
        if (mm>59)
        {
            mm=mm-59;
        }
         //changing to positive
         if (mm<0)
         {
             mm=(mm+mm)-mm;
         }
        if(hh>=12)
        {
            am_pm="PM"
            if(hh>12)
            {
                hh-=12;
            }
        }
        console.log(hh,mm)
        var fulltime=document.getElementById("TimeZone").innerHTML=`${dt}/${mo}/${yy} ${hh}:${mm} ${am_pm}`
        console.log(fulltime)
    }
}



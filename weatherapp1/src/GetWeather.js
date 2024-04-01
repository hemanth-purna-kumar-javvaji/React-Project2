import React,{useState} from 'react'
import './Getweather.css';
function GetWeather() {
  const[city1,setcity]=useState("");
  const[weatherdata,setweatherdata]=useState([]);
    async function Weatherdata1() {
      try{
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=dcb4eeeba0d827bd785518b0cf6c76bf`);
        let finaldata= await data.json();
        setweatherdata(finaldata);
        document.getElementById('cityname').value="";
        console.log(weatherdata);
    }
    catch(error){
      console.log("fetching error",error);
    }
  }
  return (
    <div className='weatherreport'>
        <form>
            <input id='cityname' type='text' placeholder='Enter the city name' onChange={(e)=>{
              e.preventDefault();
              setcity(e.target.value)
              }} />
              <input id='weatherbtn' type='button' value="GetWeather" onClick={Weatherdata1} />
        </form>
        {
           weatherdata.main && weatherdata.wind && 
          <div className='weatherdata'>
              <h1>Temperature in {city1}</h1>
              <h3>Temaperature:{weatherdata.main.temp}</h3>
              <h3>Humidity:{weatherdata.main.humidity}</h3>
              <h3>Pressure:{weatherdata.main.pressure}</h3>
              <h3>Wind Speed:{weatherdata.wind.speed}m/s</h3>
          </div>
        }     
    </div>
  )
}

export default GetWeather

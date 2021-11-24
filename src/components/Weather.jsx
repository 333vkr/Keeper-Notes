import React, { useEffect, useState } from "react";

const Weather = () => {
  const apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?zip=679328,in&units=metric&appid=" +
    apiKey;
    let  cityName = "";
    let  temperature="";

  const [weatherData, setWeatherData] = useState([{}]);
  const [isFetched , setIsFetched] = useState(false)

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setIsFetched(true);

        console.log("executed data API inside .then");
      });
  }, [apiURL]);

  const loading = "Loading..";

  
    if(isFetched)
    {
      cityName = weatherData.name;
      temperature =weatherData.main.temp;
    }
  

  return (
    <div>
      {console.log(weatherData.main)}
      <p>
        Weather at {isFetched ?`${cityName}: ${temperature}° C`: loading}
        {console.log("Rendered p tag inside return ")}
      </p>
    </div>
  );
};

export default Weather;

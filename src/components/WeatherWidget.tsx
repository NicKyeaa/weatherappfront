import React, { useState } from "react";
import axios from "axios";
import { Card, Space, Input, Typography } from "antd";

const { Title, Text } = Typography;
const { Search } = Input;

const WeatherWidget: React.FC = () => {
  interface weatherData {
    temperature: number;
  }

  const [location, setLocation] = useState("City");
  const [weatherData, setWeatherData] = useState({ temperature: 0 });

  // Fetching the lat,long for the location
  const fetchLocation = async (locationString: string) => {
    // Declaring a URL variable
    const geocodingURL: string =
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      encodeURI(locationString) +
      "&count=10&language=en&format=json";

    // Fetching the data
    const resultLocation = await axios.get(geocodingURL);
    // console.log(resultLocation);
    setLocation(locationString);

    // Returning the lat and longitute
    const lattitude: string = resultLocation.data.results[0].latitude;
    const longitude: string = resultLocation.data.results[0].longitude;
    const returnArray = { lattitude, longitude };
    console.log(returnArray);

    return returnArray;
  };

  // Fetching the weather forecast data after getting the lat and longitute
  const fetchWeatherForecast = async (locationString: string) => {
    // Getting the lat and long results
    const { lattitude, longitude } = await fetchLocation(locationString);

    // Declaring a URL variable with the results from geocoding func
    const weatherForecastURL: string =
      "https://api.open-meteo.com/v1/forecast?latitude=" +
      encodeURI(lattitude) +
      "&longitude=" +
      encodeURI(longitude) +
      "&hourly=temperature_2m&current_weather=true&forecast_days=1";
    // Fetching the data
    const resultWeatherForecast = await axios.get(weatherForecastURL);
    setWeatherData(resultWeatherForecast.data.current_weather);
    console.log(weatherData);
  };

  return (
    <>
      <Space direction='vertical'>
        <Search
          placeholder='Select city'
          enterButton
          onSearch={fetchWeatherForecast}
        ></Search>
        <Card>
          <Title level={3}>{location}</Title>
          <Text>{weatherData.temperature}&deg;C</Text>
          <Text></Text>
        </Card>
      </Space>
    </>
  );
};

export default WeatherWidget;

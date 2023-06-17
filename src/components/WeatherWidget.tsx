import React, { useState } from "react";
import axios from "axios";
import { Card, Space, Input, Typography } from "antd";

const { Title } = Typography;
const { Search } = Input;

const WeatherWidget: React.FC = () => {
  const [location, setLocation] = useState("City");

  // Fetching the lat,long for the location
  const fetchLocation = async (locationText: string) => {
    // Declaring a URL variable
    const geocodingURL: string =
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      encodeURI(locationText) +
      "&count=10&language=en&format=json";

    // Fetching the data
    const resultLocation = await axios.get(geocodingURL);
    console.log(resultLocation);
    setLocation(locationText);

    // Returning the lat and longitute
    const lattitude: number = resultLocation.data.results[0].latitude;
    const longitude: number = resultLocation.data.results[0].longitude;
    const returnArray = [lattitude, longitude];
    console.log(resultLocation.data.results[0]);

    return returnArray;
  };

  return (
    <>
      <Space direction='vertical'>
        <Search
          placeholder='Select city'
          enterButton
          onSearch={fetchLocation}
        ></Search>
        <Card>
          <Title level={3}>{location}</Title>
        </Card>
      </Space>
    </>
  );
};

export default WeatherWidget;

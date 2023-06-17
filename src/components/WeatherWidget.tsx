import React, { useState } from "react";
import axios from "axios";
import { Card, Space, Input, Typography } from "antd";

const { Title } = Typography;
const { Search } = Input;

const WeatherWidget: React.FC = () => {
  const [location, setLocation] = useState("City");

  // Fetching the lat,long for the location
  const fetchLocation = async (locationText: string) => {
    console.log(locationText);
    const geocodingURLString: string =
      "https://geocoding-api.open-meteo.com/v1/search?name=" +
      locationText +
      "&count=10&language=en&format=json";
    const encodedGeocodingURL = encodeURIComponent(geocodingURLString);
    const resultLocation = await axios.get(encodedGeocodingURL);
    console.log(resultLocation);
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

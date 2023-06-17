import React, { useState } from "react";
import axios from "axios";
import { Card, Space, Input, Typography } from "antd";

const { Title } = Typography;
const { Search } = Input;

const WeatherWidget: React.FC = () => {
  const [location, setLocation] = useState("");

  // Fetching the lat,long for the location
  const fetchLocation = async () => {
    const geocodingURL: URL = new URL(
      "https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json"
    );
    const resultLocation = await axios.get("");
  };

  return (
    <>
      <Space direction='vertical'>
        <Search placeholder='Select city' enterButton></Search>
        <Card>
          <Title level={3}>{location}</Title>
        </Card>
      </Space>
    </>
  );
};

export default WeatherWidget;

import React from "react";
import { Card, Space, Input, Typography } from "antd";

const { Title } = Typography;
const { Search } = Input;

const WeatherWidget: React.FC = () => {
  return (
    <>
      <Space direction='vertical'>
        <Search placeholder='Select city' enterButton></Search>
        <Card>
          <Title level={3}>Karlovac</Title>
        </Card>
      </Space>
    </>
  );
};

export default WeatherWidget;

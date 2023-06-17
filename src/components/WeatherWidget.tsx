import React from "react";
import { Card, Space, Input, Typography } from "antd";

const { Title } = Typography;

const WeatherWidget: React.FC = () => {
  return (
    <>
      <Space direction='vertical'>
        <Input placeholder='Select city'></Input>
        <Card title='Weather forecast'>
          <Title></Title>
        </Card>
      </Space>
    </>
  );
};

export default WeatherWidget;

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend,
  Filler
);

export const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const history = coinHistory?.data?.history ?? [];

  const coinPrice = history.map((item) => item.price);
  const coinTimestamp = history.map((item) =>
    new Date(item.timestamp * 1000).toLocaleDateString()
  );

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice.reverse(),
        fill: true,
        backgroundColor: 'rgba(0, 113, 189, 0.1)',
        borderColor: '#0071bd',
        pointBackgroundColor: '#0071bd',
        pointRadius: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#222',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 10,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#666',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          color: '#666',
        },
        grid: {
          borderDash: [4, 4],
          color: 'rgba(0,0,0,0.05)',
        },
      },
    },
  };

  return (
    <div style={{ padding: '1rem 0' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: '1rem' }}>
        <Col>
          <Title level={3} style={{ marginBottom: 0 }}>
            {coinName} Price Chart
          </Title>
        </Col>
        <Col style={{ textAlign: 'right' }}>
          <Title level={5} style={{ margin: 0, color: '#52c41a' }}>
            {coinHistory?.data?.change}% change
          </Title>
          <Title level={5} style={{ margin: 0 }}>
            Current Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </div>
  );
};

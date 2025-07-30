import React, { useState } from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import {
  Row,
  Col,
  Typography,
  Statistic,
  Card,
  Space,
  Tooltip,
  Select,
} from 'antd';
import {
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  MoneyCollectOutlined,
  GlobalOutlined,
  GithubOutlined,
  RedditOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import { useParams } from 'react-router-dom';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import { LineChart, Loader } from '../components';

const { Title, Text } = Typography;
const { Option } = Select;

export const CryptoDetails = () => {
  const {coinId}=useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  console.log(coinId) ;
  const { data, isLoading, error } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(data);
  const {
    data: coinHistory,
    isFetching: isHistoryLoading,
  } = useGetCryptoHistoryQuery({ coinId, timePeriod }, { skip: !cryptoDetails?.uuid });

  if (isLoading || isHistoryLoading) return <Loader />;
  if (error || !cryptoDetails) return <div>Error loading crypto details.</div>;

  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${millify(cryptoDetails.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: 'Rank', value: cryptoDetails.rank, icon: <TrophyOutlined /> },
    {
      title: 'Market Cap',
      value: `$ ${millify(cryptoDetails.marketCap)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'All-time-high (daily avg.)',
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <FundOutlined />,
    },
    {
      title: 'Number Of Markets',
      value: cryptoDetails.numberOfMarkets,
      icon: <MoneyCollectOutlined />,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails.numberOfExchanges,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: 'Approved Supply',
      value: cryptoDetails.supply?.confirmed ? 'Yes' : 'No',
      icon: <StopOutlined />,
    },
    {
      title: 'Total Supply',
      value: `$ ${millify(cryptoDetails.supply?.total)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${millify(cryptoDetails.supply?.circulating)}`,
      icon: <DollarCircleOutlined />,
    },
  ];

  const iconMap = {
    website: <GlobalOutlined />,
    github: <GithubOutlined />,
    reddit: <RedditOutlined />,
    twitter: <TwitterOutlined />,
    youtube: <YoutubeOutlined />,
    facebook: <FacebookOutlined />,
  };

  return (
    <Col className="coin-detail-container" style={{ padding: '2rem' }}>
      <Col className="coin-heading-container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Title level={2}>
          {cryptoDetails.name} ({cryptoDetails.symbol}) Price
        </Title>
        <Text>
          {cryptoDetails.name} live price in USD. View value statistics, market cap and supply.
        </Text>
      </Col>

      <Row justify="center" style={{ marginBottom: '2rem' }}>
        <Col xs={24} md={20}>
          <Card
            title={`${cryptoDetails.name} Price Chart`}
            hoverable
            style={{ borderRadius: '12px' }}
            extra={
              <Select
                defaultValue={timePeriod}
                style={{ width: 120 }}
                onChange={(value) => setTimePeriod(value)}
              >
                {['3h', '24h', '7d', '30d', '1y', '3m', '5y'].map((period) => (
                  <Option key={period} value={period}>{period}</Option>
                ))}
              </Select>
            }
          >
            <LineChart
              coinHistory={coinHistory}
              currentPrice={millify(cryptoDetails.price)}
              coinName={cryptoDetails.name}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={12}>
          <Card title="Value Statistics" hoverable style={{ borderRadius: '12px' }}>
            {stats.map(({ icon, title, value }) => (
              <Col key={title} style={{ marginBottom: '1rem' }}>
                <Statistic title={title} value={value} prefix={icon} />
              </Col>
            ))}
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Other Stats" hoverable style={{ borderRadius: '12px' }}>
            {genericStats.map(({ icon, title, value }) => (
              <Col key={title} style={{ marginBottom: '1rem' }}>
                <Statistic title={title} value={value} prefix={icon} />
              </Col>
            ))}
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: '2rem' }} justify="center">
        <Col xs={24} md={20}>
          <Card
            title={`What is ${cryptoDetails.name}?`}
            hoverable
            style={{ borderRadius: '12px' }}
          >
            <Text>{HTMLReactParser(cryptoDetails.description || '')}</Text>
          </Card>
        </Col>
      </Row>

      {cryptoDetails.links?.length > 0 && (
        <Row style={{ marginTop: '2rem' }} justify="center">
          <Col xs={24} md={20}>
            <Card title="Official & Social Links" hoverable style={{ borderRadius: '12px' }}>
              <Space wrap>
                {cryptoDetails.links.map((link, index) => {
                  const { type, url, name } = link;
                  const lowercaseType = type.toLowerCase();
                  const icon = iconMap[lowercaseType] || <GlobalOutlined />;

                  return (
                    <Tooltip title={url} key={index}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '8px 12px',
                          background: '#f9f9f9',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          color: '#000',
                          fontWeight: 500,
                          transition: 'all 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)')
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
                      >
                        {icon}
                        {name}
                      </a>
                    </Tooltip>
                  );
                })}
              </Space>
            </Card>
          </Col>
        </Row>
      )}
    </Col>
  );
};

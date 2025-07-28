import React from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { Typography, Row, Col, Statistic,Card } from 'antd';

const {Title}=Typography;
export const Homepage = () => {
  return (
    <>
    <div className="container" style={{ padding: "2rem 1rem" }}>
      <Title level={2} className="heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        🌐 Global Crypto Stats
      </Title>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card variant hoverable>
            <Statistic title="Total Cryptocurrencies" value={5000} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card variant hoverable>
            <Statistic title="Total Exchanges" value={250} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card variant hoverable>
            <Statistic title="Total Market Cap" value="$1.2T" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card variant hoverable>
            <Statistic title="Total 24h Volume" value="$90B" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card variant hoverable>
            <Statistic title="Total Markets" value={12000} />
          </Card>
        </Col>
      </Row>
    </div>
    </>
  )
}

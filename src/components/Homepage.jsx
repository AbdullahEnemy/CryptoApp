import React from "react";
import { Link } from "react-router-dom";
import millify from "millify"; //using it to connvert large number in to readable ones
import { Typography, Row, Col, Statistic, Card } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
const { Title } = Typography;
import { Cryptocurrencies, News } from "../components";
export const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  if (isFetching) return "loading";
  return (
    <>
      <div className="container" style={{ padding: "2rem 1rem" }}>
        <Title
          level={2}
          className="heading"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          🌐 Global Crypto Stats
        </Title>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card variant hoverable>
              <Statistic
                title="Total Cryptocurrencies"
                value={globalStats.total}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card variant hoverable>
              <Statistic
                title="Total Exchanges"
                value={millify(globalStats.totalExchanges)}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card variant hoverable>
              <Statistic
                title="Total Market Cap"
                value={millify(globalStats.totalMarketCap)}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card variant hoverable>
              <Statistic
                title="Total 24h Volume"
                value={millify(globalStats.total24hVolume)}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card variant hoverable>
              <Statistic
                title="Total Markets"
                value={millify(globalStats.totalMarkets)}
              />
            </Card>
          </Col>
        </Row>
        {/* --- Top 10 Cryptos Section --- */}
        <div
          className="home-heading-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          <Title level={2} className="home-title" style={{ margin: 0 }}>
            🚀 Top 10 Cryptocurrencies
          </Title>
          <Link
            to="/cryptocurrencies"
            style={{ fontWeight: "500", fontSize: "16px" }}
          >
            Show More →
          </Link>
        </div>
        <Cryptocurrencies simplified />

        {/* --- Latest News Section --- */}
        <div
          className="home-heading-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "3rem",
            marginBottom: "1rem",
          }}
        >
          <Title level={2} className="home-title" style={{ margin: 0 }}>
            📰 Latest Crypto News
          </Title>
          <Link to="/news" style={{ fontWeight: "500", fontSize: "16px" }}>
            Show More →
          </Link>
        </div>
        <News simplified />
      </div>
    </>
  );
};

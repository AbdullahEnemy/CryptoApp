import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { Typography, Row, Col, Statistic, Card, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { SmileFilled } from "@ant-design/icons";

const { Title } = Typography;

export const Cryptocurrencies = ({simplified}) => {
    const count=simplified?10:100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count); // Get top 100 by default
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <div style={{ padding: "1rem 0" }}>
        {/* <Title level={2} style={{ textAlign: "center", marginBottom: "1rem" }}>
          🔍 Browse Cryptocurrencies
        </Title>
        <Input
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: "2rem", width: "100%" }}
        /> */}
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.uuid}
            >
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} style={{ width: "30px" }} />}
                  hoverable
                >
                  <p>💰 Price: {millify(currency.price)}</p>
                  <p>🏦 Market Cap: {millify(currency.marketCap)}</p>
                  <p>📈 Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

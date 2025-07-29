import React, { useEffect } from 'react';
import moment from 'moment';
import { Typography, Row, Col, Card, Avatar } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { Loader } from '../components';

const { Text, Title } = Typography;

export const News = ({ simplified }) => {
  const { data: cryptoNews, isLoading, error } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 10 : 100,
  });

  const newsList = Array.isArray(cryptoNews)
    ? cryptoNews
    : cryptoNews?.data || cryptoNews?.value || [];

  // Limit to 10 if simplified//Limiting it manually as api does not support limit feature 
  const limitedNews = simplified ? newsList.slice(0, 10) : newsList;
  useEffect(() => {
    if (limitedNews.length > 0) {
      console.log('Fetched news:', limitedNews);
    }
    if (error) {
      console.error('Error fetching news:', error);
    }
  }, [limitedNews, error]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading news.</div>;
  if (!limitedNews.length) return <div>No news available.</div>;

  return (
    <Row gutter={[24, 24]} align="stretch">
      {limitedNews.map((news, i) => {
        const providerName = news?.provider?.[0]?.name || 'Crypto Daily';
        const providerImage =
          news?.provider?.[0]?.image?.thumbnail?.contentUrl ||
          'https://cryptodaily.co.uk/favicon.ico';

        return (
          <Col xs={24} sm={12} lg={8} key={i} style={{ display: 'flex' }}>
            <Card
              hoverable
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <a
                href={news.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
                aria-label={`Read more about ${news.title}`}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <Title level={4} style={{ flex: 1 }}>{news.title}</Title>
                  <img
                    src={news.thumbnail || 'https://via.placeholder.com/100'}
                    alt={news.title}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>

                <p
                  style={{
                    marginTop: '0.5rem',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {news.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Avatar src={providerImage} alt={providerName} />
                    <Text className="provider-name">{providerName}</Text>
                  </div>
                  <Text>{moment(news.createdAt).fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

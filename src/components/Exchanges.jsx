import React from 'react';
import { Typography, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const Exchanges = () => {
  return (
    <div
      style={{
        height: '80vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
      }}
    >
      <Card
        style={{
          maxWidth: 600,
          width: '100%',
          borderRadius: '20px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          border: 'none',
          padding: '3rem 2rem',
          textAlign: 'center',
        }}
      >
        <StopOutlined style={{ fontSize: '64px', color: '#ff4d4f', marginBottom: '1rem' }} />
        <Title level={2}>Exchange Data Unavailable</Title>
        <Text type="secondary" style={{ fontSize: '16px' }}>
          Sorry, exchange information cannot be displayed because it is not available under the current API subscription plan.
        </Text>
      </Card>
    </div>
  );
};

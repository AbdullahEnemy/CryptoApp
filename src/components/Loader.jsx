import React from 'react'
import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title } = Typography;

const antIcon = (
  <LoadingOutlined style={{ fontSize: 48, color: '#1890ff' }} spin />
);

export const Loader = () => {
  return (
    <>
        <div style={styles.container}>
      <Spin indicator={antIcon} />
      <Title level={3} style={{ marginTop: '1rem', color: '#555' }}>
        Fetching real-time crypto data...
      </Title>
    </div>

    </>
  )
}
const styles = {
  container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
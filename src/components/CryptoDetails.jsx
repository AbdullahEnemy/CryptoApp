import React ,{useState}from 'react'
import millify from 'millify'
import { useParams } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser/lib/index'
import { Row,Col,Select,Typography } from 'antd'
import { MoneyCollectOutlined,DollarCircleOutlined,FundOutlined,ExclamationCircleOutlined,StopOutlined,TrophyOutlined } from '@ant-design/icons'
const {Title,Text} =Typography;
const {Option}=Select;
export const CryptoDetails = () => {
  const [timePeriod,setTimePeriod]=useState('7d')
  const {coinId}=useParams();
  return (
    <>
    <h1>CryptoDetalis{coinId}</h1></>
  )
}

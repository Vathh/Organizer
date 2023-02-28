import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FunctionsIcon from '@mui/icons-material/Functions';

const Container = styled.div`
    position: absolute;
    width: 47%;
    height: 47%;
    border-radius: 5px;

    :first-of-type{
      background: #A770FF;
      top: 0;
      left: 0;
    }
    
    :nth-of-type(2){
      background: #37a3e2;      
      top: 0;
      right: 0;
    }

    :nth-of-type(3){
      background: #5273E8;      
      bottom: 0;
      left: 0;
    }
    
    :nth-of-type(4){
      background: #1AB1B0;      
      bottom: 0;
      right: 0;
    }
  `

  const Test = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    
    :first-of-type{
      top: 0;
      left: 0;     
      clip-path: polygon(0 0, 0% 100%, 100% 0);
      background: rgb(255,255,255);
      background: linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.2) 100%);
      border-radius: 5px;
    }

    :nth-of-type(2){
      bottom: 0;
      right: 0;
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      background: rgb(255,255,255);
      background: linear-gradient(225deg, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,.2) 100%);
      border-radius: 5px;
    }
  `

  const categoryIconStyles = {
    position: 'absolute',
    top: '5px',
    left: '5px',
    fontSize: '34px',
    color: '#fff'
  }

  const CategoryAmount = styled.span`
    position: absolute;
    left: 55%;
    bottom: 35%;
    font-size: 34px;
    font-weight: 500;
    color: #fff;
  `

  const CategoryDescription = styled.span`
    position: absolute;
    color: #fff;
    bottom: 10px;
    left: 10px;
  `

  function renderSwitch(param){
    switch(param){
      case 'new':
        return <StarBorderIcon style={categoryIconStyles}/>;
      case 'pending':
        return <HourglassEmptyIcon style={categoryIconStyles}/>;
      case 'toInvoice':
        return <AttachMoneyIcon style={categoryIconStyles}/>;
      case 'total':
        return <FunctionsIcon style={categoryIconStyles}/>;
      default:
        return <FunctionsIcon style={categoryIconStyles}/>;
    }
  }

const CategoryStamp = ({icon, description, amount}) => {
  return (
    <Container >
      <Test />
      <Test />
      {renderSwitch(icon)}
      <CategoryAmount>{amount}</CategoryAmount>
      <CategoryDescription>{description}</CategoryDescription>
    </Container>
  )
}

export default CategoryStamp

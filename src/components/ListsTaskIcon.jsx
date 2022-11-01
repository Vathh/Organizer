import React from 'react'
import styled from 'styled-components'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

//#region STYLES
const Container = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  border-radius: 15px;
  background: rgba(157, 157, 157,.5);
`
const Title = styled.p`
  color: #fff;
  padding: 15px 0;
  padding-left: 15px;
  font-size: 15px;
`

const IconStyles = {
  marginLeft: '15px',
  border: '1px solid #cdcdcd6d',
  borderRadius: "50%",
  padding: '2px'
}

const StateInfoIcon = styled.div`
  position: absolute;
  right: 20px;
  height: 8px;
  width: 8px;
  background: #ff0000;
  background: #09ff00;
  background: #ffe100;
  border-radius: 50%;
`
//#endregion

const ListsTaskIcon = () => {
  return (
    <Container>
      <HourglassEmptyIcon style={IconStyles}/>
      <Title>Naprawa bizhuba c253</Title>
      <StateInfoIcon />
    </Container>
  )
}

export default ListsTaskIcon

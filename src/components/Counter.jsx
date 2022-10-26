import React from 'react'
import styled from 'styled-components'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import FunctionsIcon from '@mui/icons-material/Functions';

//#region STYLES

const Container = styled.div`
  width: 30%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: green;
  border-radius: 15px;

`

const Title = styled.p`
  font-size: 18px;
  text-align: center;  
`

const Line = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-around;
`

const IconStyles = {
  height: '20px'
}

const Count = styled.p`
  
`

//#endregion

const Counter = () => {
  return (
    <Container>
      <Title> Serwisy </Title>
        <Line>
          <PriorityHighIcon style={IconStyles}/>
          <Count>3</Count>
        </Line>
        <Line>
          <HourglassEmptyIcon style={IconStyles}/>
          <Count>6</Count>
        </Line>
        <Line>
          <FunctionsIcon style={IconStyles}/>
          <Count>11</Count>
        </Line>
    </Container>
  )
}

export default Counter

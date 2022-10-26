import React from 'react'
import styled from 'styled-components'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import FunctionsIcon from '@mui/icons-material/Functions';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';

//#region STYLES

const Container = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 15px;
  padding-bottom: 5px;

  :first-of-type{
    background: rgb(207,141,138);
    background: linear-gradient(0deg, rgba(207,141,138,.5) 0%, rgba(207,182,181,.5) 50%);
    background: rgb(255,235,78);
    background: linear-gradient(0deg, rgba(255,235,78,.5) 0%, rgba(255,249,202,.5) 50%);
  }

  :nth-of-type(2){
    background: rgb(156,31,26);
    background: linear-gradient(0deg, rgba(156,31,26,.7) 0%, rgba(156,102,100,.7) 50%);
  }

  :nth-of-type(3){
    background: rgb(78,166,255);
    background: linear-gradient(0deg, rgba(78,166,255,.4) 0%, rgba(159,201,243,.4) 50%);
    
  }

`

const Title = styled.p`
  font-size: 18px;
  text-align: center;  
  padding: 10px 0;
`

const Line = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding-bottom: 8px;
`

const IconStyles = {
  height: '31px'  
}

const Count = styled.p`
font-size: 24px;
  padding-right: 2px;
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
          <AssignmentLateIcon style={IconStyles}/>
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

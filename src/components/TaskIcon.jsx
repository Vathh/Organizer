import React from 'react'
import styled from 'styled-components'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

//#region STYLES
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-radius: 15px;
  background: rgba(85, 85, 85, 0.335);
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
  
`
//#endregion

const TaskIcon = () => {
  return (
    <Container>
      <HourglassEmptyIcon style={IconStyles}/>
      <Title>Naprawa bizhuba c253</Title>
    </Container>
  )
}

export default TaskIcon

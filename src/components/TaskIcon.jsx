import React from 'react'
import styled from 'styled-components'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import MoreVertIcon from '@mui/icons-material/MoreVert';

//#region STYLES
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 15px;
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

const ListStyles = {
  width: '90%',
  background: 'rgba(157,157,157,.2)',
  margin: '0 0 15px 0'
}

const HomeStyles = {
  width: '100%',
  background: 'rgba(85,85,85,.335',
  margin: '10px 0'
}

const ActionsButton = styled.div`
  
`

const MoreButtonStyles = {
  position: 'absolute',
  marginLeft: '15px',
  borderRadius: "50%",
  padding: '2px'
}
//#endregion

const TaskIcon = ({homeStyles}) => {
  return (
    <Container style={homeStyles === true ? 
    HomeStyles : ListStyles}>
      <HourglassEmptyIcon style={IconStyles}/>
      <Title>Naprawa bizhuba c253</Title>
      <StateInfoIcon />
      <MoreVertIcon style={MoreButtonStyles}/>
    </Container>
  )
}

export default TaskIcon

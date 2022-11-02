import React from 'react'
import styled from 'styled-components'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UpdateIcon from '@mui/icons-material/Update';
import CheckIcon from '@mui/icons-material/Check';

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
  margin-left: auto;
  justify-self: flex-end;
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

const MoreButtonStyles = {
  marginLeft: '15px',
  borderRadius: "50%",
  marginRight: '10px'
}

const Menu = styled.div`
  position: absolute;
  right: 4px;
  bottom: 100%;
  z-index: 10;
  padding: 10px 0;
  border-radius: 10px;
  `

const MenuBtn = styled.div`
  position: relative; 
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 5px;
`

const MenuBtnIconStyle = {
  width: '35px',
  height: '35px',
  background: 'rgba(0,0,0,.5)',
  borderRadius: '50%',
  padding: '5px'
}

const MenuBtnDescription = styled.span`
  background: rgba(0,0,0,.5);
  padding: 4px 8px;
  margin-right: 5px;
`

//#endregion

const TaskIcon = ({homeStyles}) => {



  return (
    <Container style={homeStyles === true ? 
    HomeStyles : ListStyles}>
      <HourglassEmptyIcon style={IconStyles}/>
      <Title>Naprawa bizhuba c253</Title>
      <StateInfoIcon />
      <MoreVertIcon style={MoreButtonStyles}/>
      <Menu >
        <MenuBtn>
          <MenuBtnDescription>Aktualizuj</MenuBtnDescription>
          <UpdateIcon style={MenuBtnIconStyle}/>
        </MenuBtn>
        <MenuBtn>
          <MenuBtnDescription>Zamknij</MenuBtnDescription>
          <CheckIcon style={MenuBtnIconStyle}/>
        </MenuBtn>
      </Menu>
    </Container>
  )
}

export default TaskIcon

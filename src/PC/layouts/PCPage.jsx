import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PCNav from './PCNav';

//#region STYLES

const AddTaskBtn = styled.div`
  position: fixed;
  bottom: 45px;
  right: 25px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #35065e;
  background: linear-gradient(60deg, #2424ffdf 0%, #8818ff 65%, #2424ffdf 100%);
  box-shadow: 0 0 10px black;
  z-index: 100;

  svg{
    height: 25px;
    width: 25px;
    color: #fff;
  }
`

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
  background: #35065e;
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
  transition: all .5s;
`

const StylesForVisibleNav = {
  left: '70%',
  transform: 'scale(0.85)',
  borderRadius: '40px'
}

const StylesForHiddenNav = {
  left: '0',
  transform: 'scale(1.0)',
  borderRadius: '0px'
}


//#endregion

const PCPage = () => {  
  return (
    <>    
      <Container>
        <PCNav />
      </Container>     
      <AddTaskBtn style={window.location.pathname === '/addTask' ? 
      {display: 'none'} : {display: 'flex'}}>
        <AddIcon />
      </AddTaskBtn>
    </>
  )
}
export default PCPage

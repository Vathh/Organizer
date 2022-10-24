import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavBtn = styled.button`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 50%;
`

const arrowIconStyles = { 
  position: 'absolute',
  color: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-45%, -50%)'
}

const MobileNavBtn = () => {
  return (
    <NavBtn>
      <ArrowForwardIosIcon style={arrowIconStyles}/>
    </NavBtn>
  )
}

export default MobileNavBtn

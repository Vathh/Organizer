import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { changeNavVisibility } from '../redux/mobileNavSlice';

//#region STYLES
const NavBtn = styled.button`
  height: 50px;
  width: 50px;
  position: fixed;
  top: 30px;
  left: 30px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 50%;
  z-index: 1000;
  transition: all .5s;
`

const arrowIconStyles = { 
  position: 'absolute',
  color: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-45%, -50%)'
}

const StylesForVisibleNav = {
  left: '-100px',
  transform: 'rotate(-180deg) scale(1.43)'
}

const StylesForHiddenNav = {
  left: '30px',
  transform: 'rotate(0deg)'
}
//#endregion

const MobileNavBtn = () => {

  const mobileNav = useSelector((state) => state.mobileNav);  
  const dispatch = useDispatch();

  const handleNavBtn = (e) => {
    e.preventDefault();
    dispatch(changeNavVisibility());
  }

  return (
    <NavBtn onClick={handleNavBtn} style={mobileNav.navVisible ? StylesForVisibleNav : StylesForHiddenNav}>
      <ArrowForwardIosIcon style={arrowIconStyles}/>
    </NavBtn>
  )
}

export default MobileNavBtn

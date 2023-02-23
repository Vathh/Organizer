import React, { useState } from 'react'
import styled from 'styled-components'
import LogoSvg from '../img/OGARNIZER_PC.svg'
import AvatarGraphic from '../img/avatar.jpg'
import { useSelector } from 'react-redux'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HouseIcon from '@mui/icons-material/House';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';

//#region STYLES

  const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;       
    display: flex;
    align-content: center;
    justify-content: center;
  `

  const LogoContainer = styled.div`  
    height: 44px;  
    flex: 1;
    background: #420939;
    display: flex;
  `

  const Logo = styled.img`
    position: relative;
    height: 36px;
    filter: invert(84%) sepia(21%) saturate(5849%) hue-rotate(351deg) brightness(105%) contrast(91%);  
    margin: auto 10px;
  `

  const NavBtns = styled.div`
    display: flex;
    color: #bcbcbc;
  `

  const NavBtn = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto 0;
    font-size: 18px;
    padding-right: 20px;
    padding-left: 20px;
    background: #420939;
    cursor: pointer;

    ::before{
      content: '';
      width: 1px;
      height: 60%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(105, 28, 94, 0.7);
    }

    :first-of-type{
      ::before{
        display: none;
      }
    }
  `

  const chosenComponentStyles = {
    background: 'transparent',
    color: '#fff'
  }

  const NavIconStyles = {
    fontSize : '20px',
    pointerEvents: 'none',
    marginRight: '7px'
  }

  const UserPannel = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: #420939;
  `

  const AvatarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #d3d3d3;
    margin-left: auto;
  `

  const Avatar = styled.img`
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 50%;
  `

  const UserName = styled.p`
    color: #fff;
    padding-left: 10px;
    padding-right: 15px;
    font-size: 18px;
  `
  const UserPannelBtn = styled.div`
    padding-right: 10px;
    color: #fff;
    cursor: pointer;
    
  `

  const UserMenu = styled.div`
    color: #fff;
    position: absolute;
    right: 0;
    top: 100%;
    height: fit-content;
    padding: 0 15px;
    background: #420939;
    z-index: -1;
    transition: .3s;
  `

  const UserMenuBtn = styled.div`
    padding: 10px 0;
    cursor: pointer;     
  `

  const userMenuVisible = {
    top: '100%'
  }

  const userMenuInvisible = {
    top: '0'
  }

  const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
  `

  const NavSpace = styled.div`
    position: relative;
    flex-grow: 1;    
    background: #420939;
  `

  const iconUp = {transform: 'rotate(180deg)', transition: '.3s'}

  const iconDown = {transform: 'rotate(0deg)', transition: '.3s'}

//#endregion

const Nav = () => {

  const user = useSelector((state) => state.user);
  const [userMenuVisibility, setUserMenuVisibility] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(0);

  const handleUserMenuVisiblity = () => {
    setUserMenuVisibility(!userMenuVisibility);
  }
  
  const handleNavBtnStyles = (e) => {
    if(currentComponent === e){
      return chosenComponentStyles;
    }
    return null;
  }

  const handleNavBtn = (e) => {
    setCurrentComponent(parseInt(e.target.getAttribute("data-nr")));
  }
  
  

  return (
    <Container>
      <NavSpace />
      <Wrapper>
        <LogoContainer>
          <Logo src={LogoSvg}/>
        </LogoContainer>
        <NavBtns>
          <NavBtn onClick={handleNavBtn} style={handleNavBtnStyles(0)} data-nr={0}> <HouseIcon style={NavIconStyles}/> Start</NavBtn>
          <NavBtn onClick={handleNavBtn} style={handleNavBtnStyles(1)} data-nr={1}> <DirectionsCarIcon style={NavIconStyles}/> Wyjazdy</NavBtn>
          <NavBtn onClick={handleNavBtn} style={handleNavBtnStyles(2)} data-nr={2}> <BuildIcon style={NavIconStyles}/> Serwisy</NavBtn>
          <NavBtn onClick={handleNavBtn} style={handleNavBtnStyles(3)} data-nr={3}> <ShoppingCartIcon style={NavIconStyles}/> Zamówienia</NavBtn>
        </NavBtns>
        <UserPannel>
          <AvatarContainer>
              <Avatar src={AvatarGraphic}/>
            </AvatarContainer>
            {/* <UserName>{user.name}</UserName> */}
            <UserName>Andrzej</UserName>
          <UserPannelBtn onClick={handleUserMenuVisiblity}>
            <KeyboardArrowDownIcon 
            style={userMenuVisibility ? iconUp : iconDown}/>
          </UserPannelBtn>
        </UserPannel>
        <UserMenu style={userMenuVisibility ? userMenuVisible : userMenuInvisible}>
          <UserMenuBtn>Wyloguj się</UserMenuBtn>
        </UserMenu>
      </Wrapper>
      <NavSpace />
    </Container>
  )
}

export default Nav

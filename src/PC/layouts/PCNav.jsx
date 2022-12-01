import React, { useState } from 'react'
import styled from 'styled-components'
import LogoSvg from '../../img/OGARNIZER_PC.svg'
import AvatarGraphic from '../../img/avatar.jpg'
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
    font-size: 14px;
  `

  const LogoContainer = styled.div`    
    flex: 1;
    background: #420939;
  `

  const Logo = styled.img`
    height: 30px;
    justify-self: flex-start;
    filter: invert(84%) sepia(21%) saturate(5849%) hue-rotate(351deg) brightness(105%) contrast(91%);  
    margin: 5px 10px;
    padding-right: auto;
    text-align: left;
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
    font-size: 12px;
    padding-right: 15px;
    padding-left: 15px;
    background: #420939;
    cursor: pointer;

    ::after{
      content: '';
      width: 1px;
      height: 60%;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255,255,255,.15);
    }

    :last-of-type{
      border-right: none;
      background: transparent;

      ::after{
        display: none;
      }
    }
  `

  const NavIconStyles = {
    fontSize : '19px'
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
    height: 26px;
    width: 26px;
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

  const iconUp = {transform: 'rotate(180deg)', transition: '.3s'}

  const iconDown = {transform: 'rotate(0deg)', transition: '.3s'}

//#endregion

const PCNav = () => {

  const user = useSelector((state) => state.user);
  const [userMenuVisibility, setUserMenuVisibility] = useState(false);

  const handleUserMenuVisiblity = () => {
    setUserMenuVisibility(!userMenuVisibility);
  }
  

  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoSvg}/>
      </LogoContainer>
      <NavBtns>
        <NavBtn> <HouseIcon style={NavIconStyles}/> Start</NavBtn>
        <NavBtn> <DirectionsCarIcon style={NavIconStyles}/> Wyjazdy</NavBtn>
        <NavBtn> <BuildIcon style={NavIconStyles}/> Serwisy</NavBtn>
        <NavBtn> <ShoppingCartIcon style={NavIconStyles}/> Zamówienia</NavBtn>
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
    </Container>
  )
}

export default PCNav

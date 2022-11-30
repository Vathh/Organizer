import React from 'react'
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
    font-size: 14px;
  `

  const LogoContainer = styled.div`    
    flex: 1;
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
    margin: auto 0;
    color: #bcbcbc;
  `

  const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin: auto 0;
    font-size: 12px;
    padding-right: 15px;
    padding-left: 15px;
    border-right: 1px solid rgba(255,255,255,.3);

    :last-of-type{
      border-right: none;
    }
  `

  const NavIconStyles = {
    fontSize : '19px'
  }

  const UserPannel = styled.div`
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
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
    
  `
  const UserPannelBtn = styled.div`

  `

  const UserMenu = styled.div`

  `

//#endregion

const PCNav = () => {

  const user = useSelector((state) => state.user);

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
        <UserPannelBtn>
          <KeyboardArrowDownIcon />
        </UserPannelBtn>
      </UserPannel>
    </Container>
  )
}

export default PCNav

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AvatarGraphic from '../img/avatar.jpg'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//#region STYLES
const Page = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  background: #251B37;
`

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  //background: red;
  margin-left: 15%;
`

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid transparent;
  background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  background-repeat: no-repeat;
  background-image: linear-gradient(#251B37, #251B37), 
                    linear-gradient(30deg, #676767 36%, #676767 30%),
                    linear-gradient(30deg, #cda619 20%, #cda619 0%),
                    linear-gradient(30deg, #676767 36%, #cda619 30%),
                    linear-gradient(30deg, #676767 36%, #676767 30%);
  background-position: center center, left top, right top, bottom right, bottom left;
  background-origin: content-box, border-box, border-box, border-box, border-box;
  background-clip: content-box, border-box, border-box, border-box, border-box;
`

const Avatar = styled.img`
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 50%;
`

const UserName = styled.p`
  margin-top: 20px;
  font-size: 40px;
  color: #fff;
  font-weight: 500;
`

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`

const NavLink = styled(Link)`
  display: flex;
  padding: 10px 0;
  color: #fff;
  font-size: 22px;
  text-decoration: none;
`

const IconStyles = {
  fontSize : '30px',
  marginRight : '15px',
  filter: 'invert(40%) sepia(23%) saturate(0%) hue-rotate(149deg) brightness(93%) contrast(86%)'
}

//#endregion

const MobileNav = () => {
  return (
    <Page>
      <Container>
        <AvatarContainer>
          <Avatar src={AvatarGraphic}/>
        </AvatarContainer>
        <UserName>Arek</UserName>
        <NavLinksContainer>
          <NavLink>
            <DirectionsCarIcon style={IconStyles}/> Wyjazdy            
          </NavLink>
          <NavLink>
            <HomeIcon style={IconStyles}/> 
            Serwisy
          </NavLink>
          <NavLink>
            <ShoppingCartIcon style={IconStyles}/>
            Zamówienia
          </NavLink>
        </NavLinksContainer>
      </Container>
    </Page>
)}

export default MobileNav;

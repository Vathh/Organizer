import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AvatarGraphic from '../img/avatar.jpg'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/userSlice';
import { changeNavVisibility, setNavVisibility } from '../redux/mobileNavSlice';

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
  z-index: -1;
  background: #251B37;
`

const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  transition: transform .6s;
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
  margin-top: 100px;
`

const NavLink = styled(Link)`
  display: flex;
  padding: 12px 0;
  color: #fff;
  font-size: 22px;
  text-decoration: none;

  :last-of-type{
    margin-top: 70px;
  }
`

const IconStyles = {
  fontSize : '30px',
  marginRight : '15px',
  filter: 'invert(40%) sepia(23%) saturate(0%) hue-rotate(149deg) brightness(93%) contrast(86%)'
}

//#endregion

const MobileNav = () => {

  const mobileNav = useSelector((state) => state.mobileNav);
  const dispatch = useDispatch();

  const handleLogoutBtn = () => {   
    dispatch(updateUser({name: "", jwtKey: ""}));
    dispatch(setNavVisibility({isVisible: false}));
  }

  return (
    <Page>
      <Container style={mobileNav.navVisible ? {transform: 'translateX(0)'} : {transform: 'translateX(-140%)'}}>
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
          <NavLink>
            <EqualizerIcon style={IconStyles}/>
            Statystyki
          </NavLink>
          <NavLink onClick={handleLogoutBtn} to='/'>
            <LogoutIcon style={IconStyles}/>
            Wyloguj
          </NavLink>
        </NavLinksContainer>
      </Container>
    </Page>
)}

export default MobileNav;

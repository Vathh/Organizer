import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { Navigate } from 'react-router-dom'
import MobileNavBtn from "../components/MobileNavBtn";
import MobileNav from "../components/MobileNav";
import { changeNavVisibility } from '../redux/mobileNavSlice';
import Browser from "../components/Browser";

//#region STYLES
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
`

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #35065e;
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
  z-index: 1;
  transition: all .5s;
`

const StylesForVisibleNav = {
  left: '60%',
  transform: 'scale(0.7)',
  borderRadius: '40px'
}

const StylesForHiddenNav = {
  left: '0',
  transform: 'scale(1.0)',
  borderRadius: '0px'
}

const Welcome = styled.span`
  font-size: 16px;
  margin-top: 20px;
  color: #767676;
`
const WelcomeDate = styled.span`
  margin-top: 10px;
  font-size: 22px;
  color: #fff;
`

//#endregion


const Home = () => {

  const dayOfWeek = new Date().toLocaleDateString('pl-PL', { weekday: 'long' }); 
  const dayOfWeekToDisplay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  const dayOfMonth = new Date().getDate();
  const mobileNav = useSelector((state) => state.mobileNav);  
  const user = useSelector((state) => state.user);
  
  const auth = useSelector((state) => state.auth);
  if(!auth.confirmed){
    return <Navigate to='/'/>
  }
  return (
    <Container>
      <MobileNav />
      <HomeContainer 
        style={mobileNav.navVisible 
        ? StylesForVisibleNav 
        : StylesForHiddenNav}>
          <MobileNavBtn />
          <Welcome>
            Cześć, {user.name} !
          </Welcome>
          <WelcomeDate>
            {dayOfWeekToDisplay}, {dayOfMonth}
          </WelcomeDate>
          <Browser />
      </HomeContainer>
    </Container>
  )
}

export default Home

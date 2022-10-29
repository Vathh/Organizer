import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import styled from "styled-components"

import MobileNavBtn from "../components/MobileNavBtn";
import MobileNav from "../components/MobileNav";
import Browser from "../components/Browser";
import TaskIcon from "../components/TaskIcon";
import Counter from "../components/Counter";
import AddIcon from '@mui/icons-material/Add';

//#region STYLES
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;  
  overflow-x: hidden;
`

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
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

const TasksContainer = styled.div`
  position: relative;
  width: 80%;
  margin-top: 30px;
  color: #fff;
  background-color: transparent;
`

const Title = styled.p`
  font-size: 18px;
  padding-left: 10px;
  padding-bottom: 10px;
`

const CountersContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  color: #fff;
`

const AddTaskBtn = styled.div`
  position: absolute;
  bottom: 65px;
  right: 35px;
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
          <CountersContainer>
            <Counter/>
            <Counter/>
            <Counter/>
          </CountersContainer>
          <TasksContainer>
            <Title>Ostatnio dodane</Title>
            <TaskIcon />
            <TaskIcon />
            <TaskIcon />
          </TasksContainer>
      </HomeContainer>
      <AddTaskBtn>
        <AddIcon />
      </AddTaskBtn>
    </Container>
  )
}

export default Home

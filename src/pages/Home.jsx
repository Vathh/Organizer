import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import styled from "styled-components"

import MobileNavBtn from "../components/MobileNavBtn";
import Browser from "../components/Browser";
import TaskIcon from "../components/TaskIcon";
import Counter from "../components/Counter";


//#region STYLES

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
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
    </Container>      
  )
}

export default Home

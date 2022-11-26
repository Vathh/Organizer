/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'
import styled from "styled-components"

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
`

const Welcome = styled.span`
  font-size: 16px;
  margin-top: 20px;
  color: #767676;
`
const WelcomeDate = styled.span`
  margin-top: 10px;
  font-size: 22px;
  color: #fff;
  margin-bottom: 20px;
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
  margin-top: 25px;
  color: #fff;
`

const numberOfTasksToDisplayHome = Math.floor((window.innerHeight-497)/69);

const numberOfTasksToDisplayList = Math.floor((window.innerHeight-414)/64);

//#endregion


const Home = () => {

  const dayOfWeek = new Date().toLocaleDateString('pl-PL', { weekday: 'long' }); 
  const dayOfWeekToDisplay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  const dayOfMonth = new Date().getDate();  
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  // async function fetchData() {
  //   await JOBSSERVICE.getAll(numberOfTasksToDisplayList, 1, "CreatedDate", "DESC")
  //     .then((response) => {
  //       // const jobs = response.data.items.map((task) => {
  //       //   return <TaskIcon key={task.description} homeStyles={false} title={task.description}/>
  //       // });
  //       dispatch(updateJobs({jobs: response.data.items}));
  //       dispatch(fetchSuccess()); 
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       dispatch(fetchError()); 
  //     });

  //   await SERVICESSERICE.getAll(numberOfTasksToDisplayList, 1, "CreatedDate", "DESC")
  //   .then((response) => {
  //     // const jobs = response.data.items.map((task) => {
  //     //   return <TaskIcon key={task.description} homeStyles={false} title={task.description}/>
  //     // });
  //     dispatch(updateServices({services: response.data.items}));
  //     dispatch(fetchSuccess()); 
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     dispatch(fetchError()); 
  //   });
  // }

  // useEffect(() => {
  //   dispatch(fetchStart()); 
  //   fetchData();
  //   return () => {      
  //   }
  // }, [])

  if(!auth.confirmed){
    return <Navigate to='/'/>
  }
  return (
    <Container>        
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
        <TasksContainer >
          <Title>Ostatnio dodane</Title>
          <TaskIcon homeStyles={true}/>
          <TaskIcon homeStyles={true}/> 
          <TaskIcon homeStyles={true}/> 
          <TaskIcon homeStyles={true}/> 
          <TaskIcon homeStyles={true}/> 
        </TasksContainer>
    </Container>      
  )
}

export default Home

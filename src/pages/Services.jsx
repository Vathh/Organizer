/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Browser from '../components/Browser'
import TaskIcon from '../components/TaskIcon'

//#region STYLES

  const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw; 
    padding-top: 25px;
    transition: all .5s;
  `

  const Title = styled.h1`
    text-align: center;
    font-size: 36px;
    color: #fff;
    font-weight: normal;
    padding-bottom: 30px;
  `

  const TasksContainer = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0 5px;
    color: #fff;
    background-color: rgba(0,0,0,.4);
  `

  const Stages = styled.div`
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  `

  const StageTitle = styled.span`
    padding: 10px 15px;    
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  `

  const VisibleStageStyles = {
    color: '#fff',
    background: 'rgba(0,0,0,.4)',
  }

  const HiddenStageStyles = {
    color: '#aeaeae'
  }

  const SortBy = styled.div`
    width: 80%;
    margin: 20px auto 0;
    text-align: end;
  `

  const SortByTitle = styled.span`
    color: #fff;
    margin-right: 20px;
  `

  const SortBySelect = styled.select` 
    color: #fff;
    background: #370D38;
    padding: 4px;
    border: 2px solid transparent;
    outline: none;
    transition: border .3s;

    :focus{
    border: 2px solid rgba(255, 255, 255, 0.2);
    }
  `

  const NoTasksMessage = styled.span`
  padding-bottom: 15px;
  `

  const numberOfTasksToDisplay = Math.floor((window.innerHeight-414)/64);

//#endregion

const Services = () => {

  const [chosenStage, setChosenStage] = useState(0);
  // const tasksState = useSelector((state) => state.fetchTasks)
  // const tasks = useSelector((state) => state.tasks);
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   if(tasksState.confirmed){
  //     setServices(tasks.jobs.map((task) => {
  //       return <TaskIcon key={task.description} homeStyles={false} title={task.description}/>
  //     }))
  //   }
  // },[tasksState.confirmed])

  const handleStageStyle = (x) => {
    if(chosenStage === x){
      return VisibleStageStyles;
    }
    return HiddenStageStyles;
  }
  
  const handleStageClick = (e) => {
    setChosenStage(parseInt(e.target.getAttribute("data-nr")));
  }
  

  return (
    <Container >
      <Title>Serwisy</Title>
      <Browser />
      <Stages>
        <StageTitle style={handleStageStyle(0)} data-nr={0} onClick={handleStageClick}>Oczekujące</StageTitle>
        <StageTitle style={handleStageStyle(1)} data-nr={1} onClick={handleStageClick}>Fakturowanie</StageTitle>
        <StageTitle style={handleStageStyle(2)} data-nr={2} onClick={handleStageClick}>Wydanie</StageTitle>
      </Stages>
      <TasksContainer>
      {/* {tasksState.confirmed ? services : <NoTasksMessage>Brak zadań</NoTasksMessage>} */}
      </TasksContainer>
      <SortBy>
        <SortByTitle>Sortuj</SortByTitle>
        <SortBySelect>
          <option>Od najnowszych</option>
          <option>Od najstarszych</option>
        </SortBySelect>
      </SortBy>
    </Container>
  )
}

export default Services

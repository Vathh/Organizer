import React, { useReducer, useRef, useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import { getJobsReducer, INITIAL_GETJOBS_FETCH_STATE } from '../helpers/requestReducers/getJobsReducer'

import { useSelector } from 'react-redux'

//#region STYLES

  const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100vw; 
    padding-top: 25px;
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
    max-height: 70%;
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
    transition: all .3s;
  `

  const VisibleStageStyles = {
    color: '#fff',
    background: 'rgba(0,0,0,.4)',
  }

  const HiddenStageStyles = {
    color: '#aeaeae'
  }

  const PageSettings = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 0;
  `

  const SortBy = styled.div`
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
  
  const PageChoice = styled.div`
    color: #fff;
    display: flex;
  `

  const CurrentPage = styled.span`
    
  `

  const ChangePage = styled.div`
    
  `

  const NoTasksMessage = styled.span`
    padding-bottom: 15px;
  `

  const numberOfTasksToDisplay = Math.floor((window.innerHeight-414)/64);

//#endregion

const Jobs = () => {

  const [chosenStage, setChosenStage] = useState(0);
  const [jobsState, jobsDispatch] = useReducer(getJobsReducer, INITIAL_GETJOBS_FETCH_STATE);
  const jobs = useSelector((state) => state.tasks.jobs);

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
      <Title>Wyjazdy</Title>
      <Browser />
      <Stages>
        <StageTitle style={handleStageStyle(0)} data-nr={0} onClick={handleStageClick}>Oczekujące</StageTitle>
        <StageTitle style={handleStageStyle(1)} data-nr={1} onClick={handleStageClick}>Fakturowanie</StageTitle>
      </Stages>
      <TasksContainer >
        {jobsState.success ? jobs : <NoTasksMessage>Brak zadań</NoTasksMessage>}
      </TasksContainer>
      <PageSettings>
        <PageChoice>
          <ChangePage> &#171; </ChangePage>
          <CurrentPage>1 z 8</CurrentPage>
          <ChangePage> &#187; </ChangePage>
        </PageChoice>
        <SortBy>
          <SortByTitle>Sortuj</SortByTitle>
          <SortBySelect>
            <option>Od najnowszych</option>
            <option>Od najstarszych</option>
          </SortBySelect>
        </SortBy>
      </PageSettings>
    </Container>
  )
}

export default Jobs

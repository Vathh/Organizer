/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'

import TaskIcon from '../components/TaskIcon'
import jobsService from '../services/jobsService'
import { fetchTasksReducer, INITIAL_FETCH_TASKS_STATE } from '../helpers/requestReducers/fetchTasksReducer'
import { REQUEST_TYPES } from '../helpers/requestReducers/actionTypes'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

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
    padding-left: 20px;
    justify-content: center;
    align-items: center;
  `

  const CurrentPage = styled.span`
    padding: 0 10px;
    font-size: 20px;
  `

  const ChangePage = styled.div`
    position: relative;
    font-size: 20px;
    height: 25px;
    width: 25px;
    border: 1px solid #fff;
    border-radius: 50%;
  `

  const changePageIcon = {
    position: 'abolute',
    top: '50%',
    left: '50%',
    pointerEvents: 'none'
  }

  const NoTasksMessage = styled.span`
    padding-bottom: 15px;
  `

  const numberOfTasksToDisplay = Math.floor((window.innerHeight-414)/64);

//#endregion

const Jobs = () => {
  const [chosenStage, setChosenStage] = useState(0);
  const [fetchState, fetchDispatch] = useReducer(fetchTasksReducer, INITIAL_FETCH_TASKS_STATE);
  const [jobsPending, setJobsPending] = useState([]);
  const [jobsToInvoce, setJobsToInvoice] = useState([]);
  const [sortBy, setSortBy] = useState("DESC");
  const [chosenPage, setChosenPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function fetchData() {    
    await jobsService.getAll(numberOfTasksToDisplay, chosenPage, "CreatedDate", sortBy)
      .then((response) => {
        console.log("fetch")
        fetchDispatch({type: REQUEST_TYPES.SUCCESS});
        setTotalPages(response.data.totalPages);
        setJobsPending(response.data.items.map((task) => {
          if(task.toInvoice === false){
            return <TaskIcon key={task.description} homeStyles={false} title={task.description}/>
          }else{
            return null;
          }
        }))
        setJobsToInvoice(response.data.items.map((task) => {
          if(task.toInvoice === true){
            return <TaskIcon key={task.description} homeStyles={false} title={task.description}/>
          }else{
            return null;
          }
        }))
      })
      .catch((error) => {
        fetchDispatch({type: REQUEST_TYPES.ERROR});
        console.log(error);
      });
  }

  useEffect(() => {
    fetchDispatch({type: REQUEST_TYPES.START});
    fetchData();
    return () => {      
    }
  },[fetchState.success, sortBy, chosenPage])

  const handleStageStyle = (x) => {
    if(chosenStage === x){
      return VisibleStageStyles;
    }
    return HiddenStageStyles;
  }
  
  const handleStageClick = (e) => {
    setChosenStage(parseInt(e.target.getAttribute("data-nr")));
    setChosenPage(1);
  }  

  const handleSortBySelect = (e) => {
    e.target.value === "Od najnowszych" ? setSortBy("DESC") : setSortBy("ASC");
  }
  
  const handleChangePageBtn = (e) => {
    if(e.target.getAttribute("data-direction") === "back"){
      if(chosenPage > 1){
        setChosenPage(chosenPage-1);
        fetchData();
      }
    }
    if(e.target.getAttribute("data-direction") === "forward"){
      if(chosenPage < totalPages){
        setChosenPage(chosenPage+1);
        fetchData();
      }
    }
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
        {fetchState.success ? 
        (chosenStage === 0 ? jobsPending : jobsToInvoce)
        : <NoTasksMessage>Brak zadań</NoTasksMessage>}
      </TasksContainer>
      <PageSettings>
        <PageChoice>
          <ChangePage onClick={handleChangePageBtn} data-direction={"back"}> <NavigateBeforeIcon style={changePageIcon}/> </ChangePage>
          <CurrentPage>{chosenPage} z {totalPages}</CurrentPage>
          <ChangePage onClick={handleChangePageBtn} data-direction={"forward"}> <NavigateNextIcon style={changePageIcon}/> </ChangePage>
        </PageChoice>
        <SortBy>
          <SortByTitle>Sortuj</SortByTitle>
          <SortBySelect onChange={handleSortBySelect}>
            <option>Od najnowszych</option>
            <option>Od najstarszych</option>
          </SortBySelect>
        </SortBy>
      </PageSettings>
    </Container>
  )
}

export default Jobs

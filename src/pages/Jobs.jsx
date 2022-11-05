import React, { useState } from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import TaskIcon from '../components/TaskIcon'

//#region STYLES

  const Container = styled.div`
    position: relative;
    height: 100%;
    width: 100vw; 
    padding-top: 25px;
    padding-bottom: 100px;
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

//#endregion

const Jobs = () => {

  const [chosenStage, setChosenStage] = useState(0);

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
      <TasksContainer>
        <TaskIcon homeStyles={false}/>
        <TaskIcon homeStyles={false}/>
        <TaskIcon homeStyles={false}/>
        <TaskIcon homeStyles={false}/>
        <TaskIcon homeStyles={false}/>
        <TaskIcon homeStyles={false}/>
        <TaskIcon homeStyles={false}/>
        <TaskIcon homeStyles={false}/>
      </TasksContainer>
    </Container>
  )
}

export default Jobs
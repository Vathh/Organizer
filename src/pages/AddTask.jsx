import React, { useState } from 'react'
import styled from 'styled-components'
import AddJobPannel from '../components/AddJobPannel'
import AddOrderPannel from '../components/AddOrderPannel'
import AddServicePannel from '../components/AddServicePannel'

//#region STYLES

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw; 
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-bottom: 30px;
`

const Title = styled.p`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
`

const TaskTypeSelect = styled.div`
  width: 70%;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const TaskTypeTitle = styled.span`
  font-size: 26px;
  padding: 10px 15px;    
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  transition: all .3s;
`
const VisibleTypeStyles = {
  color: '#fff',
  background: 'rgba(0,0,0,.5)',
}

const HiddenTypeStyles = {
  color: '#aeaeae'
}



//#endregion

const AddTask = () => {

  const [chosenType, setChosenType] = useState(0);

  const handleStageStyle = (x) => {
    if(chosenType === x){
      return VisibleTypeStyles;
    }
    return HiddenTypeStyles;
  }

  const handleStageClick = (e) => {
    setChosenType(parseInt(e.target.getAttribute("data-nr")));
  }

  return (
    <Container>
      <Title>Dodawanie <br/> zadania</Title>
      <TaskTypeSelect>
        <TaskTypeTitle style={handleStageStyle(0)} data-nr={0} onClick={handleStageClick}>Wyjazd</TaskTypeTitle>
        <TaskTypeTitle style={handleStageStyle(1)} data-nr={1} onClick={handleStageClick}>Serwis</TaskTypeTitle>
        <TaskTypeTitle style={handleStageStyle(2)} data-nr={2} onClick={handleStageClick}>Zamówienie</TaskTypeTitle>
      </TaskTypeSelect>
      {
        {
          0: <AddJobPannel />,
          1: <AddServicePannel />,
          2: <AddOrderPannel />
        }[chosenType]
      }
      
    </Container>
  )
}

export default AddTask

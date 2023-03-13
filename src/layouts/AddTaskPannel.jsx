import React from 'react'
import styled from 'styled-components'

//#region STYLES

  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.75);
    height: 100%;
    width: 100%;
    z-index: 100;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  `

  const Pannel = styled.div`
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #35065e;
    background: linear-gradient(60deg, #35065e 0%, #691c5e 65%, rgba(53,6,94,1) 100%);
    border-radius: 30px;
    padding: 20px 10px;


    height: 200px;
    width: 200px;
  `

  const Title = styled.p`
    font-size: 28px;
    text-align: center;
    color: #ccc;
  `

  const TasksTypesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  const TaskType = styled.span`
    background-color: rgba(0,0,0,.25);
    padding: 5px 10px;
    color: #ccc;
  `

//#endregion

const AddTaskPannel = () => {
  return (
    <Container>
      <Pannel>
        <Title>Nowe zadanie</Title>
        <TasksTypesContainer>
          <TaskType>Wyjazd</TaskType>
          <TaskType>Serwis</TaskType>
          <TaskType>Zamówienie</TaskType>
        </TasksTypesContainer>
      </Pannel>
    </Container>
  )
}

export default AddTaskPannel

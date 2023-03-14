import React, { useState } from 'react'
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
    color: #ccc;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  `

  const Pannel = styled.div`
    position: absolute;
    top: 500px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #35065e;
    background: linear-gradient(60deg, #35065e 0%, #691c5e 65%, rgba(53,6,94,1) 100%);
    border-radius: 30px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;

    min-height: 400px;
    min-width: 400px;
  `

  const Title = styled.p`
    font-size: 30px;
    text-align: center;
  `

  const TasksTypesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
  `

  const TaskType = styled.span`
    background-color: rgba(0,0,0,.25);
    font-size: 20px;
    padding: 8px 14px;
  `

  const ChosenTypeStyles = {
    
  }

  const TaskFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 30px;
  `

  const InputContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :last-of-type{
      align-items: flex-start;
    }
  `

  const InputTitle = styled.span`
    margin-right: 20px;
    text-align: center;
    font-size: 20px;
    width: 0;
    margin-right: 110px;
  `

  const Input = styled.input`
    font-size: 18px;
    flex-grow: 1;
    background-color: rgba(0,0,0,.3);
    border: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 7px;
  `

  const TextArea = styled.textarea`
    font-size: 18px;
    resize: none;
    background-color: rgba(0,0,0,.3);
    border: none;
    min-height: 100px;
    flex-grow: 1;
    color: #fff;
    border-radius: 7px;
    padding: 5px 10px;
  `

  const HiddenInputStyles = {
    display: 'none'
  }

  const VisibleInputStyles = {
    display: 'flex'
  }

//#endregion

const AddTaskPannel = () => {

  const [chosenType, setChosenType] = useState(1);

  return (
    <Container>
      <Pannel>
        <Title>Nowe zadanie</Title>
        <TasksTypesContainer>
          <TaskType>Wyjazd</TaskType>
          <TaskType>Serwis</TaskType>
          <TaskType>Zamówienie</TaskType>
        </TasksTypesContainer>
        <TaskFormContainer>
          <InputContainer>
            <InputTitle>Opis</InputTitle>
            <Input/>
          </InputContainer>

          <InputContainer style={chosenType !== 0 ? HiddenInputStyles : VisibleInputStyles}>
            <InputTitle>Miejsce</InputTitle>
            <Input/>
          </InputContainer>

          <InputContainer style={chosenType !== 2 ? HiddenInputStyles : VisibleInputStyles}>
            <InputTitle>Klient</InputTitle>
            <Input/>
          </InputContainer>

          <InputContainer>
            <InputTitle>Urządzenie</InputTitle>
            <Input/>
          </InputContainer>
          <InputContainer>
            <InputTitle>Dodatkowe informacje</InputTitle>
            <TextArea/>
          </InputContainer>
        </TaskFormContainer>
      </Pannel>
    </Container>
  )
}

export default AddTaskPannel

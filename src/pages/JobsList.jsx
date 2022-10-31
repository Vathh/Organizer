import React from 'react'
import styled from 'styled-components'
import MobileNavBtn from '../components/MobileNavBtn'
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
  `

  const TasksContainer = styled.div`
    position: relative;
    width: 80%;
    margin: 30px auto 0 auto;
    color: #fff;
    background-color: transparent;
  `

//#endregion

const JobsList = () => {

  return (
    <Container >
      <MobileNavBtn/>
      <Title>Wyjazdy</Title>
      <TasksContainer>
        <TaskIcon />
      </TasksContainer>
    </Container>
  )
}

export default JobsList

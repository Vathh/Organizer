import React from 'react'
import styled from 'styled-components'
import MobileNav from '../components/MobileNav'
import MobileNavBtn from '../components/MobileNavBtn'
import TaskIcon from '../components/TaskIcon'

//#region STYLES

  const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;  
    overflow-x: hidden;
    background: #35065e;
    background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
  `

  const Title = styled.h1`
    text-align: center;
    margin-top: 25px;
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
    <Container>
      <MobileNav/>
      <MobileNavBtn/>
      <Title>Wyjazdy</Title>
      <TasksContainer>
        <TaskIcon />
      </TasksContainer>
    </Container>
  )
}

export default JobsList

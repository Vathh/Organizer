import React from 'react'
import GrainIcon from '@mui/icons-material/Grain';
import styled from 'styled-components';
import { NEW_TASK, SERVICE_OWNER } from '../subtitles';

//#region STYLES

  const Container = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const PageTitle = styled.p`
    color: #fff;
    font-size: 34px;
    font-weight: 500;
    letter-spacing: .5px;
    font-family: 'Oswald', sans-serif;
    margin-left: 40px;
  `

  const AddTaskPannel = styled.div`
    position: relative;
    height: fit-content;
    align-self: center;
  `

  const AddTaskButton = styled.div`
    position: relative;
    color: #fff;
    background: #e6666c;
    border-radius: 10px;
    padding: 10px 15px;
    font-weight: 600;
    font-size: 18px;
    margin-right: 35px;
    transition: transform .3s;

    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  `

  const grainIconStyles = {
      position: 'absolute',
      background: 'transparent',
      color: '#aaa',
      left: '-50px',
      top: '50%',
      transform: 'translateY(-50%)'
  }

//#endregion

const TitleRow = () => {
  return (
    <Container>
      <PageTitle>{SERVICE_OWNER}</PageTitle>
      <AddTaskPannel>
        <AddTaskButton>{NEW_TASK}</AddTaskButton>          
        <GrainIcon style={grainIconStyles}/>
      </AddTaskPannel>
    </Container>
  )
}

export default TitleRow

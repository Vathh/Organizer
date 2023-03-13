import React from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import StatisticsPannel from '../components/StatisticsPannel';
import TaskPannel from '../components/TaskPannel';
import TitleRow from '../components/TitleRow';

//#region STYLES

  const Container = styled.div`
    position: relative;
    min-width: 800px;
    max-width: 1400px;
    /* background: rgba(0,0,0,.1); */
    margin: 0 auto;
    padding: 40px 0 100px;
    display: flex;
  `

  const LeftSide = styled.div`
    position: relative;
    flex: 3;
  `

  const CenterSide = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `

  const BottomSide = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const RightSide = styled.div`
    flex: 1;
    /* background: rgba(255,255,255,.1); */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  `

  const Subtitle = styled.p`
    font-size: 30px;
    color: #fff;
  `

  const BottomSideBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `

//#endregion

const Home = () => {
  return (
    <Container>
      <LeftSide>
        <TitleRow />
        <CenterSide>
          <Browser withFilter={true} />
        </CenterSide>
        <BottomSide>
          <Subtitle>Pilne</Subtitle>
          <BottomSideBox>
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
            <TaskPannel type='job'></TaskPannel >
          </BottomSideBox>
        </BottomSide>
      </LeftSide>
      <RightSide>
        <StatisticsPannel />
      </RightSide>
    </Container>
  )
}

export default Home

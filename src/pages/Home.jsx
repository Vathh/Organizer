import React from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import GrainIcon from '@mui/icons-material/Grain';
import JobPannel from '../components/JobPannel';
import StatisticsPannel from '../components/StatisticsPannel';

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

  const TopSide = styled.div`
    display: flex;
    justify-content: space-between;
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
        <TopSide>
          <PageTitle>Serwis Komputerix</PageTitle>
          <AddTaskPannel>
            <AddTaskButton>Nowe zadanie</AddTaskButton>          
            <GrainIcon style={grainIconStyles}/>
          </AddTaskPannel>
        </TopSide>
        <CenterSide>
          <Browser withFilter={true} />
        </CenterSide>
        <BottomSide>
          <Subtitle>Pilne</Subtitle>
          <BottomSideBox>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
            <JobPannel></JobPannel>
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

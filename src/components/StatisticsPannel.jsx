import React from 'react'
import styled from 'styled-components'
import StatsChart from './StatsChart'

//#region STYLES

  const Container = styled.div`
    /* background: rgba(0,0,0,.1); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(255,255,255,.1);

    margin-top: 30px;
  `

  const StatsTypeTitle = styled.p`
    font-size: 28px;
    color: #fff;
  `


//#endregion

const StatisticsPannel = () => {
  return (
    <Container>
      <StatsContainer>
        <StatsTypeTitle>Wyjazdy</StatsTypeTitle>
        <StatsChart highPriority={100} mediumPriority={60} lowPriority={30}/>
      </StatsContainer>
      <StatsContainer>
        <StatsTypeTitle>Serwisy</StatsTypeTitle>
        <StatsChart highPriority={15} mediumPriority={45} lowPriority={40}/>
      </StatsContainer>
      <StatsContainer>
        <StatsTypeTitle>Zamówienia</StatsTypeTitle>
        <StatsChart highPriority={5} mediumPriority={80} lowPriority={15}/>
      </StatsContainer>
    </Container>
  )
}

export default StatisticsPannel

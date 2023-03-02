import React from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import TaskPannel from '../components/TaskPannel'
import TitleRow from '../components/TitleRow'

//#region STYLES

  const Container = styled.div`
    position: relative;
    min-width: 800px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 0 100px;
    display: flex;
    flex-direction: column;

  `

  const TopSide = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `

  const TitleRowContainer = styled.div`
    width: 80%;
  `

  const BrowserContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
  `

  const BottomSide = styled.div`
    /* background-color: BLUE; */
    display: flex;
    justify-content: center;
  `

  const BottomSideColumn = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,.15);
    padding: 20px 30px;
    border-radius: 15px;
    margin-left: 30px;

    :first-of-type{
      margin-left: 0;
    }
  `

  const ColumnName = styled.span`
    font-size: 30px;
    color: #fff;
  ` 

//#endregion

const Services = () => {
  return (
    <Container>
      <TopSide>
        <TitleRowContainer>
          <TitleRow />
        </TitleRowContainer>
        <BrowserContainer>
          <Browser withFilter={false} />
        </BrowserContainer>
      </TopSide>
      <BottomSide>
        <BottomSideColumn>
          <ColumnName>Nowe</ColumnName>
          <TaskPannel type='service' />
          <TaskPannel type='service' />
          <TaskPannel type='service' />
        </BottomSideColumn>
        <BottomSideColumn>
          <ColumnName>Oczekujące</ColumnName>
          <TaskPannel type='service' />
          <TaskPannel type='service' />
          <TaskPannel type='service' />
        </BottomSideColumn>        
        <BottomSideColumn>
          <ColumnName>Do rozliczenia</ColumnName>
          <TaskPannel type='service' />
          <TaskPannel type='service' />
          <TaskPannel type='service' />
        </BottomSideColumn>
      </BottomSide>
    </Container>
  )
}

export default Services

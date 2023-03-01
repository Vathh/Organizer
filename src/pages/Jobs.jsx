import React from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import JobPannel from '../components/JobPannel'

//#region STYLES

  const Container = styled.div`
    position: relative;
    min-width: 800px;
    max-width: 1400px;
    background: rgba(0,0,0,.1);
    margin: 0 auto;
    padding: 40px 0 100px;
    display: flex;
    flex-direction: column;
  `

  const TopSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div{
      width: 50%;
    }
  `

  const BottomSide = styled.div`
    background-color: BLUE;
    display: flex;
    justify-content: space-around;
  `

  const BottomSideColumn = styled.div`
    display: flex;
    flex-direction: column;
    background-color: red;
  `

  const ColumnName = styled.span`
    font-size: 30px;
  `



//#endregion

const Jobs = () => {
  return (
    <Container>
      <TopSide>
        <Browser withFilter={false} />
      </TopSide>
      <BottomSide>
        <BottomSideColumn>
          <ColumnName>Nowe</ColumnName>
          <JobPannel />
          <JobPannel />
          <JobPannel />
        </BottomSideColumn>
        <BottomSideColumn>
          <ColumnName>Nowe</ColumnName>
          <JobPannel />
          <JobPannel />
          <JobPannel />
        </BottomSideColumn>        
        <BottomSideColumn>
          <ColumnName>Nowe</ColumnName>
          <JobPannel />
          <JobPannel />
          <JobPannel />
        </BottomSideColumn>
      </BottomSide>
    </Container>
  )
}

export default Jobs

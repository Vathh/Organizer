import React from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import JobPannel from '../components/JobPannel'

//#region STYLES

  const Container = styled.div`
    position: relative;
    min-width: 800px;
    max-width: 1200px;
    background: rgba(0,0,0,.1);
    margin: 0 auto;
    padding: 20px 0 0;
    display: flex;
  `

  const LeftSide = styled.div`
    position: relative;
    flex: 2;
  `

  const RightSide = styled.div`
    flex: 1;
    background: #FFF;
  `

  const PageTitle = styled.p`
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: .5px;
    font-family: 'Oswald', sans-serif;
  `

  const TasksContainer = styled.div`
    width: 100%;
    display: flex;
  `

  const SubContainer = styled.div`
    flex: 1;
  `

  const TypeTitle = styled.span`
    font-size: 24px;
    color: #fff;
    font-family: 'Oswald', sans-serif;
  `

//#endregion

const PCHome = () => {
  return (
    <Container>
      <LeftSide>
        <PageTitle>Xanadu Serwis</PageTitle>
        <Browser />
        <TasksContainer>
          <SubContainer>
            <TypeTitle>Wyjazdy</TypeTitle>
            <JobPannel />
          </SubContainer>
          <SubContainer>

          </SubContainer>
          <SubContainer>

          </SubContainer>
        </TasksContainer>
      </LeftSide>
      <RightSide>

      </RightSide>
    </Container>
  )
}

export default PCHome

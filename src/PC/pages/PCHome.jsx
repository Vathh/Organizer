import React from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'
import JobPannel from '../components/JobPannel'
import AddIcon from '@mui/icons-material/Add';

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
    display: flex;
    flex-direction: column;
    
    :nth-of-type(2){
      margin: 0 25px;
    }
  `

  const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: center;

    ::after{
      position: absolute;
      content: '';
      height: 80%;
      top: 55%;
      transform: translateY(-50%);
      width: 1px;
      background: #999;
      right: 15%;
    }
  `

  const TypeTitle = styled.span`
    font-size: 24px;
    color: #fff;
    font-family: 'Oswald', sans-serif;
  `

  const AddIconStyles = {
    position: 'relative',
    top: '55%',
    transform: 'translateY(-50%)',
    color: '#fff',
    fontSize: '35px',
    cursor: 'pointer'
  }

//#endregion

const PCHome = () => {
  return (
    <Container>
      <LeftSide>
        <PageTitle>Xanadu Serwis</PageTitle>
        <TasksContainer>
          <SubContainer>
            <Header>
              <TypeTitle>Wyjazdy</TypeTitle>
              <AddIcon style={AddIconStyles}/>
            </Header>
            <JobPannel />
          </SubContainer>
          <SubContainer>
            <Header>
              <TypeTitle>Serwisy</TypeTitle>
              <AddIcon style={AddIconStyles}/>
            </Header>
            <JobPannel />
          </SubContainer>
          <SubContainer>
            <Header>
              <TypeTitle>Zamówienia</TypeTitle>
              <AddIcon style={AddIconStyles}/>
            </Header>
            <JobPannel />
          </SubContainer>
        </TasksContainer>
      </LeftSide>
      <RightSide>
        <Browser />
      </RightSide>
    </Container>
  )
}

export default PCHome

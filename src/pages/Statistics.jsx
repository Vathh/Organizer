import React from 'react'
import styled from 'styled-components'

//#region STYLES

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

const PageTitle = styled.h1`
    text-align: center;
    font-size: 36px;
    color: #fff;
    font-weight: normal;
    margin-bottom: 30px;
  `

const TaskContainer = styled.div`
  position: relative;
  max-height: 70%;
  width: fit-content;
  min-width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px 35px;
  color: #fff;
  background-color: rgba(0,0,0,.4);
  border-radius: 15px;
  margin-bottom: 30px;
`

const Title = styled.span`
  font-size: 28px;
`
const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

const CategoryTitle = styled.span`
  font-size: 22px;
  padding-right: 40px;
  margin-right: auto;
`

const CategoryCounter = styled.span`
  display: flex;
  font-size: 22px;
  margin-right: 15px;

  :last-of-type{
    margin-right: 0;
  }
`

const StateInfoIcon = styled.div`
  /* margin-left: auto;
  justify-self: flex-end; */
  margin: auto 10px auto 0;
  height: 8px;
  width: 8px;
  border-radius: 50%;
`

//#endregion

const Statistics = () => {
  return (
    <Container>
      <PageTitle>Statystyki</PageTitle>
      <TaskContainer>
        <Title>Wyjazdy</Title>
        <CategoryBox>
          <CategoryTitle>Oczekujące</CategoryTitle>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#ff0000'}}/> 21
          </CategoryCounter>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#ffe100'}}/> 9
          </CategoryCounter>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#09ff00'}}/> 13
          </CategoryCounter>
        </CategoryBox>
        <CategoryBox>
          <CategoryTitle>Do zafakturowania</CategoryTitle>
          <CategoryCounter>
            35
          </CategoryCounter>          
        </CategoryBox>
      </TaskContainer>

      <TaskContainer>
        <Title>Serwisy</Title>
        <CategoryBox>
          <CategoryTitle>Oczekujące</CategoryTitle>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#ff0000'}}/> 11
          </CategoryCounter>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#ffe100'}}/> 3
          </CategoryCounter>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#09ff00'}}/> 15
          </CategoryCounter>
        </CategoryBox>
        <CategoryBox>
          <CategoryTitle>Do zafakturowania</CategoryTitle>
          <CategoryCounter>
            24
          </CategoryCounter>          
        </CategoryBox>
        <CategoryBox>
          <CategoryTitle>Do wydania</CategoryTitle>
          <CategoryCounter>
            7
          </CategoryCounter>          
        </CategoryBox>
      </TaskContainer>

      <TaskContainer>
        <Title>Zamówienia</Title>
        <CategoryBox>
          <CategoryTitle>Oczekujące</CategoryTitle>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#ff0000'}}/> 7
          </CategoryCounter>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#ffe100'}}/> 2
          </CategoryCounter>
          <CategoryCounter>
            <StateInfoIcon style={{background: '#09ff00'}}/> 9
          </CategoryCounter>
        </CategoryBox>
        <CategoryBox>
          <CategoryTitle>Do zafakturowania</CategoryTitle>
          <CategoryCounter>
            12
          </CategoryCounter>          
        </CategoryBox>
        <CategoryBox>
          <CategoryTitle>Do wydania</CategoryTitle>
          <CategoryCounter>
            4
          </CategoryCounter>          
        </CategoryBox>
      </TaskContainer>
    </Container>
  )
}

export default Statistics

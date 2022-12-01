import React from 'react'
import styled from 'styled-components'
import Browser from '../components/Browser'

//#region STYLES

  const Container = styled.div`
    position: relative;
    min-width: 800px;
    max-width: 1400px;
    background: rgba(0,0,0,.1);
    margin: 0 auto;
    padding: 20px 0;
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
  `

//#endregion

const PCHome = () => {
  return (
    <Container>
      <LeftSide>
        <PageTitle>Xanadu Serwis</PageTitle>
        <Browser />
      </LeftSide>
      <RightSide>

      </RightSide>
    </Container>
  )
}

export default PCHome

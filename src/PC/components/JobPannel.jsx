import React from 'react'
import styled from 'styled-components'

//#region STYLES

  const Container = styled.div`
    height: 100px;
    width: 100%;
    background: rgba(255,255,255,.2);
    border: 1px solid rgba(255,255,255,.4);
    margin-top: 15px;
    border-radius: 15px;
    padding: 10px;
  `

  const Title = styled.span`
    color: #fff;
    font-size: 18px;
    font-family: 'Oswald', sans-serif;
  `

//#endregion

const JobPannel = () => {
  return (
    <Container>
      <Title>Naprawa c253</Title>
    </Container>
  )
}

export default JobPannel

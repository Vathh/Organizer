import React from 'react'
import styled from 'styled-components'
import LogoSvg from '../../img/OGARNIZER.svg'

//#region STYLES

  const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,.5);
  `

  // const Logo = styled.div`
    
  // `

  const Logo = styled.img`
  height: 80px;
  width: 80px;
  justify-self: flex-start;
  filter: invert(84%) sepia(21%) saturate(5849%) hue-rotate(351deg) brightness(105%) contrast(91%);
`

//#endregion

const PCNav = () => {
  return (
    <Container>
      <Logo src={LogoSvg}/>
    </Container>
  )
}

export default PCNav

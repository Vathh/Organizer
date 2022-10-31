import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Subpage from '../layouts/Subpage'

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
  background: #35065e;
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
  transition: all .5s;
`

const StylesForVisibleNav = {
  left: '70%',
  transform: 'scale(0.85)',
  borderRadius: '40px'
}

const StylesForHiddenNav = {
  left: '0',
  transform: 'scale(1.0)',
  borderRadius: '0px'
}

const ContentContainer = () => {

  const mobileNav = useSelector((state) => state.mobileNav); 

  return (
    <Container style={mobileNav.navVisible 
      ? StylesForVisibleNav 
      : StylesForHiddenNav}>
      <Subpage />
    </Container>
  )
}

export default ContentContainer

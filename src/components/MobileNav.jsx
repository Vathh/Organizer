import React from 'react'
import styled from 'styled-components'
import AvatarGraphic from '../img/avatar.jpg'

//#region STYLES
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 0;
  background: #251B37;
`

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid #767676;
  height: 100px;
  width: 100px;
  border-radius: 0 0 50% 0;
  overflow: hidden;

  ::before{
    content: '';
    position: absolute;
    height: 100px;
    width: 100px;
    background: transparent;
    border: 1px solid red;
    border-radius: 50%;
  }
`

const Avatar = styled.img`
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 50%;
`

const Test = styled.div`
  margin: 25px 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-size: 100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%;
  background-repeat: no-repeat;
  background-image: linear-gradient(#251B37, #251B37), 
                    linear-gradient(30deg, red 36%, lightgrey 30%),
                    linear-gradient(0deg, yellow 116%, lightgrey 30%),
                    linear-gradient(300deg, blue 36%, lightgrey 30%);
  background-position: center center, left top, right top, left bottom;
  background-origin: content-box, border-box, border-box, border-box;
  background-clip: content-box, border-box, border-box, border-box, border-box;
`

//#endregion

const MobileNav = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar src={AvatarGraphic}/>
      </AvatarContainer>
      <Test />
    </Container>
)}

export default MobileNav;

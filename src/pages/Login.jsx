import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(53,6,94);
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
`

const LoginPannel = styled.div`
  background-color: rgba(0,0,0,.5);

`

const Login = () => {
  return (
    <Container>
      <LoginPannel>
        
      </LoginPannel>
    </Container>
  )
}

export default Login


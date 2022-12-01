import React from 'react'
import styled from 'styled-components'
import PCNav from './PCNav';
import PCSubpage from './PCSubpage';

//#region STYLES

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
  background: #35065e;
  background: linear-gradient(60deg, #35065e 0%, #691c5e 65%, rgba(53,6,94,1) 100%);
  transition: all .5s;
`

//#endregion

const PCPage = () => {  
  return (
    <>    
      <Container>
        <PCNav />
        <PCSubpage />
      </Container>
    </>
  )
}
export default PCPage

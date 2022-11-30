import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PCNav from './PCNav';

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
      </Container>
    </>
  )
}
export default PCPage

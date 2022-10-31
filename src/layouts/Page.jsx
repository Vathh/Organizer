import React from 'react'
import styled from 'styled-components'
import MobileNav from '../components/MobileNav'
import AddIcon from '@mui/icons-material/Add';
import ContentContainer from '../components/ContentContainer';
//#region STYLES

const AddTaskBtn = styled.div`
  position: absolute;
  bottom: 65px;
  right: 35px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #35065e;
  background: linear-gradient(60deg, #2424ffdf 0%, #8818ff 65%, #2424ffdf 100%);
  box-shadow: 0 0 10px black;
  z-index: 100;

  svg{
    height: 25px;
    width: 25px;
    color: #fff;
  }
`


//#endregion

const Page = () => {  

  return (
    <>
      <MobileNav />      
      <ContentContainer />      
      <AddTaskBtn>
        <AddIcon />
      </AddTaskBtn>
    </>
  )
}
export default Page

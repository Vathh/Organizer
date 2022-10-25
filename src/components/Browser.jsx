import React, { useRef } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//#region STYLES
const Container = styled.div`
  position: relative;
  width: 75%;
  display: flex;
  align-items: center;
  margin-top: 50px;
  padding: 15px 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgba(85, 85, 85, 0.435);
`
const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  color:#fff;
  font-size: 18px;

  ::placeholder{
    color: #767676;
  }
`
const MagnifierIconStyles = {
  color: '#767676',
  transform: 'scale(1.3)',
  marginLeft: '10px',
  marginRight: '15px'
}

const SearchIconStyles = {
  position: 'absolute',
  right: '10px',
  color: '#fff'
}

//#endregion


const Browser = () => {
  
  const handleSearchBtn = () => {
    
  }

  return (
    <Container>
      <SearchIcon style={MagnifierIconStyles}/>
      <Input placeholder='Szukaj...' />
      <ArrowForwardIcon style={SearchIconStyles} onClick={handleSearchBtn}/>
    </Container>
  )
}

export default Browser

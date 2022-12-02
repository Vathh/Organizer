import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//#region STYLES

  const Container = styled.div`
    position: relative;
    width: 70%;
    display: flex;
    align-items: center;
    margin: 40px 0 30px;
    padding: 15px 20px;
    border-radius: 15px;
    background: #420939;
  `
  const Input = styled.input`
    background: none;
    border: none;
    outline: none;
    color:#fff;
    font-size: 18px;
    width: 100%;
    margin-right: 20px;

  ::placeholder{
    color: #fff;
  }
  `
  const MagnifierIconStyles = {
    color: '#fff',
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

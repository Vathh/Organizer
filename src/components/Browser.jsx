import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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

  const FilterContainer = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    padding-left: 15px;
    padding-right: 30px;

    &::after{
      content: "";
      width: 0.5px;
      height: 20px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 15px;
      background-color: #aaa;
    }
  `

  const FilterPannel = styled.div`
    position: relative;
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `

  const SelectedOption = styled.span`
    position: absolute;
    width: 100%;
    text-align: center;
    color: #aaa;
  `

  const FilterOptionsContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 120%;
    width: 100%;
    right: 0;
    background-color: #420939;
    transition: transform .3s;
    transform-origin: top;
    padding: 10px 0;
  `

  const FilterOption = styled.span`
    color: #fff;
    text-align: center;
    color: #aaa;
    cursor: pointer;
  `

  const filterOptionsVisible = {
    transform: 'scaleY(1.0)'
  }

  const filterOptionsInvisible = {
    // transform: 'scaleY(1.0)'
    transform: 'scaleY(0)'
  }

  const iconUp = {transform: 'rotate(180deg)', transition: '.3s', cursor: 'pointer'}

  const iconDown = {transform: 'rotate(0deg)', transition: '.3s', cursor: 'pointer'}

  const dotIconStyles = {
    position: 'relative',
    fontSize: '7px',
    marginRight: '7px',
    color: '#c7c7c7',
    transform: 'translateX(-50%)',
    left: '50%',
    margin: '6px 0'
  }

//#endregion

const Browser = () => {

  const [filterOptionsVisibility, setFilterOptionsVisibility] = useState(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState("Filtruj");

  const handleFilterOptionsVisiblity = () => {
    setFilterOptionsVisibility(!filterOptionsVisibility);
  }

  const handleFilterOption = (e) => {
    setSelectedOptionValue(e.target.getAttribute("data-option"));
    handleFilterOptionsVisiblity();
  }

  const handleSearchBtn = () => {
    
  }

  return (
    <Container>
      <FilterContainer style={MagnifierIconStyles}>
        <FilterAltOffIcon/>         
        <FilterPannel>
          <SelectedOption>{selectedOptionValue}</SelectedOption>
          <KeyboardArrowDownIcon style={filterOptionsVisibility ? iconUp : iconDown} onClick={handleFilterOptionsVisiblity}/>
          <FilterOptionsContainer style={filterOptionsVisibility ? filterOptionsVisible : filterOptionsInvisible}>
            <FilterOption onClick={handleFilterOption} data-option="Wyjazd">Wyjazd</FilterOption>
            <FiberManualRecordIcon style={dotIconStyles}/>
            <FilterOption onClick={handleFilterOption} data-option="Serwis">Serwis</FilterOption>
            <FiberManualRecordIcon style={dotIconStyles}/>
            <FilterOption onClick={handleFilterOption} data-option="Zamówienie">Zamówienie</FilterOption>
          </FilterOptionsContainer>
        </FilterPannel>
      </FilterContainer>
      <SearchIcon style={MagnifierIconStyles}/>
      <Input placeholder='Szukaj...' />
      <ArrowForwardIcon style={SearchIconStyles} onClick={handleSearchBtn}/>
    </Container>
  )
}

export default Browser

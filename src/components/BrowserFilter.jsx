import React, { useState } from 'react'
import styled from 'styled-components'
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';

//#region STYLES

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
  width: 120px;
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
  display: flex;
  justify-content: center;
`

const filterOptionsVisible = {
  transform: 'scaleY(1.0)'
}

const filterOptionsInvisible = {
  // transform: 'scaleY(1.0)'
  transform: 'scaleY(0)'
}

const iconUp = {
  transform: 'rotate(-180deg)', 
  transition: '.3s', 
  cursor: 'pointer'}

const iconDown = {
  transform: 'rotate(0deg)', 
  transition: '.3s', 
  cursor: 'pointer'}

const dotIconStyles = {
  position: 'relative',
  fontSize: '7px',
  marginRight: '7px',
  color: '#c7c7c7',
  transform: 'translateX(-50%)',
  left: '50%',
  margin: '6px 0'
}

const optionIconStyles = {
  fontSize: '16px',
  marginRight: '5px',
  alignSelf: 'center'
}

const MagnifierIconStyles = {
  color: '#fff',
  transform: 'scale(1.3)',
  marginLeft: '10px',
  marginRight: '15px'
}

//#endregion

const BrowserFilter = () => {

  const [filterOptionsVisibility, setFilterOptionsVisibility] = useState(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState("Filtruj");

  const handleFilterOptionsVisiblity = () => {
    setFilterOptionsVisibility(!filterOptionsVisibility);
  }

  const handleFilterOption = (e) => {
    setSelectedOptionValue(e.target.getAttribute("data-option"));
    handleFilterOptionsVisiblity();
  }

  return (
    <FilterContainer style={MagnifierIconStyles}>
        <FilterAltOffIcon/>         
        <FilterPannel>
          <SelectedOption>{selectedOptionValue}</SelectedOption>
          <KeyboardArrowDownIcon style={filterOptionsVisibility ? iconUp : iconDown} onClick={handleFilterOptionsVisiblity}/>
          <FilterOptionsContainer style={filterOptionsVisibility ? filterOptionsVisible : filterOptionsInvisible}>
            <FilterOption onClick={handleFilterOption} data-option="Wyjazd">
              <DirectionsCarIcon style={optionIconStyles}/> Wyjazd
            </FilterOption>
            <FiberManualRecordIcon style={dotIconStyles}/>
            <FilterOption onClick={handleFilterOption} data-option="Serwis">
              <BuildIcon style={optionIconStyles}/> Serwis
            </FilterOption>
            <FiberManualRecordIcon style={dotIconStyles}/>
            <FilterOption onClick={handleFilterOption} data-option="Zamówienie">
              <ShoppingCartIcon style={optionIconStyles}/> Zamówienie
            </FilterOption>
          </FilterOptionsContainer>
        </FilterPannel>
      </FilterContainer>
  )
}

export default BrowserFilter

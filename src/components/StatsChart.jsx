import React from 'react'
import styled from 'styled-components'

//#region STYLES
  
  const StatsChartContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 200px;
    background: rgba(255,255,255,.1);
    margin-top: 15px;
    border-bottom: 2px solid rgba(255,255,255,.2);
  `

  const ChartColumn = styled.div`
    position: relative;
    bottom: 0;
    width: 30px;
    border-bottom: none;
    background-color: transparent;
    background: #420939;
    color: #aaa;
    opacity: 0.7;
    margin-top: 30px;

    &:first-of-type{
      background: red;  
    }

    &:nth-of-type(2){
      height: 90px;
      background: yellow;
    }

    &:nth-of-type(3){
      height: 45px;
      background: green
    }
  `

  const ColumnPercentage = styled.span`
    position: absolute;
    top: -30px;
    font-size: 19px;
    font-weight: 700;
  `

//#endregion

const StatsChart = ({highPriority, mediumPriority, lowPriority}) => {

  const highPriorityStyle = highPriority + 'px';
  const mediumPriorityStyle = mediumPriority + 'px';
  const lowPriorityStyle = lowPriority + 'px';

  return (   
    <StatsChartContainer>
      <ChartColumn style={{height: highPriorityStyle}}>
        <ColumnPercentage>{highPriority}%</ColumnPercentage>
      </ChartColumn>
      <ChartColumn style={{height: mediumPriorityStyle}}>
        <ColumnPercentage>{mediumPriority}%</ColumnPercentage>
      </ChartColumn>
      <ChartColumn style={{height: lowPriorityStyle}}>
        <ColumnPercentage>{lowPriority}%</ColumnPercentage>
      </ChartColumn>
    </StatsChartContainer>
  )
}

export default StatsChart

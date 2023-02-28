import React from 'react'
import styled from 'styled-components'

//#region STYLES
  
  const StatsChartContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 200px;
    background: rgba(0,0,0,.1);
    margin-top: 15px;
    border-bottom: 2px solid rgba(255,255,255,.2);
    padding-top: 15px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  `

  const ChartColumn = styled.div`
    position: relative;
    bottom: 0;
    width: 30px;
    border-bottom: none;
    background-color: transparent;
    background: #420939;
    color: #eee;
    opacity: .9;
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
    font-weight: 500;
  `

//#endregion

const StatsChart = ({highPriority, mediumPriority, lowPriority}) => {

  const highPriorityHeight = highPriority + 'px';
  const mediumPriorityHeight = mediumPriority + 'px';
  const lowPriorityHeight = lowPriority + 'px';

  return (   
    <StatsChartContainer>
      <ChartColumn style={{height: highPriorityHeight}}>
        <ColumnPercentage>{highPriority}%</ColumnPercentage>
      </ChartColumn>
      <ChartColumn style={{height: mediumPriorityHeight}}>
        <ColumnPercentage>{mediumPriority}%</ColumnPercentage>
      </ChartColumn>
      <ChartColumn style={{height: lowPriorityHeight}}>
        <ColumnPercentage>{lowPriority}%</ColumnPercentage>
      </ChartColumn>
    </StatsChartContainer>
  )
}

export default StatsChart

import React from 'react'
import styled from 'styled-components'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//#region STYLES

const Statistic = styled.div`
    flex: 1;
    display: flex;
  `

  const StatsIcon = {
    fontSize: '40px',
    color: '#fff'
  }

  const Priorities = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

  const Counter = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
  `

  const Priority = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: red;
  `

  const Count = styled.span`
    margin-left: 10px;
    font-size: 20px;
    color: #fff;
  `

//#endregion

function renderSwitch(param){
  switch(param){
    case 'job':
      return <DirectionsCarIcon style={StatsIcon}/>;
    case 'service':
      return <HomeIcon style={StatsIcon}/>;
    case 'order':
      return <ShoppingCartIcon style={StatsIcon}/>;
    default:
      return <DirectionsCarIcon style={StatsIcon}/>;
  }
}

const TasksStatistics = ({icon}) => {

  return (
    <Statistic>
      {renderSwitch(icon)}
      <Priorities>
        <Counter>
          <Priority/><Count>7</Count>
        </Counter>
        <Counter>
          <Priority style={{backgroundColor: 'yellow'}}/><Count>4</Count>
        </Counter>
        <Counter>
          <Priority style={{backgroundColor: 'green'}}/><Count>9</Count>
        </Counter>
      </Priorities>
    </Statistic>
  )
}

export default TasksStatistics

import React from 'react'
import styled from 'styled-components'

//#region STYLES

  const Container = styled.div`
    height: 300px;
    width: 300px;
    background: rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: arial;
    font-size: 16px;
    margin: 0;
    background:#171f1a;
    color: #fff;
  `

  const OutsideCircle = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: red;
  `

  const InsideCircle = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    clip: rect(0px, 75px, 75px, 0px);
    background-color: #227ded;
    transform: rotate(135deg);
  `

  const XBox = styled.div`
    width: 70vh;
    height: 70vh;
    border-radius: 50%;
    background-color:green;
    background:repeating-conic-gradient(
      from 0deg,
      #ff264a 0deg calc(3.6deg * 35),
      #feec1e calc(3.6deg * 35) calc(3.6deg * 70),
      #12CBC4 calc(3.6deg * 70) calc(3.6deg * 100)
    );
  `

  const XBoxCont = styled.div`
    font-size: 30px;
    padding-left: 50px;

    h1{
      font-size: 30px;
	    text-transform: uppercase;
    }

    strong{
      display: block;
	    margin-bottom: 15px;
    }
  `

  const style1 = {
    color: '#ff264a'
  }

  const style2 = {
    color: '#feec1e'
  }

  const style3 = {
    color: '#12CBC4'
  }


//#endregion

const StatisticsPannel = () => {
  return (
    <Container>
      <XBox ></XBox>
      <XBoxCont >
        <h1>Seasons of the year</h1>
        <strong style={style1}>Summer 35%</strong>
        <strong style={style2}>Monsoon 35%</strong>
        <strong style={style3}>Winter 30%</strong>
      </XBoxCont>
    </Container>
  )
}

export default StatisticsPannel

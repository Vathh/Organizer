import React from 'react'
import styled from 'styled-components'
import Avatar from '../../img/avatar.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';

//#region STYLES

  const Container = styled.div`
    position: relative;
    width: 100%;
    background: rgba(255,255,255,.2);
    border: 1px solid rgba(255,255,255,.4);
    margin-top: 15px;
    border-radius: 15px;
    padding: 10px;
  `

  const Description = styled.span`
    color: #fff;
    font-size: 18px;
    font-family: 'Oswald', sans-serif;
  `

  const Priority = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: red;
  `

  const Category = styled.p`
    font-size: 16px;
    color: #ccc;
    margin-top: 6px;
  `

  const Info = styled.span`
    color: #fff;
  `

  const Navigation = styled.div`
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  `

  const UserAvatar = styled.div`
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-image: url("${Avatar}");
    background-position: center;
    background-size: cover;

    ::after{
      content: '';
      position: absolute;
      width: 1px;
      height: 70%;
      background-color: #999;
      right: -15px;
      top: 50%;
      transform: translateY(-50%);
    }
  `

  const NavBtn = styled.div`
    
  `

  const IconStyles = {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff'
  }


//#endregion

const JobPannel = () => {
  return (
    <Container>
      <Description>Naprawa c253 <Priority /></Description>
      <Category>Miejsce: <Info>Padma 3.0 magazyn</Info></Category>
      <Category>Urządzenie: <Info>BIZHUB 223</Info></Category>
      <Category>Dodatkowe informacje: <Info>Brudzi, sprawdzic beben i transfer</Info></Category>
      <Category>Aktualizacja: <Info>Test test</Info></Category>
      <Navigation>
        <UserAvatar/>
        <NavBtn>
          <MoreVertIcon style={IconStyles}/>
        </NavBtn>
      </Navigation>
    </Container>
  )
}

export default JobPannel

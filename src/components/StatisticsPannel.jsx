import React from 'react'
import styled from 'styled-components'
import StatsChart from './StatsChart'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CategoryStamp from './CategoryStamp';

//#region STYLES

  const Container = styled.div`
    background: rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 40px;
    border-radius: 25px;
  `

  const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  `

  const StatsTypeTitle = styled.p`
    font-size: 28px;
    color: #fff;
  `

  const CategoriesBox = styled.div`
    position: relative;
    height: 220px;
    width: 220px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;    
    margin-top: 20px;
  `


//#endregion

const StatisticsPannel = () => {
  return (
    <Container>
      <StatsContainer>
        <StatsTypeTitle>Wyjazdy</StatsTypeTitle>
        <StatsChart highPriority={10} mediumPriority={60} lowPriority={30}/>
        <CategoriesBox>
          <CategoryStamp icon="new" description="Nowe" amount="14"/>
          <CategoryStamp icon="pending" description="Oczekujące" amount="7"/>
          <CategoryStamp icon="toInvoice" description="Do rozliczenia" amount="3"/>
          <CategoryStamp icon="total" description="Suma" amount="24"/>
        </CategoriesBox>
      </StatsContainer>
      <StatsContainer>
        <StatsTypeTitle>Serwisy</StatsTypeTitle>
        <StatsChart highPriority={15} mediumPriority={45} lowPriority={40}/>
        <CategoriesBox>
          <CategoryStamp icon="new" description="Nowe" amount="4"/>
          <CategoryStamp icon="pending" description="Oczekujące" amount="9"/>
          <CategoryStamp icon="toInvoice" description="Do rozliczenia" amount="12"/>
          <CategoryStamp icon="total" description="Suma" amount="25"/>
        </CategoriesBox>
      </StatsContainer>
      <StatsContainer>
        <StatsTypeTitle>Zamówienia</StatsTypeTitle>
        <StatsChart highPriority={5} mediumPriority={80} lowPriority={15}/>
        <CategoriesBox>
          <CategoryStamp icon="new" description="Nowe" amount="1"/>
          <CategoryStamp icon="pending" description="Oczekujące" amount="5"/>
          <CategoryStamp icon="toInvoice" description="Do rozliczenia" amount="2"/>
          <CategoryStamp icon="total" description="Suma" amount="8"/>
        </CategoriesBox>
      </StatsContainer>
    </Container>
  )
}

export default StatisticsPannel

import { useSelector } from "react-redux";
import styled from "styled-components"
import { Navigate } from 'react-router-dom'
import MobileNavBtn from "../components/MobileNavBtn";
import MobileNav from "../components/MobileNav";

//#region STYLES
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
`

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;  
  background: #35065e;
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
  z-index: 1;
`
//#endregion


const Home = () => {
  const auth = useSelector((state) => state.auth);
  if(!auth.confirmed){
    return <Navigate to='/'/>
  }
  return (
    <Container>
      <MobileNav />
      <HomeContainer>
        <MobileNavBtn />

      </HomeContainer>
    </Container>
  )
}

export default Home

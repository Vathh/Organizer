import { useSelector } from "react-redux";
import styled from "styled-components"
import { redirect } from 'react-router-dom'

//#region STYLES
const Container = styled.div`
  
`
//#endregion


const Home = () => {
  const auth = useSelector((state) => state.auth);
  if(!auth.confirmed){
    return redirect("/");
  }
  return (
    <Container>
      
    </Container>
  )
}

export default Home

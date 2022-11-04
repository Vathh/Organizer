import React from 'react'
import styled from 'styled-components'

//#region STYLES

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100vw; 
  padding-top: 25px;
  padding-bottom: 100px;
`

const LoginPannel = styled.form`
  width: 300px;
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding: 15px;
  background-color: rgba(0,0,0,.5);
  color: white;
  border-radius: 15px;
  margin-bottom: 200px;
`

const FormInput = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 30px 20px; 
`
const Label = styled.label`
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 18px;
  padding: 0 2px;
  transition: all .2s;
  letter-spacing: 1px;
  z-index: 1;
  pointer-events: none;

  ::before{
    content: "";
    width: 100%;
    position: absolute;
    top: 13px;
    left: 0;
    height: 2px;
    background: rgba(105,28,94,1);
    z-index: -1;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  padding-left: 12px;
  font-size: 18px;
  border: 2px solid #3d1a48; 
  border-radius: 5px;
  background: rgba(105,28,94,1);
  color: white;
  outline: none;
  transition: all .3s;

  :focus{
    border: 2px solid #cda619;

    ::placeholder{
      opacity: 1;
      animation-delay: .2s;
    }

    +label{
      top: -13px;
      color: #cda619;
    }
  }  

  :not(:placeholder-shown){
    +label{
      top: -13px;
      color: #cda619;
    }
  }  

  ::placeholder{
    font-size: 16px;
    color: white;
    opacity: 0;
    transition: all .3s;
  }

  :-webkit-autofill,
  :-webkit-autofill:focus{
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`

const SubmitBtn = styled.button`
  margin: 20px 20px 45px;
  padding: 9px 0;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background: rgb(53,6,94);
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%);
  color:white;
  outline: none;
  transition: transform .3s;

  :focus{
    transform: scale(1.1);
  }
`

const ErrorMsg = styled.span`
  position: absolute;
  text-align: center;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
`

//#endregion

const AddTask = () => {
  return (
    <Container>
      <LoginPannel>
          <FormInput>
            <Input type="text" placeholder='Wpisz swój login' name={"login"} />
            <Label >Login</Label>
          </FormInput>

          <FormInput>
            <Input type="text" placeholder='Wpisz hasło' name={"password"}/>
            <Label>Hasło</Label>
          </FormInput>
          <SubmitBtn >Zaloguj się</SubmitBtn>
          <ErrorMsg>Coś poszło nie tak.. <br/>Spróbuj ponownie</ErrorMsg>
        </LoginPannel>
      
    </Container>
  )
}

export default AddTask

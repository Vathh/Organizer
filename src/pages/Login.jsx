import React, { useReducer } from 'react'
import styled from 'styled-components'
import {INITIAL_LOGIN_FETCH_STATE, loginPostReducer} from '../helpers/loginPostReducer'
import {LOGIN_TYPES} from '../helpers/actionTypes'
import { INITIAL_LOGIN_FORM_STATE, loginFormReducer } from '../helpers/loginFormReducer'
import LogoSvg from '../img/OGARNIZER.svg'


//#region STYLES
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #35065e;
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
  background-color: rgba(0,0,0,.5);
`
const Logo = styled.img`
  height: 300px;
  width: 300px;
  justify-self: flex-start;
  filter: invert(84%) sepia(21%) saturate(5849%) hue-rotate(351deg) brightness(105%) contrast(91%);
`

const LoginPannel = styled.form`
  position: relative;
  width: 300px;
  margin: 0 20px;
  top: 50px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,.5);
  color: white;
  border-radius: 15px;
  padding: 15px;
`

const FormInput = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 30px 20px; 
`
const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 14px;
  transition: all .2s;
  padding: 0 2px;
  z-index: 1;

  ::before{
    content: "";
    height: 5px;
    background: rgba(105,28,94,1);
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    z-index: -1;
  }
`

const Input = styled.input`
  padding: 0.4rem;
  width: 100%;
  height: 100%;
  border: 2px solid #3d1a48; 
  border-radius: 5px;
  background: rgba(105,28,94,1);
  font-size: 18px;
  outline: none;
  color: white;
  transition: all .3s;
  padding-left: 12px;

  :focus{
    border: 2px solid #cda619;

    ::placeholder{
      opacity: 1;
      animation-delay: .2s;
    }

    +label{
      top: -10px;
      color: #cda619;
    }
  }  

  :not(:placeholder-shown){
    +label{
      top: -10px;
      color: #cda619;
    }
  }  

  ::placeholder{
    color: white;
    font-size: 16px;
    opacity: 0;
    transition: all .3s;
  }
`

const SubmitBtn = styled.button`
  margin: 20px 20px 15px;
  font-size: 18px;
  padding: 9px 0;
  border-radius: 10px;
  background: rgb(53,6,94);
background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%);
  color:white;
  border: none;
  background-size: cover;
  outline: none;
  transition: transform .3s;

  :focus{
    transform: scale(1.1);
  }
`


//#endregion

const Login = () => {

  //#region FETCHSERVICE
  const [fetchState, fetchDispatch] = useReducer(loginPostReducer, INITIAL_LOGIN_FETCH_STATE);

  const handleFetch = () => {
    fetchDispatch({type:LOGIN_TYPES.FETCH_START})
      fetch("https://")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          fetchDispatch({type:LOGIN_TYPES.FETCH_SUCCESS, payload: data});
        })
        .catch((err) => {
          fetchDispatch({tpye: LOGIN_TYPES.FETCH_ERROR});
        })
  }
  //#endregion

  //#region FORM SERVICE
  const [formState, formDispatch] = useReducer(loginFormReducer, INITIAL_LOGIN_FORM_STATE);

  const handleChange = (e) => {
    formDispatch({
      type:"CHANGE_INPUT", 
      payload:{name: e.target.name, value: e.target.value}
    });
  };
  //#endregion
  

  return (
    <Container>
      <Logo src={LogoSvg}/>
        <LoginPannel>
          <FormInput>
            <Input type="text" placeholder='Wpisz swój login' onChange={handleChange} name={"login"} />
            <Label >Login</Label>
          </FormInput>

          <FormInput>
            <Input type="text" placeholder='Wpisz hasło' onChange={handleChange} name={"password"}/>
            <Label>Hasło</Label>
          </FormInput>
          <SubmitBtn>Zaloguj się</SubmitBtn>
        </LoginPannel>
    </Container>
  )
}

export default Login


//#region FETCH BTN Z PORADNIKA
{/* <button onClick={handleFetch}>
  {fetchState.loading ? "Wait..." : "Fetch the post"}
</button>
<p>{fetchState.post?.title}</p>
<span>{fetchState.error && "Something went wrong!"}</span> */}
//#endregion


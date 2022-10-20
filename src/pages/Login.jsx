import React, { useReducer } from 'react'
import styled from 'styled-components'
import {INITIAL_LOGIN_FETCH_STATE, loginPostReducer} from '../helpers/loginPostReducer'
import {LOGIN_TYPES} from '../helpers/actionTypes'
import { INITIAL_LOGIN_FORM_STATE, loginFormReducer } from '../helpers/loginFormReducer'

//#region STYLES
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(53,6,94);
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
  background-color: rgba(0,0,0,.5);
`

const LoginPannel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,.5);
  color: white;
  border-radius: 15px;
  padding: 15px;
`

const FormInput = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
`
const Label = styled.label`
  font-size: 16px;
  padding: 5px 10px;
`

const Input = styled.input`
  font-size: 16px;  
  border: none;
  padding: 0 10px;
  border-radius: 6px;
  background: rgba(105,28,94,1);
  color: white;
  transition: transform .3s;

  ::placeholder{
    color: white;
  }

  :focus{
    outline: none;
    transform: scale(1.05);
  }
`

const SubmitBtn = styled.button`
  margin: 20px 15px 15px;
  font-size: 18px;
  padding: 9px 30px;
  border-radius: 10px;
  background: rgb(37,67,170);
  background: linear-gradient(60deg, #162864 0%, #6f1862 65%);
  color:white;
  border: none;
  background-size: cover;
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
        <LoginPannel>
          <FormInput>
            <Label>Login:</Label>
            <Input type="text" placeholder='Login' onChange={handleChange} name={"login"}/>
          </FormInput>

          <FormInput>
            <Label>Hasło:</Label>
            <Input type="text" placeholder='Hasło' onChange={handleChange} name={"password"}/>
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


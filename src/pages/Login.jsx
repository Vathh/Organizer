import React, { useReducer } from 'react'
import styled from 'styled-components'
import LoginInput from '../components/LoginInput'
import Navbar from '../components/Navbar'
import { INITIAL_LOGIN_STATE, loginPostReducer} from '../helpers/loginPostReducer'
import {LOGIN_TYPES} from '../helpers/actionTypes'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(53,6,94);
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
`

const LoginPannel = styled.div`
  background-color: rgba(0,0,0,.5);
`
const Login = () => {
  const [state, dispatch] = useReducer(loginPostReducer, INITIAL_LOGIN_STATE);

  const handleFetch = () => {
    dispatch({type:LOGIN_TYPES.FETCH_START})
      fetch("https://")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch({type:LOGIN_TYPES.FETCH_SUCCESS, payload: data});
        })
        .catch((err) => {
          dispatch({tpye: LOGIN_TYPES.FETCH_ERROR});
        })
  }

  return (
    <Container>
      <LoginPannel>
        <LoginInput title={"Login"}/>
        <LoginInput title={"Hasło"}/>
      </LoginPannel>
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </Container>
  )
}

export default Login


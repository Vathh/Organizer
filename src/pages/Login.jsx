import React, { useReducer } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'
import { INITIAL_LOGIN_FORM_STATE, loginFormReducer } from '../helpers/loginFormReducer'
import LogoSvg from '../img/OGARNIZER.svg'
import { users } from '../data'
import { updateError, updateSuccess } from '../redux/authSlice';
import { updateUser } from '../redux/userSlice'

import { logIn } from '../services/authenticationService'


//#region STYLES
const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 0px;
  background: #35065e;
  background: linear-gradient(60deg, rgba(53,6,94,1) 0%, rgba(105,28,94,1) 65%, rgba(53,6,94,1) 100%);
`
const Logo = styled.img`
  height: 300px;
  width: 300px;
  justify-self: flex-start;
  filter: invert(84%) sepia(21%) saturate(5849%) hue-rotate(351deg) brightness(105%) contrast(91%);
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

const Login = () => {

  const [formState, formDispatch] = useReducer(loginFormReducer, INITIAL_LOGIN_FORM_STATE);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();  
  const user = useSelector((state) => state.user)

  const testUser = {
    "Login" : "admin",
    "Password" : "adminpassword"
}

  // //#region FETCHSERVICE
  // const [fetchState, fetchDispatch] = useReducer(loginPostReducer, INITIAL_LOGIN_FETCH_STATE);

  // const handleFetch = () => {
  //   fetchDispatch({type:LOGIN_TYPES.FETCH_START})
  //     fetch("https://")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         fetchDispatch({type:LOGIN_TYPES.FETCH_SUCCESS, payload: data});
  //       })
  //       .catch((err) => {
  //         fetchDispatch({tpye: LOGIN_TYPES.FETCH_ERROR});
  //       })
  // }
  // //#endregion

  const handleInputChange = (e) => {
    formDispatch({
      type:"CHANGE_INPUT", 
      payload:{name: e.target.name, value: e.target.value}
    });
  };  
  
  const handleLoginBtn = (e) => {
    e.preventDefault();

    logIn(testUser)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    // let ciasto;
    // let name = "";
    // let jwtKey = "";
    // if(users.find(user => user.Login === formState.login && user.PasswordHash === formState.password)){
    //   ciasto = users.find(x => x.Login === formState.login);
    //   name = ciasto.Name;
    //   jwtKey = "testJWTkey"
    
    // }    

    // if(name !== ""){
    //   dispatch(updateUser({name, jwtKey}));
    //   dispatch(updateSuccess());
    //   formDispatch({
    //     type:"CHANGE_INPUT", 
    //     payload:{name: "", value: ""}
    //   });
    //   navigate('/home');
    // }else{
    //   dispatch(updateError());
    // }    


  }

  return (
    <Container>
      <Logo src={LogoSvg}/>
        <LoginPannel>
          <FormInput>
            <Input type="text" placeholder='Wpisz swój login' onChange={handleInputChange} name={"login"} />
            <Label>Login</Label>
          </FormInput>

          <FormInput>
            <Input type="text" placeholder='Wpisz hasło' onChange={handleInputChange} name={"password"}/>
            <Label>Hasło</Label>
          </FormInput>
          <SubmitBtn onClick={handleLoginBtn}>Zaloguj się</SubmitBtn>
          {auth.error && <ErrorMsg>Coś poszło nie tak.. <br/>Spróbuj ponownie</ErrorMsg>}
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


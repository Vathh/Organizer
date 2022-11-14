import React, { useReducer } from 'react'
import styled from 'styled-components'
import { ADD_ORDER_FORM_STATE, taskReducer } from '../helpers/taskReducer'

//#region STYLES

const JobPannel = styled.form`
  position: relative;
  height: fit-content;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px;
  background-color: rgba(0,0,0,.5);
  color: white;
  border-radius: 15px;
`

const FormInput = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 25px 20px; 
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

const SelectLabel = styled.label`
  position: relative;
  top: 8px;
  left: 10px;
  font-size: 18px;
  padding: 0 2px;
  letter-spacing: 1px;
  z-index: 1;
  pointer-events: none;
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

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`

const SubmitBtn = styled.button`
  padding: 10px 30px;
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

const Select = styled.select`
  background: rgba(105,28,94,1);
  color: white;
  padding: 4px;
  width: 60px;
  border: 2px solid #3d1a48; 
  border-radius: 5px;
  font-size: 24px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  font-weight: bold;
  transition: border .3s;

  :focus{
    border: 2px solid rgba(255, 255, 255, 0.2);
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

const AddOrderPannel = () => {

  const [formState, formDispatch] = useReducer(taskReducer,ADD_ORDER_FORM_STATE);

  const handleInputChange = (e) => {
    formDispatch({
      type:"CHANGE_INPUT", 
      payload:{name: e.target.name, value: e.target.value}
    });
  }; 

  return (
    <JobPannel>
        <FormInput>
          <Input type="text" placeholder='Opis zamówienia' name={"description"} onChange={handleInputChange}/>
          <Label>Opis</Label>
        </FormInput>

        <FormInput>
          <Input type="text" placeholder='Nazwa zleceniodawcy' name={"client"} onChange={handleInputChange}/>
          <Label>Klient</Label>
        </FormInput>

        <FormInput>
          <Input type="text" placeholder='Przedmiot interwencji' name={"object"} onChange={handleInputChange}/>
          <Label>Urządzenie</Label>
        </FormInput>

        <FormInput>
          <Input type="text" placeholder='Dodatkowe informacje' name={"additionalInfo"} onChange={handleInputChange}/>
          <Label>Uwagi</Label>
        </FormInput>

        <FormInput style={{justifyContent: 'space-around'}}>
          <SelectLabel >Priorytet wykonania</SelectLabel>
          <Select name="priority" onChange={handleInputChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
        </FormInput>

        <ActionButtons>
          <SubmitBtn>Dodaj</SubmitBtn>
          <SubmitBtn>Anuluj</SubmitBtn>        
        </ActionButtons>
        {/* <ErrorMsg>Coś poszło nie tak.. <br/>Spróbuj ponownie</ErrorMsg> */}
      </JobPannel>
  )
}

export default AddOrderPannel

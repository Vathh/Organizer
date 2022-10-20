import styled from 'styled-components'

const FormInput = styled.div`
  padding: 10px 5px;
  //margin: 10px;
`
const Label = styled.label`
  font-size: 16px;
  padding: 5px 0;
`

const Input = styled.input`
  font-size: 16px;
`

const LoginInput = ({title}) => {
  return (
    <FormInput>
      <Label>{title}</Label>
      <Input type="text" />
    </FormInput>
  )
}

export default LoginInput

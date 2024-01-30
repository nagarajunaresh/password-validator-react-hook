import styled from 'styled-components'

export const AppWrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

export const ContentWrapper = styled.div`
  background-color: #475569;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); /* Box shadow for the content */
`

export const PasswordValidatorWrapper = styled.div`
  text-align: center;
  margin: 20px;
  background-color: ;
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
`

export const SubHeading = styled.p`
  color: white;
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 30px;
`

export const StyledInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  font-size: 16px;
`

export const ValidationMessage = styled.p`
  color: ${({isValid}) => (isValid ? 'green' : 'red')};
  font-weight: bold;
`

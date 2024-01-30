import {useState} from 'react'
import {
  AppWrapper,
  ContentWrapper,
  Heading,
  SubHeading,
  StyledInput,
  ValidationMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [userPassword, setUserPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  const validatePassword = password => {
    const isLengthValid = password.length >= 8
    setIsValid(isLengthValid)
  }

  const handlePasswordChange = e => {
    const newPassword = e.target.value
    setUserPassword(newPassword)
    validatePassword(newPassword)
  }

  return (
    <AppWrapper>
      <ContentWrapper>
        <Heading>Password Validator</Heading>
        <SubHeading>Check how strong and secure is your password</SubHeading>
        <StyledInput
          type="password"
          placeholder="Enter your password"
          value={userPassword}
          onChange={handlePasswordChange}
        />
        <ValidationMessage isValid={isValid}>
          {isValid ? '' : 'Your password must be at least 8 characters'}
        </ValidationMessage>
      </ContentWrapper>
    </AppWrapper>
  )
}

export default PasswordValidator

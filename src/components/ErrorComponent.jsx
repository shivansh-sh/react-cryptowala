import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
  return (
    <Alert
    bottom={"4"}
    >
      <AlertIcon />
      {message}
    </Alert>
    )
}

export default ErrorComponent
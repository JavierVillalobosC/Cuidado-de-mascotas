import React from 'react'

import { Input, Stack, Button} from '@chakra-ui/react'
const ImputTest = () => {
  return (
    <Stack spacing={3}>
       <Input placeholder='Basic usage' />
       <Button colorScheme='blue' onClick={(e) => {e.preventDefault(), window.location.href='http://localhost:3000' }} > Button</Button>
    </Stack>
  )
}

export default ImputTest
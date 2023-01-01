
import {useState} from 'react'
import {Container, Stack} from '@chakra-ui/react'
import ImputTest from '../components/ImputTest'

export default function Home() {

  const [value, setValue] = useState()

  return (
    <Container maxW="container.xl" centerContent>
      <Stack my={3} >
        <ImputTest />
      </Stack>
      
    </Container>

    
  )
}


import {useState} from 'react'
import {Button, Container, Input, Heading, Stack,Box, Flex} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {

 // const [value, setValue] = useState('')
  const router = useRouter()

  const oncuidador = async (e) => {
		e.preventDefault()
		router.push('/adminmenu')
	}

  const onvecino = async (e) => {
		e.preventDefault()
    router.push('/vecinomenu')
	}

  return (
    
    <Container maxW="container.xl" centerContent>
			<Heading textAlign={"center"} my={100}>Seleccione al usuario</Heading>
			<Stack direction ='row' spacing={4}>
			<Button colorScheme="teal" onClick={oncuidador} size='lg'> Cuidador</Button>
            <Button colorScheme="teal" onClick={onvecino} size='lg'> Vecino</Button>
			</Stack>
            
		</Container>
	

  )
}

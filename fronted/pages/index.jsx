
import {useState} from 'react'
import {Button, Container, Input, Heading, Stack} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {

 // const [value, setValue] = useState('')
  const router = useRouter()

  const oncuidador = async (e) => {
		e.preventDefault()
		router.push('/ingreso')
	}

  const onvecino = async (e) => {
		e.preventDefault()
		router.push('/ingresos')
	}

  return (

    <Container maxW="container.xl" centerContent>
			<Heading textAlign={"center"} my={100}>Seleccione el perfil</Heading>
			<Stack direction ='row' spacing={4}>
				<Button colorScheme="teal" onClick={oncuidador} size='lg'>Cuidador</Button>
        <Button colorScheme="teal" onClick={onvecino} size='lg'>vecino</Button>
			</Stack>
		</Container>

  )
}

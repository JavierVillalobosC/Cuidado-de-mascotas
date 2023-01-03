
import {useState} from 'react'
import {Button, Container, Input, Heading, Stack} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function adminmenu() {

 // const [value, setValue] = useState('')
  const router = useRouter()

  const onretiros= async (e) => {
		e.preventDefault()
		router.push('/retiros')
	}

  const oningresos= async (e) => {
		e.preventDefault()
    router.push('/ingresos')
	}
  const oncomments= async (e) => {
		e.preventDefault()
    router.push('/comentarios')
	}

  return (

    <Container maxW="container.xl" centerContent>
			<Heading textAlign={"center"} my={100}>¿Qué desea hacer?</Heading>
			<Stack direction ='row' spacing={4}>
			<Button colorScheme="teal" onClick={onretiros} size='lg'> Ver Retiros</Button>
            <Button colorScheme="teal" onClick={oningresos} size='lg'> Ver Ingresos</Button>
			</Stack>
            <Stack direction ='row' spacing={4} py='4'>
			<Button colorScheme="teal" onClick={oncomments} size='lg'> Dejar un comentario</Button>
			</Stack>
            <Stack direction ='row' py='10'>
				<Button colorScheme="teal" onClick={() => router.push('/')} size='lg'>Atras</Button>
        
			</Stack>
		</Container>

 )
}
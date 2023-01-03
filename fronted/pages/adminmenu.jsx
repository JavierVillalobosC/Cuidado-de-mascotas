
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
    router.push('/Ingresos')
	}
  const oncomments= async (e) => {
		e.preventDefault()
    router.push('/comentarios')
	}

	const oncrearmascotas = async (e) => {
		e.preventDefault()
		router.push('/crearmascotas')
	}

	const onvermascotas = async (e) => {
		e.preventDefault()
		router.push('/vermascotas')
	}

	const onvecinos = async (e) => {
		e.preventDefault()
		router.push('/vecinos')
	}

	const oncuidadores = async (e) => {
		e.preventDefault()
		router.push('/cuidadores')
	}

  return (

    <Container maxW="container.xl" centerContent>
			<Heading textAlign={"center"} my={100}>¿Qué desea hacer?</Heading>
			<Stack direction ='row' spacing={4}>
			<Button colorScheme="teal" onClick={onretiros} size='lg'> Ver Retiros</Button>
            <Button colorScheme="teal" onClick={oningresos} size='lg'> Ver Ingresos</Button>
			<Button colorScheme="teal" onClick={onvermascotas} size='lg'> Ver Mascotas</Button>
			<Button colorScheme="teal" onClick={onvecinos} size='lg'> Ver Vecinos</Button>
			<Button colorScheme="teal" onClick={oncuidadores} size='lg'> Ver Cuidadores</Button>

			</Stack>
            <Stack direction ='row' spacing={4} py='4'>
			<Button colorScheme="teal" onClick={oncrearmascotas} size='lg'> Ingresar Mascotas</Button>
			<Button colorScheme="teal" onClick={oncomments} size='lg'> Dejar un comentario</Button>
			</Stack>
            <Stack direction ='row' py='10'>
				<Button colorScheme="teal" onClick={() => router.push('/')} size='lg'>Atras</Button>
        
			</Stack>
		</Container>

 )
}
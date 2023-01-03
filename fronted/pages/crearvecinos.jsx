import { useState } from 'react'
import { Textarea, Button, Container, Input, Stack, Text, HStack, Heading, FormControl, FormLabel } from '@chakra-ui/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

const vecinos = () => {

	const [values, setValues] = useState({
		rut: '',
		name: '',
		lastname: '',
		address: '',
        email: '',
        phone: ''
	})
	const router = useRouter()

	const onSubmit = async (e) => {
		e.preventDefault()
		console.log(values)
		try {
			const response = await axios.post(`${process.env.API_URL}/vecino`, values)
			console.log(response)
			if (response.status === 201) {
				Swal.fire({
					title: 'Vecino creado',
					text: 'El vecino se ha creado correctamente',
					icon: 'success',
					confirmButtonText: 'Ok'
				}).then((result) => {
					router.push('/')
				})

			} else {
				Swal.fire({
					title: 'Error',
					text: 'Ha ocurrido un error',
					icon: 'error',
					confirmButtonText: 'Ok'
				})
			}
		} catch (err) {
			Swal.fire({
				title: 'Error',
				text: 'Ha ocurrido un error',
				icon: 'error',
				confirmButtonText: 'Ok'
			})
		}
	}

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}

	return (
		<Container maxW="container.md">
			<Heading textAlign={"center"} my={10}>Crear Vecinos</Heading>
			<Stack>
				<FormControl>
					<FormLabel>Rut Vecino</FormLabel>
					<Input placeholder="Rut vecino" type={"text"} onChange={onChange} name={"rut"} />
				</FormControl>
				<FormControl>
					<FormLabel>Nombre</FormLabel>
					<Input placeholder="Nombre" type={"text"} onChange={onChange} name={"name"} />
				</FormControl>
				<FormControl>
					<FormLabel>Apellido</FormLabel>
					<Input placeholder="Apellido" type={"text"} onChange={onChange} name={"lastname"} />
				</FormControl>
				<FormControl>
					<FormLabel>Dirección</FormLabel>
					<Textarea placeholder="Dirección" onChange={onChange} name={"address"} />
				</FormControl>
                <FormControl>
					<FormLabel>Correo</FormLabel>
					<Textarea placeholder="Correo" onChange={onChange} name={"email"} />
				</FormControl>
                <FormControl>
					<FormLabel>Número</FormLabel>
					<Input placeholder="Número" type={"number"} onChange={onChange} name={"phone"} />
				</FormControl>
			</Stack>
			<Button colorScheme="teal" size="md" type="submit" my={5} onClick={onSubmit}> Crear Vecino </Button>
		</Container>
	)
}

export default vecinos
import { useState } from 'react'
import { Button, Container, Input, Stack, Heading, FormControl, FormLabel} from '@chakra-ui/react'
import axios from 'axios'

const agregarcuidador = () => {

    const [values,setValues] = useState({
        rut: '',
        name: '',
        lastname: '',
        email: '',
        phone: ''
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        const response = await axios.post(`${process.env.API_URL}/cuidador`, values)
        console.log(response)
        if (response.status==201){
            alert('Cuidador agregado')
        } else {
            alert('Error al agregar al cuidador')
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
            <Heading textAlign={"center"} my={10}>Agregar cuidador</Heading>
            <Stack>
                <FormControl isRequired>
                    <FormLabel>Rut</FormLabel>
                    <Input placeholder="12345678-9" type={"text"} onChange={onChange} name={"rut"} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input placeholder="Primer nombre" type={"text"} onChange={onChange} name={"name"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Apellidos</FormLabel>
                    <Input placeholder="Apellido1 Apellido2" type={"text"} onChange={onChange} name={"lastname"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="example@gmail.com" type={"email"} onChange={onChange} name={"email"} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel >Numero de telefono</FormLabel>
                    <Input placeholder="9 12345678 " type= {"number"} onChange={onChange} name={"phone"} />
                </FormControl>
            </Stack>
            <Button colorScheme="teal" size="md" type="sumbit" my={5} onClick={onSubmit}> Agregar Cuidador</Button>
        </Container>
    )
}

export default agregarcuidador
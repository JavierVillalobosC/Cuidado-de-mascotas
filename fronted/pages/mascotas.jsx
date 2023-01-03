import { useState } from 'react'
import { Textarea, Button, Container, Input, Stack, Text, HStack, Heading, FormControl, FormLabel} from '@chakra-ui/react'
import axios from 'axios'

const mascotas = () => {

    const [values,setValues] = useState({
        type: '',
        name: '',
        raza: '',
        age: '',
        features: '',
        vecino: ''
    })

    const onSumbit = async (e) => {
        e.preventDefault()
        console.log(values)
    }

    const onChange = (e) => {
        setValues({
            ... values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container maxW="container.md">
            <Heading textAlign={"center"} my={10}>Ingresar Mascotas</Heading>
            <Stack>
                <FormControl>
                    <FormLabel>Tipo de mascota</FormLabel>
                    <Input placeholder="Ejemplo: Perro, Gato, etc" type={"text"} onChange={onChange} name={"type"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Nombre de la mascota</FormLabel>
                    <Input placeholder="Escriba acá el nombre de la mascota" type={"text"} onChange={onChange} name={"name"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Raza de la mascota</FormLabel>
                    <Input placeholder="Ejemplo: Bulldog, Beagle, Chihuahua, etc" type={"text"} onChange={onChange} name={"raza"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Edad de la mascota</FormLabel>
                    <Input placeholder="Escriba acá la edad de la mascota" type={"text"} onChange={onChange} name={"age"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Detalles de la mascota</FormLabel>
                    <Textarea placeholder="Escriba acá detalles importantes sobre el cuidado de la mascota" onChange={onChange} name={"features"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Dueño de la mascota</FormLabel>
                    <Input placeholder="Escriba acá el nombre del vecino dueño de la mascota" type={"text"} onChange={onChange} name={"vecino"} />
                </FormControl>
            </Stack>
            <Button colorScheme="teal" size="md" type="sumbit" my={5} onClick={onSumbit}> Ingresar Mascota</Button>
        </Container>
    )
}

export default mascotas
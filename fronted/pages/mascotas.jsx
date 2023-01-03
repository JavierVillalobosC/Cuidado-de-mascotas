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
        console.log(e.target.name, e.target.value)
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Ingresar Mascotas</Heading>
            <Stack>
                <FormControl>
                    <FormLabel>Tipo mascota</FormLabel>
                    <Input placeholder="Tipo de mascota" type={"text"} onChange={onChange} name={"type"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Nombre mascota</FormLabel>
                    <Input placeholder="Nombre de la mascota" type={"text"} onChange={onChange} name={"name"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Raza mascota</FormLabel>
                    <Input placeholder="Raza de la mascota" type={"text"} onChange={onChange} name={"raza"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Edad mascota</FormLabel>
                    <Input placeholder="Edad de la mascota" type={"number"} onChange={onChange} name={"age"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Detalles mascota</FormLabel>
                    <Textarea placeholder="Detalles sobre el cuidado de la mascota" onChange={onChange} name={"features"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Vecino mascota</FormLabel>
                    <Input placeholder="Nombre del vecino dueño de la mascota" type={"text"} onChange={onChange} name={"vecino"} />
                </FormControl>
            </Stack>
            <Button colorScheme="teal" size="md" type="sumbit"my={5} onClick={onSumbit}> Ingresar Mascota</Button>
        </Container>
    )
}

export default mascotas
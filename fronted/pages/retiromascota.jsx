import { useState } from 'react'
import {   NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,Select, Textarea, Button, Container, Input, Stack, Heading, FormControl, FormLabel} from '@chakra-ui/react'
import axios from 'axios'

const horaingreso = () => {

    const [values,setValues] = useState({
        cuidador: '',
        mascota: '',
        vecino: '',
        horaderetiro: '',
    })

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        const response = await axios.post(`${process.env.API_URL}/retiromascota`, values)
        console.log(response)
        if (response.status==201){
            alert('Retiro registrado')
        } else {
            alert('Error al crear retiro de mascota')
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
            <Heading textAlign={"center"} my={10}>Crear retiro de mascota</Heading>
            <Stack>
            <FormControl>
                <FormLabel>Cuidador</FormLabel>
                    <Select placeholder='Seleccione el cuidador'>
                        <option>Cuidador 1</option>
                        <option>Cuidador 2</option>
                    </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Mascota</FormLabel>
                    <Select placeholder='Seleccione la mascota'>
                        <option>Mascota 1</option>
                        <option>Mascota 2</option>
                    </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Vecino</FormLabel>
                    <Select placeholder='Seleccione el vecino'>
                        <option>Vecino 1</option>
                        <option>Vecino 2</option>
                    </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Hora</FormLabel>
                    <Input placeholder="Hora de ingreso" onChange={onChange}/>
            </FormControl>
            <FormControl>
                    <FormLabel>Fecha</FormLabel>
                    <Input placeholder="Fecha de ingreso" onChange={onChange} />
                </FormControl>
                <FormControl>
                    <FormLabel>Contenido del correo</FormLabel>
                    <Textarea placeholder="El cuidado de ______ fue realizado por ________ desde las ____ horas, hasta las _____ horas." onChange={onChange} name={"features"} />
                </FormControl>
            </Stack>
            <Button colorScheme="teal" size="md" type="sumbit" my={5} onClick={onSubmit}> Crear ingreso de mascota</Button>
        </Container>
    )
}

export default horaingreso
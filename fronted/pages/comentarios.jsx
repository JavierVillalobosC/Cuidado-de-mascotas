import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, Textarea,FormControl, FormLabel} from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const commments = () => {
    const [comm, setComm] = useState({
        Vecino:"",
        Comentario:"",
        Calificacion:"",
    })
    const router = useRouter()

    const getComm = async () => {
        const response = await axios.get(`${process.env.API_URL}/comentario`)
        console.log(response);
        setComm(response.data)
    }

    useEffect(() => {
        getComm()
    }, [])

    const onSumbit = async (e) => {
        e.PreventDefault()
        console.log(comm)
    }

    const onChange = (e) => {
            setComm({
                ...comm,
                [e.target.comm]: e.target.comm
                
                });
            };




    return (
        <Container maxW="container.md">
            <Heading textAlign={"center"} my={10}>Ingresar Comentario</Heading>
            <Stack>
                <FormControl>
                    <FormLabel>Nombre Vecino</FormLabel>
                    <Input placeholder="Nombre y Apellido" type={"text"} onChange={onChange} name={"name"} />
                </FormControl>
                <FormControl>
                    <FormLabel>Comentario</FormLabel>
                    <Textarea placeholder="Escriba su cometario" type={"text"} onChange={onChange} name={"comentario"} />
                </FormControl>
                <FormLabel>Calificación del servicio </FormLabel>
                <FormControl>
                    <Input placeholder="calificanos de 1 a 7" type={"number"} onChange={onChange} name= {"calificacion"} />
                </FormControl>
                <Button colorScheme="teal" size="md" type="submit" my={5} onClick={onSumbit}> Ingresar comentario </Button>
            </Stack>
        </Container>
    )
}



export default commments
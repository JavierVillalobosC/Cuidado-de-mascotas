import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const vecinos = () => {
    const [vecinos, setVecinos] = useState([])
    const router = useRouter()

    const getVecinos = async () => {
        const response = await axios.get(`${process.env.API_URL}/vecinos`)
        setVecinos(response.data)
    }

    useEffect(() => {
        getVecinos()
    }, [])


    const showVecinos = () => {
        return vecinos.map(vecino => {
            return (
                <Tr key={vecino._id}>
                    <Td>{vecino.rut}</Td>
                    <Td>{vecino.name}</Td>
                    <Td>{vecino.lastname}</Td>
                    <Td>{vecino.address}</Td>
                    <Td>{vecino.email}</Td>
                    <Td>{vecino.phone}</Td>
                </Tr>
            )
        })
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Vecinos</Heading>
            <Button colorScheme="teal" onClick={() => router.push('/crearvecinos')}>Crear Vecino</Button>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Rut</Td>
                        <Td>Nombre</Td>
                        <Td>Apellido</Td>
                        <Td>Dirección</Td>
                        <Td>Correo</Td>
                        <Td>Número</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showVecinos()}
                </Tbody>
            </Table>
        </Container>
    )
}

export default vecinos
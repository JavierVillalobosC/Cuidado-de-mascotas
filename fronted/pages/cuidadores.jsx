import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const cuidadores = () => {
    const [cuidadores, setCuidadores] = useState([])
    const router = useRouter()

    const getCuidadores = async () => {
        const response = await axios.get(`${process.env.API_URL}/cuidadores`)
        setCuidadores(response.data)
    }

    useEffect(() => {
        getCuidadores()
    }, [])


    const showCuidadores = () => {
        return cuidadores.map(cuidadores => {
            return (
                <Tr key={cuidadores._id}>
                    <Td>{cuidadores.rut}</Td>
                    <Td>{cuidadores.name}</Td>
                    <Td>{cuidadores.lastname}</Td>
                    <Td>{cuidadores.email}</Td>
                    <Td>{cuidadores.phone}</Td>
                </Tr>
            )
        })
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Cuidadores</Heading>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Rut</Td>
                        <Td>Nombre</Td>
                        <Td>Apellido</Td>
                        <Td>Correo electronico</Td>
                        <Td>Telefono</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showCuidadores()}
                </Tbody>
            </Table>
            <Button colorScheme="teal" my={5} onClick={() => router.push('/agregarcuidador')}>Agregar Cuidador</Button>
        </Container>
    )
}

export default cuidadores
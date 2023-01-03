import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const mascotas = () => {
    const [mascotas, setMascotas] = useState([])
    const router = useRouter()

    const getMascotas = async () => {
        const response = await axios.get(`${process.env.API_URL}/mascotas`)
        setMascota(response.data)
    }
    useEffect(() => {
        getMascotas()
    }, [])

    const showMascotas = () => {
        return mascotas.map(mascota => {
            return(
                <Tr key={mascota._id}>
                    <Td>{mascota.name}</Td>
                    <Td>{mascota.type}</Td>
                    <Td>{mascota.raza}</Td>
                    <Td>{mascota.age}</Td>
                    <Td>{mascota.features}</Td>
                    <Td>{mascota.vecino}</Td>
                </Tr>
            )
        })
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Mascotas</Heading>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Nombre</Td>
                        <Td>Especie</Td>
                        <Td>Raza</Td>
                        <Td>Edad</Td>
                        <Td>Detalles</Td>
                        <Td>Dueño</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showMascotas()}
                </Tbody>
            </Table>
        </Container>
    )

}

export default mascotas

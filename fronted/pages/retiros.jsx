import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const retiros = () => {
    const [retirs, setRetirs] = useState([])
    const router = useRouter()

    const getRetirs = async () => {
        const response = await axios.get(`${process.env.API_URL}/retiros`)
        console.log(response);
        setRetirs(response.data)
    }

    useEffect(() => {
        getRetirs()
    }, [])


    const showRetiros = () => {
        return retirs.map((retiro, index) => {

    const fecha = new Date(retiro.hora_de_retiro);
    const fechaFormateada = fecha.toLocaleDateString("en-US", { hour12: false });
            return (
                <Tr key={retiro._id}
                _hover={{background: "rgb( 0 0 0 / 5% )", }}>
                    <Td textAlign="center">{retiro.vecino.name}</Td>
                    <Td textAlign="center">{retiro.mascota.name}</Td>
                    <Td textAlign="center">{fechaFormateada}</Td>
                </Tr>
            )
        })
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Retiros</Heading>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td textAlign="center">Dueño</Td>
                        <Td textAlign="center">Mascota</Td>
                        <Td textAlign="center">Fecha de retiro</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showRetiros()}
                </Tbody>
            </Table>
        </Container>
    )
}

export default retiros
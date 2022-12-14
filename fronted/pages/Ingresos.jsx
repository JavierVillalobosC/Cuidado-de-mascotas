import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const ingresos = () => {
    const [ingres, setIngres] = useState([])
    const router = useRouter()

    const getIngres = async () => {
        const response = await axios.get(`${process.env.API_URL}/ingresos`)
        console.log(response);
        setIngres(response.data)
    }

    useEffect(() => {
        getIngres()
    }, [])


    const showIngresos = () => {
        return ingres.map((ingreso, index) => {

    const fecha = new Date(ingreso.hora_de_ingreso);
    const fechaFormateada = fecha.toLocaleDateString("en-US", { hour12: false });
            return (
                <Tr key={ingreso._id}
                _hover={{background: "rgb( 0 0 0 / 5% )", }}>
                    <Td textAlign="center">{ingreso.vecino.name}</Td>
                    <Td textAlign="center">{ingreso.mascota.name}</Td>
                    <Td textAlign="center">{fechaFormateada}</Td>
                </Tr>
            )
        })
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Ingresos</Heading>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td textAlign="center">Dueño</Td>
                        <Td textAlign="center">Mascota</Td>
                        <Td textAlign="center">Fecha de ingreso</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showIngresos()}
                </Tbody>
            </Table>
        </Container>
    )
}

export default ingresos
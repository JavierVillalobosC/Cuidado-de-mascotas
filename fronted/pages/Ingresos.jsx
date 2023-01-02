import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const ingresos = () => {
    const [ingresos, setIngresos] = useState([])
    const router = useRouter()

    const getIngresos = async () => {
        const response = await axios.get(`${process.env.API_URL}/ingresos`)
        setIngresos(response.data)
    }

    useEffect(() => {
        getIngresos ()
    }, [])


    const showProducts = () => {
        return ingresos.map(ingreso => {
            return (
                <Tr key={ingreso._id}>
                    <Td>{ingreso.hora_de_ingresos}</Td>
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
                        <Td>Hora de ingreso</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showProducts()}
                </Tbody>
            </Table>
        </Container>
    )
}

export default ingresos
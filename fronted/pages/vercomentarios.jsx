import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const coments = () => {
    const [coments, setComents] = useState([])
    const router = useRouter()

    const getComents = async () => {
        const response = await axios.get(`${process.env.API_URL}/comentarios`)
        console.log(response);
        setComents(response.data)
    }

    useEffect(() => {
        getComents()
    }, [])


    const showComents = () => {
        return coments.map((comentario, index) => {

            return (
                <Tr key={comentario._id}
                _hover={{background: "rgb( 0 0 0 / 5% )", }}>
                    <Td textAlign="center">{comentario.vecino.name}</Td>
                    <Td textAlign="center">{comentario.comments}</Td>
                    <Td textAlign="center">{comentario.calificacion}</Td>
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
                        <Td textAlign="center">Vecino</Td>
                        <Td textAlign="center">Comentario</Td>
                        <Td textAlign="center">Calificacíon</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {showComents()}
                </Tbody>
            </Table>
        </Container>
    )
}

export default coments
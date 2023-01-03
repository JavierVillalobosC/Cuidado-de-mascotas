import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Container, Heading, Text, Button, Stack, Input, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
//import { getVecinos } from '../../../data/vecinos'
import { getVecino } from '../../../backend/controllers/vecinoController'

export async function getServerSideProps(context) {
    try {
        const response = await getVecino(context.query.vecino, context.req.headers.cookie)
        return {
            props: {
                data: response.data
            }
        }
    } catch (err) {
        return {
            redirect: {
                destination: '/vecinos',
                permanent: true
            }
        }
    }
}


const vecino = ({ data }) => {

    const router = useRouter()
    const { vecino } = router.query
    const [vecin] = useState(data)


    return (
        <Container maxW="container.md">
            <Heading >{vecino.name}</Heading>
            <Heading> Editar</Heading>
        </Container>

    )
}

export default vecino
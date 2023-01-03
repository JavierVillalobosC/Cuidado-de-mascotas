import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Heading, Text, Button, Stack, Input, FormControl, FormLabel, Textarea, HStack } from '@chakra-ui/react'
import { getIngresos } from '../../../data/ingresos'
import ShowInfo from '../../../components/ShowInfo'


export async function getServerSideProps(context) {
    try {
        const response = await getIngresos(context.query.ingresos)
        return {
            props: {
                data: response.data
            }
        }
    } catch (err) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }
}


const ingreso = ({ data }) => {

    const router = useRouter()
    const { ingreso } = router.query
    const [ingres] = useState(data)
    console.log(ingres)
    console.log(`/ingresos`)



    return (
        <Container maxW="container.xl" centerContent>
            <Heading my={10}> Ingreso: {ingres.id}</Heading>
            <Stack w={"full"}>
                <ShowInfo tag="id" data={ingres.id} color="blue.500" />
                <HStack>
                    <ShowInfo tag="Hora de ingresos" data={ingres.hora_de_ingreso} color="yellow.500" />
                </HStack>
            </Stack>
        </Container>
    )
}



export default ingresos
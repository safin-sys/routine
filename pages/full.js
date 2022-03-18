import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { ClassTable } from "../src/components/ClassTable";
import Nav from "../src/components/Nav";
import client from "../src/helper/sanity";

export const getStaticProps = async () => {
    const days = await client.fetch('*[_type == "days"]')
    return {
        props: {
            days
        }
    }
}

export default function Full({ days }) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <>
            <Container>
                <Head>
                    <title>Marketing Routine | Gov. Titumir College</title>
                    <meta name="description" content="Routine for Marketing department on Gov. Titumir College" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Nav />
                <Box my="8">
                    {
                        days && days.map((day, index) => {
                            return <ClassTable name={day.name} day={day.routine} key={index} />
                        })
                    }
                </Box>
            </Container>
        </>
    );
}
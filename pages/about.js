import { Box, Container, Divider, Flex, Heading, Image, Text, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../src/components/Nav";

export default function About() {
    const { colorMode } = useColorMode();
    return (
        <>
            <Head>
                <title>Marketing Routine | Gov. Titumir College</title>
                <meta name="description" content="Routine for Marketing department on Gov. Titumir College" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Nav />
                <Box my="8">
                    <Heading mb="4">Marketing Routine</Heading>
                    <Text>
                        This is a marketing routine website for the marketing department of <i>Government Titumir College</i>. <strong>This is not an official source.</strong> So there may be mistakes. If you find any mistakes/bugs please let me know.
                    </Text>
                    <Divider my="4" />
                    <Text
                        display="inline-block"
                    >
                        I am Safin Ahmed, reach me on <a href="https://www.facebook.com/safintheship" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Facebook</a>
                    </Text>
                </Box>
            </Container>
        </>
    );
}
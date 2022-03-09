import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Nav = () => {
    return ( 
        <Flex as="nav" h="48px" borderBottom="1px" alignItems="center" justifyContent="space-between" >
            <Heading fontSize="md">
                Marketing Routine
            </Heading>
            <Text fontSize="md">
                Gov. Titumir College
            </Text>
        </Flex>
    );
}
 
export default Nav;
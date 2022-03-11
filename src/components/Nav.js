import { Flex, Heading, IconButton, Image, useColorMode } from "@chakra-ui/react";

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex as="nav" h="48px" borderBottom="1px" alignItems="center" justifyContent="space-between" >
            <Heading fontSize="md">
                Marketing Routine
            </Heading>
            <IconButton
                onClick={toggleColorMode}
                aria-label='Toggle Theme'
                icon={
                    colorMode === "dark" ?
                        <Image src="/sun.svg" filter="invert(100%)" /> :
                        <img src="/moon.svg" />
                }
                bgColor="transparent"
                _focus={{ outline: "none" }}
            />
        </Flex>
    );
}

export default Nav;
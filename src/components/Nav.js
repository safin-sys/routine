import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { NavMenu } from "./NavMenu";

const Nav = () => {
    return (
        <Flex as="nav" h="48px" borderBottom="1px" alignItems="center" justifyContent="space-between" >
            <Link href="/">
                <a>
                    <Heading fontSize="md">
                        Marketing Routine
                    </Heading>
                </a>
            </Link>
            <NavMenu />
        </Flex>
    );
}

export default Nav;
import { IconButton, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

export const NavMenu = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Menu>
            <MenuButton>
                <Image
                    src="/menu.svg"
                    alt="Menu"
                    filter={`invert(${colorMode === "dark" ? 100 : 0}%)`}
                />
            </MenuButton>
            <MenuList px="4">
                <Link href="/">
                    <a>
                        <MenuItem>
                            Home
                        </MenuItem>
                    </a>
                </Link>
                <Link href="/full">
                    <a>
                        <MenuItem>
                            Full Routine
                        </MenuItem>
                    </a>
                </Link>
                <Link href="/about">
                    <a>
                        <MenuItem>
                            About
                        </MenuItem>
                    </a>
                </Link>
                <MenuDivider />
                <MenuItem onClick={toggleColorMode} closeOnSelect={false}>
                    {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogOverlay, Avatar, Box, Container, Flex, Image, Menu, MenuButton, MenuItem, MenuList, useDisclosure, useToast, Input, InputGroup, InputLeftElement, Text, IconButton, DrawerOverlay, DrawerContent, DrawerCloseButton, Drawer, DrawerHeader, DrawerBody, Button } from '@chakra-ui/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import { useEffect, useRef, useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('')
    const { user, signInWithGoogle, logout } = useAuth();
    const { isOpen, onOpen, onClose: closeAlert } = useDisclosure()
    const { onOpen: onOpenHamburgerMneu, isOpen: isOpenHamburgerMenu, onClose: onCloseSidebar } = useDisclosure();
    const cancelRef = useRef()
    const toast = useToast()
    const { pathname } = useLocation()

    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    const navigate = useNavigate()
    const handleSearch = async () => {
        if (searchValue !== "") {
            closeAlert()
            await new Promise(resolve => setTimeout(resolve, 0))
            navigate(`/search?query=${searchValue}`)
            setSearchValue('')
        }
    }
    useEffect(() => {
        onCloseSidebar()
    }, [pathname])
    const handleLogin = async () => {
        try {
            await signInWithGoogle()
        } catch (error) {
            toast({
                title: "Error",
                description: error,
                status: "error",
                position: "top-right",
                isClosable: true,
            })
        }
    }


    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                onClose={closeAlert}
                leastDestructiveRef={cancelRef}
                closeOnEsc={true}
                closeOnOverlayClick={true}
                motionPreset='slideInTop'

            >
                <AlertDialogOverlay >
                    <AlertDialogContent maxW={"1200px"} color='gray' >
                        <AlertDialogBody p={5}
                            bg={"white"}>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <RiSearchLine />
                                </InputLeftElement>
                                <Input
                                    w={"100%"}
                                    variant={"flushed"}
                                    color={"black"}
                                    borderBottomColor={"gray.400"}
                                    _focusVisible={{ borderColor: "gray.400" }}
                                    value={searchValue}
                                    onChange={handleInputChange}
                                    onKeyDown={(e) => {
                                        e.keyCode === 13 &&
                                            handleSearch()
                                    }}
                                    placeholder={"search"}
                                    _placeholder={{ color: "gray.600" }}

                                />
                            </InputGroup>
                        </AlertDialogBody>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
            <Box py="4" mb="2" pos={"absolute"} top={0}
                left={0}
                right={0}
                zIndex={13}
            >
                <Container maxW={'container.xl'} margin={"auto"}>
                    <Flex justifyContent="space-between" alignItems={"center"}
                    >
                        <Link to='/'>
                            <Box
                                fontSize={"3xl"}
                                fontWeight={"bold"}
                                color={"red"}
                                letterSpacing={"widest"}
                                fontFamily={"mono"}>
                                <Image src="/logo.png" w={{
                                    base: "130px",
                                    md: "180px"
                                }} />
                            </Box>
                        </Link>
                        {/* desktop version */}
                        <Flex gap={4} alignItems={"center"} display={{ base: "none", md: "flex" }}>
                            <Link to='/'>Home</Link>
                            <Link to='/movies'>Movies</Link>
                            <Link to='/shows'>Tv Shows</Link>
                            <Text as={"span"} cursor={"pointer"} onClick={onOpen}><RiSearchLine /></Text>
                            {
                                user ?
                                    <Menu>
                                        <MenuButton>
                                            <Avatar bg={"red.500"} color={"white"} size={"sm"} name={user.email}></Avatar>
                                        </MenuButton>
                                        <MenuList>
                                            <Link to={'/watchlist'}>
                                                <MenuItem>WatchList</MenuItem>
                                            </Link>
                                            <MenuItem onClick={logout} >logout</MenuItem>
                                        </MenuList>
                                    </Menu>
                                    :
                                    <Avatar size={"sm"} bg={"gray.800"} as={"button"} onClick={handleLogin} />
                            }

                        </Flex>
                        {/* mobile version */}
                        <Flex
                            display={{ base: "flex", md: "none" }}
                            alignItems={"center"}
                            gap="4"
                        >
                            <Text as={"span"} cursor={"pointer"} onClick={onOpen} fontSize={'xl'} ><RiSearchLine /></Text>
                            <IconButton onClick={onOpenHamburgerMneu} icon={<RxHamburgerMenu />} bg={"transparent"} color={'white'} fontSize={"2xl"} _hover={{ bg: 'transparent' }} />
                            <Drawer isOpen={isOpenHamburgerMenu} placement="right" onClose={onCloseSidebar}>
                                <DrawerOverlay />
                                <DrawerContent bg={"black"}>
                                    <DrawerCloseButton />
                                    <DrawerHeader>
                                        {user ? (
                                            <Flex alignItems="center" gap="2">
                                                <Avatar bg="red.500" size={"sm"} name={user?.email} />
                                                <Box fontSize={"sm"}>
                                                    {user?.displayName || user?.email}
                                                </Box>
                                            </Flex>
                                        ) : (
                                            <Avatar
                                                size={"sm"}
                                                bg="gray.800"
                                                as="button"
                                                onClick={handleLogin}
                                            />
                                        )}
                                    </DrawerHeader>

                                    <DrawerBody>
                                        <Flex flexDirection={"column"} gap={"4"}>
                                            <Link to="/">Home</Link>
                                            <Link to="/movies">Movies</Link>
                                            <Link to="/shows">TV Shows</Link>
                                            {user && (
                                                <>
                                                    <Link to="/watchlist">Watchlist</Link>
                                                    <Button
                                                        variant={"outline"}
                                                        colorScheme="red"
                                                        onClick={logout}
                                                    >
                                                        Logout
                                                    </Button>
                                                </>
                                            )}
                                        </Flex>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default Navbar
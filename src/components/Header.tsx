import { FaMoon, FaSun } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  IconButton,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  ToastId,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
  Input,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

export default function Header() {
  const [Desktop] = useMediaQuery("(min-width: 1110px)");
  const [Tablet] = useMediaQuery("(min-width: 600px and max-width: 1100px)");
  const [Mobile] = useMediaQuery("(max-width: 1100px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const { userLoading, isLoggedIn, user } = useUser();
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("blue.500", "blue.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  const toast = useToast();
  const queryClient = useQueryClient();
  const toastId = useRef<ToastId>();
  const mutation = useMutation(logOut, {
    onMutate: () => {
      toastId.current = toast({
        title: "Login out...",
        description: "Login Out!",
        status: "loading",
        position: "bottom-right",
      });
    },
    onSuccess: () => {
      if (toastId.current) {
        queryClient.refetchQueries(["me"]);
        toast.update(toastId.current, {
          status: "success",
          title: "Done!",
          description: "See you later!",
        });
      }
    },
  });
  const onLogOut = async () => {
    mutation.mutate();
  };
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems="center"
      py={[3, 4, 5, 5]}
      px={[8, 50, 90, 110]}
      direction={"row"}
      spacing={{
        sm: 4,
        md: 0,
      }}
      borderBottomWidth={1}
      w="full"
    >
      <Box color={logoColor}>
        <HStack>
          <Link to={"/"}>
            <MdConnectWithoutContact size={"35"} />
          </Link>
          <Text fontSize={[20, 20, 30, 30]}>We connect</Text>
        </HStack>
      </Box>
      {Desktop ? (
        <>
          <HStack spacing={35}>
            <Box>
              <Link to={"/"}>
                <Text as="abbr" fontSize={[5, 10, 17]} p={"25px"}>
                  Freeboard
                </Text>
              </Link>
              <Link to={"/"}>
                <Text as="abbr" fontSize={[5, 10, 17]} p={"25px"}>
                  Living in Korea tips
                </Text>
              </Link>
              <Link to={"/"}>
                <Text as="abbr" fontSize={[5, 10, 17]} p={"25px"}>
                  Food gallery
                </Text>
              </Link>
              <Link to={"/"}>
                <Text as="abbr" fontSize={[5, 10, 17]} p={"25px"}>
                  Jobs
                </Text>
              </Link>
              <Link to={"/"}>
                <Text as="abbr" fontSize={[5, 10, 17]} p={"25px"}>
                  Announcement
                </Text>
              </Link>
            </Box>
            <Box>
              <Input size={"lg"} placeholder="Search..." />
            </Box>

            <IconButton
              onClick={toggleColorMode}
              variant={"ghost"}
              aria-label="Toggle dark mode"
              icon={<Icon />}
            />
            {!userLoading ? (
              !isLoggedIn ? (
                <>
                  <Button onClick={onLoginOpen} size="md">
                    Log in
                  </Button>
                  <LightMode>
                    <Button
                      onClick={onSignUpOpen}
                      colorScheme={"red"}
                      size="md"
                    >
                      Sign up
                    </Button>
                  </LightMode>
                </>
              ) : (
                <Menu>
                  <MenuButton>
                    <Avatar
                      name={user?.name}
                      src={user?.avatar}
                      size={["sm", "md", "lg"]}
                    />
                  </MenuButton>
                  <MenuList>
                    {user?.is_owner ? (
                      <Link to="/posts/upload">
                        <MenuItem>Profile</MenuItem>
                      </Link>
                    ) : null}
                    {user?.is_owner ? (
                      <Link to="/posts/upload">
                        <MenuItem>Account</MenuItem>
                      </Link>
                    ) : null}
                    <MenuItem onClick={onLogOut}>Log out</MenuItem>
                  </MenuList>
                </Menu>
              )
            ) : null}
          </HStack>
          <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
          <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </>
      ) : null}

      {Mobile ? (
        <>
          <Button colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <HStack m={5} gap={3} color={logoColor}>
                  <MdConnectWithoutContact size={"35"} />
                  <Text>We connect </Text>
                </HStack>
              </DrawerHeader>

              <DrawerBody>
                <Box>
                  <Input placeholder="Search..." />
                  <HStack justifyContent={"space-evenly"} mt={10}>
                    <Button onClick={onLoginOpen} size="md">
                      Log in
                    </Button>
                    <Button
                      onClick={onSignUpOpen}
                      colorScheme={"red"}
                      size="md"
                    >
                      Sign up
                    </Button>
                    <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
                    <SignUpModal
                      isOpen={isSignUpOpen}
                      onClose={onSignUpClose}
                    />
                  </HStack>
                </Box>
                <VStack spacing={6} pt={10}>
                  <Box>
                    <Link to={"/"}>
                      <Text as="abbr" fontSize={20}>
                        Freeboard
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link to={"/"}>
                      <Text as="abbr" fontSize={20}>
                        Living in Korea tips
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link to={"/"}>
                      <Text as="abbr" fontSize={20}>
                        Food gallery
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link to={"/"}>
                      <Text as="abbr" fontSize={20}>
                        Jobs
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link to={"/"}>
                      <Text as="abbr" fontSize={20}>
                        Announcement
                      </Text>
                    </Link>
                  </Box>
                </VStack>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      ) : null}
    </Stack>
  );
}

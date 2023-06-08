import React from "react";
import TestCarLogo from "../../public/tc-white-logo.svg";
import {
  Box,
  Flex,
  Img,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box h={{ base: "45px", md: "80px", lg: "100px" }} w="100%" bg="#38566B">
      <Flex h="100%" w="100%" justifyContent="space-between" pl="5px" pr="5px">
        <Box w={{ base: "100px", md: "180px", lg: "230px" }} p="10px">
          <TestCarLogo />
        </Box>
        <Flex
          flexDirection="column"
          alignItems="flex-end"
          justifyContent="space-between"
          mt={{ base: "2px", md: "8px", lg: "8px" }}
        >
          <Button
            fontSize={{ base: "0.5em", md: "15px", lg: "25px" }}
            border="2px"
            color="white"
            p={{ base: "5px", md: "15px", lg: "20px" }}
            pl="25px"
            pr={{ base: "28px", md: "30px", lg: "45px" }}
            background=""
            fontWeight="light"
            borderRadius="2px"
            h={{ base: "20px", md: "20x", lg: "40px" }}
            backgroundImage="/img/icon/arrowButton.png"
            backgroundRepeat="no-repeat"
            backgroundPosition="95% 50%"
            backgroundSize={{ base: "8px", md: "10px", lg: "12px" }}
            display={{ base: "none", sm: "flex" }}
          >
            お気に入り一覧
          </Button>
          <Box w="100%" display={{ base: "none", sm: "flex" }} mt="5px">
            <MenuItem menuItem="HOME" />
            <MenuItem menuItem="検索" />
            <MenuItem menuItem="お気に入り" />
            <MenuItem menuItem="お知らせ" />
            <MenuItem menuItem="サービスについて" />
          </Box>

          <Button
            onClick={onOpen}
            display={{ base: "", md: "none" }}
            w=""
            h=""
            mt="10px"
            mr="10px"
            bg="white"
            color="#38566B"
          >
            Menu
          </Button>

          <Drawer onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent bg="#38566B">
              <DrawerCloseButton />
              <DrawerHeader color="#38566B" fontSize="30px" bg="white" p="0">
                Menu
              </DrawerHeader>
              <DrawerBody>
                <UnorderedList styleType="none" ml="5px" color="white">
                  <ListItem>
                    <Link>HOME</Link>
                  </ListItem>
                  <ListItem>
                    <Link>検索</Link>
                  </ListItem>
                  <ListItem>
                    <Link>お気に入り</Link>
                  </ListItem>
                  <ListItem>
                    <Link>お知らせ</Link>
                  </ListItem>
                  <ListItem>
                    <Link>サービスについて</Link>
                  </ListItem>
                </UnorderedList>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Box>
  );
};

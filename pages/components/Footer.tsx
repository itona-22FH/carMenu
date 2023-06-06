/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Button,
  Link,
  Image,
  Flex,
  Text,
  Divider,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import TestCarLogo from "../../public/tc-white-logo.svg";

export const Footer = () => {
  return (
    <>
      <Box mt="100px">
        <Image src="/img/icon/backToTop.png" />
      </Box>
      <Box bg="#51646C" p="10px">
        <Flex
          justifyContent="center"
          fontSize={{ base: "1px", md: "15px", lg: "20px" }}
        >
          <Flex
            flexDirection="column"
            mr={{ base: "50px", md: "50px", lg: "60px" }}
          >
            <Box w={{ base: "100px", md: "180px", lg: "230px" }}>
              <TestCarLogo />
            </Box>
            <Text>〒000-0000</Text>
            <Text>◯◯県◯◯◯市◯◯◯◯0-0-0</Text>
            <Text>◯◯ビル　◯F</Text>
          </Flex>

          <Divider
            orientation="vertical"
            w="5px"
            h={{ base: "80px", md: "130px", lg: "170px" }}
            bg="#27566B"
            border="0"
          />

          <Flex
            alignItems="center"
            ml="10px"
            mt={{ base: "35px", md: "60px", lg: "80px" }}
            fontSize={{ base: "1px", md: "15px", lg: "20px" }}
          >
            <UnorderedList styleType="none">
              <ListItem>
                <Link>試乗車検索</Link>
              </ListItem>
              <ListItem>
                <Link>お気に入り一覧</Link>
              </ListItem>
              <ListItem>
                <Link>お知らせ</Link>
              </ListItem>
            </UnorderedList>
            <UnorderedList styleType="none" ml={{ base: "10px" }}>
              <ListItem>
                <Link>サービスについて</Link>
              </ListItem>
              <ListItem>
                <Link>プライパシーポリシー</Link>
              </ListItem>
              <ListItem>
                <Link>利用規約</Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

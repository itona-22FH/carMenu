/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Link,
  Image,
  Flex,
  Text,
  Divider,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import TestCarLogo from "../../public/tc-white-logo.svg";

export const Footer = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Flex mt="100px" justifyContent="flex-end">
        <Image src="/img/icon/backToTop.png" onClick={backToTop} />
      </Flex>
      <Box bg="#51646C" p="10px">
        <Flex
          justifyContent="center"
          fontSize={{ base: "1px", md: "15px", lg: "20px" }}
        >
          <Flex
            flexDirection="column"
            mr={{ base: "15px", md: "50px", lg: "60px" }}
            mt={{base:"5px"}}
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
            h={{ base: "125px", md: "130px", lg: "170px" }}
            bg="#27566B"
            border="0"
          />

          <Flex
            alignItems="center"
            ml="10px"
            mt={{ base: "", md: "60px", lg: "80px" }}
            fontSize={{ base: "1px", md: "15px", lg: "20px" }}
            flexWrap={{base:"wrap"}}
          >
            <UnorderedList styleType="none" ml="5px">
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
            <UnorderedList styleType="none" ml={{ base: "5px", sm:"10px", md:"10px", lg:"10px" }}>
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

import React from "react";
import TestCarLogo from "../../public/tc-white-logo.svg";
import { Box, Flex, Img, Button } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

export const Header = () => {
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
            p={{ base: "10px", md: "15px", lg: "20px" }}
            pl="25px"
            pr={{ base: "28px", md: "30px", lg: "45px" }}
            background=""
            fontWeight="light"
            borderRadius="2px"
            h={{ base: "25px", md: "20x", lg: "40px" }}
            backgroundImage="/img/icon/arrowButton.png"
            backgroundRepeat="no-repeat"
            backgroundPosition="95% 50%"
            backgroundSize={{ base: "8px", md: "10px", lg: "12px" }}
          >
            お気に入り一覧
          </Button>

          <Flex w="100%" justifyContent="flex-end">
            <MenuItem menuItem="HOME" />
            <MenuItem menuItem="検索" />
            <MenuItem menuItem="お気に入り" />
            <MenuItem menuItem="お知らせ" />
            <MenuItem menuItem="サービスについて" />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

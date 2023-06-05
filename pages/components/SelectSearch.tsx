import { Box, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

export const SelectSearch = () => {
  return (
    <Flex alignItems="center" ml="5px">
      <Text fontSize="1px" pt="2px">
        メーカー
      </Text>
      <Select
        w="100px"
        border="1px"
        h=""
        color="gray"
        ml="5px"
        appearance="none"
        p="0"
        iconSize="0"
        backgroundImage="/img/icon/path.png"
        backgroundRepeat="no-repeat"
        backgroundSize="30%"
        backgroundPosition="right 25%"
        backgroundColor="white"
        borderRadius="2px"
      >
        <option value="">日産</option>
        <option value="">トヨタ</option>
        <option value="">ホンダ</option>
        <option value="">スズキ</option>
      </Select>
    </Flex>
  );
};

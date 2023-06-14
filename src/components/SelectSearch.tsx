import { Flex, Select, Text } from "@chakra-ui/react";
import React from "react";

export const SelectSearch = ({
  searchWord,
  bgImage,
  optionValues,
  bgFilter,
  textColor,
}: SelectSearchProps) => {
  return (
    <Flex alignItems="center" ml="10px" flexWrap={{ base: "wrap", sm: "wrap" }}>
      <Text fontSize="1px" pt="2px" mr="5px" color={textColor}>
        {searchWord}
      </Text>
      <Select
        w="90px"
        border="1px"
        h="20px"
        color="gray"
        ml="5px"
        appearance="none"
        iconSize="0"
        backgroundImage={`/img/icon/${bgImage}`}
        backgroundRepeat="no-repeat"
        backgroundSize="30%"
        backgroundPosition="right 25%"
        backgroundColor="white"
        borderRadius="2px"
        fontSize="1px"
        filter={bgFilter}
        style={{ padding: "0px" }}
      >
        {optionValues.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};

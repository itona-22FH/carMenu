import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { ButtonSearch } from "./ButtonSearch";
import { FreeWordForm } from "./FreeWordForm";

export const FreeWordSearch = () => {
  return (
    <Box
      bg="#FFFFFF"
      m="5px"
      boxShadow="md"
      h="100%"
      mt="7px"
    >
      <Box p="5px">
        <Heading
          as="h3"
          size="md"
          m="8px"
          mb="0"
          color="gray"
          fontWeight="normal"
        >
          フリーワード検索
        </Heading>
      </Box>

      <FreeWordForm />

      <ButtonSearch />
    </Box>
  );
};

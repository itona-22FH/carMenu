import { Button, Box, Flex } from "@chakra-ui/react";
import React from "react";

export const ButtonSearch = () => {
  return (
    <Flex justifyContent="center">
      <Button
        border="1px solid #6599BE"
        backgroundColor="#6599BE"
        borderRadius="2px"
        boxShadow="md"
        color="white"
        fontWeight="normal"
        h="35px"
        backgroundImage="/img/icon/arrowButton.png"
        backgroundRepeat="no-repeat"
        backgroundPosition="94% 50%"
        backgroundSize="10px"
        pr="30px"
        pl="30px"
        mt="20px"
        mb="15px"
      >
        この条件で探す
      </Button>
    </Flex>
  );
};

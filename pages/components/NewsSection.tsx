import {
  Box,
  Button,
  Flex,
  Heading,
  Divider,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import { News } from "./News";

export const NewsSection = () => {
  return (
    <Flex mt="90px" justifyContent="center">
      <Box
        transform={{
          base: "scale(0.5)",
          sm: "scale(0.8)",
          md: "scale(1)",
          lg: "scale(1.3)",
        }}
      >
        <Flex justifyContent="space-between" w="555px" alignItems="flex-end">
          <Heading
            as="h3"
            size="md"
            fontWeight="semibold"
            color="blackAlpha.700"
            mt="20px"
            ml="15px"
          >
            お知らせ
          </Heading>
          <Flex justifyContent="center">
            <Button
              border="1px solid #6599BE"
              backgroundColor="#6599BE"
              borderRadius="2px"
              boxShadow="md"
              color="white"
              fontWeight="normal"
              h="35px"
              pr="30px"
              pl="30px"
              mt="20px"
              w="175px"
            >
              一覧はこちら
            </Button>
          </Flex>
        </Flex>
        <Divider h="3px" w="100%" bg="#003657" mt="3px"></Divider>
        <VStack
          divider={<StackDivider borderColor="red" h="10px" w="10px" />}
          spacing={4}
          align="stretch"
        >
          <News />
        </VStack>
      </Box>
    </Flex>
  );
};

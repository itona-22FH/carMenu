/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Image, Checkbox, Text, Flex } from "@chakra-ui/react";
import React from "react";

export const CarImage = ({ carData, category }: CarImageProps) => {

  return (
    <>
      {carData.map((car) => {
        return (
          <Box w="106px" m="5px" mt="10px">
            <Image src={`/img/catalog/content/${car.image}.png`} />
            <Flex justifyContent="space-between" mt="2px">
              <Text fontSize="1px">{category === "model" ? car.model: car.name}</Text>
              <Checkbox colorScheme="green" size="md" border="1px #5E5E5E" />
            </Flex>
          </Box>
        );
      })}
    </>
  );
};

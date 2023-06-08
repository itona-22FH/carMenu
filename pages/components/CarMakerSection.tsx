/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { SelectSearch } from "./SelectSearch";
import { CarImage } from "./CarImage";
import { ButtonSearch } from "./ButtonSearch";

export const CarMakerSection = () => {
  const carData: Car[] = [
    {
      image: "car1",
      maker: "日産",
      name: "デイズ　ルークス",
      model: "軽自動車",
    },
    {
      image: "car2",
      maker: "nissan",
      name: "デイズ",
      model: "軽自動車",
    },
    {
      image: "car3",
      maker: "日産",
      name: "クリッパー",
      model: "軽自動車",
    },
  ];
  return (
    <Box bg="#FFFFFF" m="5px" boxShadow="md">
      <Box p="5px">
        <Heading
          as="h3"
          size="md"
          m="8px"
          mb="0"
          color="gray"
          fontWeight="normal"
        >
          メーカーから探す
        </Heading>

        <Flex mt="10px">
          <SelectSearch />
          <SelectSearch />
        </Flex>
      </Box>

      <Flex backgroundColor="#F5F5F5" flexWrap="wrap" justifyContent="center">
        <CarImage carData={carData} />
      </Flex>

      <Flex alignItems="center" mt="10px" p="5px">
        <Image src="img/icon/delimiter.png" w="3px" h="23px" display="block" />
        <Heading
          as="h3"
          size="xs"
          mt="8px"
          ml="10px"
          mb="0"
          color="blackAlpha.700"
          fontWeight="semibold"
        >
          オプション検索
        </Heading>
      </Flex>
      <SelectSearch />
      <ButtonSearch />
    </Box>
  );
};

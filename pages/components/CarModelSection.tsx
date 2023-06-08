/* eslint-disable jsx-a11y/alt-text */
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { CarImage } from "./CarImage";
import { SelectSearch } from "./SelectSearch";
import { ButtonSearch } from "./ButtonSearch";

export const CarModelSection = () => {
  const carData: Car[] = [
    {
      image: "car1",
      maker: "nissan",
      name: "日産ルークス",
      model: "軽自動車",
    },
    {
      image: "car2",
      maker: "nissan",
      name: "日産ルークス",
      model: "コンパクトカー",
    },
    {
      image: "car3",
      maker: "nissan",
      name: "日産ルークス",
      model: "ミニバン",
    },
    {
      image: "car4",
      maker: "nissan",
      name: "日産ルークス",
      model: "セダン",
    },
    {
      image: "car5",
      maker: "nissan",
      name: "日産ルークス",
      model: "クーペ",
    },

    {
      image: "car6",
      maker: "nissan",
      name: "日産ルークス",
      model: "ステーションワゴン",
    },

    {
      image: "car7",
      maker: "nissan",
      name: "日産ルークス",
      model: "SUB・クロカン",
    },

    {
      image: "car8",
      maker: "nissan",
      name: "日産ルークス",
      model: "オープンカー",
    },

    {
      image: "car9",
      maker: "nissan",
      name: "日産ルークス",
      model: "ワンボックス",
    },
  ];
  return (
    <Box
      w={{ base: "340px", md: "360px", lg: "600px" }}
      bg="#F5F5F5"
      p="2px"
      m="5px"
      boxShadow="md"
    >
      <Heading
        as="h3"
        size="md"
        m="8px"
        mb="0"
        color="gray"
        fontWeight="normal"
      >
        車種から探す
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <CarImage carData={carData} />
      </Flex>
      <Flex alignItems="center" mt="10px">
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

      <Flex mt="10px">
        <SelectSearch />
        <SelectSearch />
      </Flex>
      <Box>
        <ButtonSearch />
      </Box>
    </Box>
  );
};

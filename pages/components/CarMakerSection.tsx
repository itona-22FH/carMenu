/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { SelectSearch } from "./SelectSearch";
import { CarImage } from "./CarImage";
import { ButtonSearch } from "./ButtonSearch";
import { ToggleButton } from "./ToggleButton";

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
      maker: "スズキ",
      name: "SWIFT",
      model: "普通車",
    },
    {
      image: "car3",
      maker: "ホンダ",
      name: "スパーダ",
      model: "ミニバン",
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

        <Flex mt="10px" justifyContent="center">
          <SelectSearch
            searchWord={"メーカー"}
            bgImage={"path.png"}
            optionValues={["トヨタ", "ホンダ", "スズキ", "マツダ"]}
            bgFilter=""
            textColor="black"
          />
          <SelectSearch
            searchWord={"車種"}
            bgImage={"path.png"}
            optionValues={["セダン", "ワンボックス", "軽自動車", "SUV"]}
            bgFilter=""
            textColor="black"
          />
        </Flex>
      </Box>

      <Flex backgroundColor="#F5F5F5" flexWrap="wrap" justifyContent="center">
        <CarImage carData={carData} category="maker" />
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
      <SelectSearch
        searchWord={"排気量"}
        bgImage={"path.png"}
        optionValues={["100cc", "200cc", "300cc", "400cc"]}
        bgFilter="grayscale(100%)"
        textColor="gray"
      />
      <ToggleButton id="makerToggle" bgColor="gray" labelColor="gray" />
      <ButtonSearch />
    </Box>
  );
};

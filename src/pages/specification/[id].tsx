/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const specification = () => {
  const [carCatalogState, setCarCatalogState] = useState<CarSpecification[]>([
    {
      image: "car1",
      maker: "マツダ",
      name: "CX-5 XD(4WD)",
      model: "SUV",
      displacement: "100cc",
    },
    {
      image: "car2",
      maker: "トヨタ",
      name: "アルファードハイブリッド",
      model: "ミニバン",
      displacement: "100cc",
    },
    {
      image: "car3",
      maker: "トヨタ",
      name: "ハリアー プレミアム",
      model: "SUV",
      displacement: "100cc",
    },
    {
      image: "car4",
      maker: "トヨタ",
      name: "ハイラックスサーフ",
      model: "トラック",
      displacement: "100cc",
    },
    {
      image: "car5",
      maker: "ホンダ",
      name: "シティ",
      model: "セダン",
      displacement: "100cc",
    },
  ]);

  const router = useRouter();
  const { id } = router.query;

  const car = carCatalogState.find((car) => {
    if (car.name === id) {
      return car;
    }
  });

  return (
    <Flex justifyContent="center" mt={{ base: "100px" }}>
      <Flex
        w={{ base: "250px", md: "700px", lg: "1000px" }}
        boxShadow="md"
        flexDir="column"
        alignItems="center"
        p="10px"
      >
        <Image
          src={`/img/catalog/slideshow/${car?.image}.png`}
          p={{ base: "10px" }}
          m={{base:"10px"}}
          boxShadow="md"
          w={{ base: "300px", md: "600px", lg: "800px" }}
        ></Image>
        <Flex flexDirection="column" alignItems="center">
          <Heading
            as="h3"
            size={{ base: "sm", md: "xl", lg: "2xl" }}
            mt={{ base: "20px" }}
            color="#38566B"
          >
            【メーカー】
          </Heading>
          <Text fontSize={{ base: "15px", md: "30px", lg: "50px" }}>
            {car?.maker}
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading
            as="h3"
            size={{ base: "sm", md: "xl", lg: "2xl" }}
            mt={{ base: "20px" }}
            color="#38566B"
          >
            【車名】
          </Heading>
          <Text fontSize={{ base: "15px", md: "30px", lg: "50px" }}>
            {car?.name}
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading
            as="h3"
            size={{ base: "sm", md: "xl", lg: "2xl" }}
            mt={{ base: "20px" }}
            color="#38566B"
          >
            【車種】
          </Heading>
          <Text fontSize={{ base: "15px", md: "30px", lg: "50px" }}>
            {car?.model}
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading
            as="h3"
            size={{ base: "sm", md: "xl", lg: "2xl" }}
            mt={{ base: "20px" }}
            color="#38566B"
          >
            【排気量】
          </Heading>
          <Text fontSize={{ base: "15px", md: "30px", lg: "50px" }}>
            {car?.displacement}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default specification;

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const specification = () => {
  const [carCatalogState, setCarCatalogState] = useState<CarCatalog[]>([
    {
      image: "car1",
      maker: "マツダ",
      name: "CX-5 XD(4WD)",
      bookmark: true,
    },
    {
      image: "car2",
      maker: "トヨタ",
      name: "アルファードハイブリッド",
      bookmark: false,
    },
    {
      image: "car3",
      maker: "トヨタ",
      name: "ハリアー プレミアム",
      bookmark: false,
    },
    {
      image: "car4",
      maker: "トヨタ",
      name: "ハイラックスサーフ",
      bookmark: true,
    },
    {
      image: "car5",
      maker: "ホンダ",
      name: "シティ",
      bookmark: false,
    },
    {
      image: "car1",
      maker: "マツダ",
      name: "CX-5 XD(4WD)",
      bookmark: true,
    },
    {
      image: "car2",
      maker: "トヨタ",
      name: "アルファードハイブリッド",
      bookmark: false,
    },
    {
      image: "car3",
      maker: "トヨタ",
      name: "ハリアー プレミアム",
      bookmark: false,
    },
    {
      image: "car4",
      maker: "トヨタ",
      name: "ハイラックスサーフ",
      bookmark: true,
    },
    {
      image: "car5",
      maker: "ホンダ",
      name: "シティ",
      bookmark: false,
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
    <Flex justifyContent="center" mt={{ base: "20px" }}>
      <Flex
        w={{ base: "250px" }}
        boxShadow="md"
        flexDir="column"
        alignItems="center"
      >
        <Image
          src={`/img/catalog/slideshow/${car?.image}.png`}
          p={{ base: "10px" }}
        ></Image>
        <Text mt={{ base: "20px" }}>{car?.maker}</Text>
        <Text>{car?.name}</Text>
      </Flex>
    </Flex>
  );
};

export default specification;

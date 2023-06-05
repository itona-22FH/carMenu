/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// デフォルトのテーマ
import "@splidejs/react-splide/css";

// または、ほかのテーマ
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// あるいは、コアスタイルのみ
import "@splidejs/react-splide/css/core";

export const CarCatalogSection = () => {
  const carCatalog = [
    {
      image: "car1",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car2",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car3",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car4",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car5",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car1",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car2",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car3",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car4",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
    {
      image: "car5",
      maker: "Mazda",
      name: "CX-5 XD(4WD)",
    },
  ];

  return (
    <Box w="100%">
      <Splide
        options={{
          autoHeight: true,
          autoWidth: true,
          pagination: false,
          gap: "1rem",
          focus: "center",
          trimSpace: false,
          autoplay: true,
          rewind: true,
        }}
        aria-label="お気に入りの写真"
        style={{ padding: 0, marginTop: 40 }}
      >
        {carCatalog.map((car) => {
          return (
            <SplideSlide style={{ margin: "10px" }}>
              <Flex
                w="200px"
                boxShadow="md"
                p="3px"
                h="200px"
                flexDirection="column"
                justifyContent="space-around"
              >
                <Image
                  src={`/img/catalog/slideshow/${car.image}.png`}
                  h="110px"
                />
                <Flex justifyContent="space-between">
                  <Flex flexDirection="column">
                    <Text fontSize="1px">{car.maker}</Text>
                    <Text fontSize="1px">{car.name}</Text>
                  </Flex>
                  <Button
                    borderRadius=""
                    p="5px"
                    m="0"
                    w=""
                    h=""
                    bg="white"
                    boxShadow="md"
                    fontWeight="normal"
                  >
                    <Text fontSize="1px">
                      お気に入りに<br></br>追加
                    </Text>
                    <Image
                      src="/img/icon/pinUnCheck.png"
                      w="25px"
                      ml="10px"
                    ></Image>
                  </Button>
                </Flex>

                <Box textAlign="center" mt="10px" mb="10px">
                  <Button
                    bg="white"
                    border="1px solid #2D2D2D"
                    borderRadius="2px"
                    fontWeight=""
                    w="130px"
                    h="30px"
                    justifyContent="space-around"
                    backgroundImage="/img/icon/arrowRightSlideButton.png"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="95% 50%"
                    backgroundSize="11px"
                  >
                    <Text fontSize="13px">詳細を見る</Text>
                  </Button>
                </Box>
              </Flex>
            </SplideSlide>
          );
        })}
      </Splide>
    </Box>
  );
};

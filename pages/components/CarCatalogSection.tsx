/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import { Flex, Button, Box, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// デフォルトのテーマ
import "@splidejs/react-splide/css";

// または、ほかのテーマ
import "@splidejs/react-splide/css/skyblue";

// あるいは、コアスタイルのみ
import "@splidejs/react-splide/css/core";

export const CarCatalogSection = () => {
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

  const handleBookmark = (index: number) => {
    const newCarCatalog = carCatalogState.map((car, i) => {
      if (i === index) {
        car.bookmark = !car.bookmark;
        return car;
      } else {
        return car;
      }
    });
    setCarCatalogState(newCarCatalog);
  };

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
        aria-label="新型車"
        style={{ padding: 0, marginTop: 40 }}
      >
        {carCatalogState.map((car, index) => {
          return (
            <SplideSlide style={{ margin: "10px" }}>
              <Flex
                w="230px"
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
                  <Flex flexDirection="column" w="110px">
                    <Text fontSize="1px">{car.maker}</Text>
                    <Text fontSize="1px" textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">{car.name}</Text>
                  </Flex>

                  <Button
                    borderRadius=""
                    p="5px"
                    m="0"
                    w=""
                    h=""
                    bg="white"
                    boxShadow={car.bookmark ? "" : "md"}
                    fontWeight="normal"
                    onClick={() => handleBookmark(index)}
                  >
                    {car.bookmark ? (
                      <Text fontSize="1px">
                        お気に入り<br></br>解除
                      </Text>
                    ) : (
                      <Text fontSize="1px">
                        お気に入りに<br></br>追加
                      </Text>
                    )}
                    <Image
                      src={`/img/icon/${
                        car.bookmark ? "pinCheck" : "pinUnCheck"
                      }.png`}
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

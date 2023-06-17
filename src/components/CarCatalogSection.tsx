/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import {
  Flex,
  Button,
  Box,
  Text,
  Image,
  Heading,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css/skyBlue";

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
    <>
      <Box textAlign="center">
        <Heading
          as="h2"
          size="sm"
          fontSize={{ base: "13px", md: "20px", lg: "30px" }}
        >
          オススメの新型車(仮)
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: "0.5em", md: "8px", lg: "15px" }}
          color="gray"
        >
          説明文が入ります。ダミーテキスト
        </Text>
        <Text
          textAlign="center"
          fontSize={{ base: "0.5em", md: "8px", lg: "15px" }}
          color="gray"
        >
          ダミーテキストダミーテキストダミーテキスト
        </Text>
      </Box>
      <Flex>
        <Box w="100%">
          <Splide
            options={{
              pagination: false,
              gap: 20,
              focus: "center",
              trimSpace: false,
              autoplay: true,
              rewind: true,
              autoHeight: true,
              autoWidth: true,
            }}
            aria-label="新型車"
            style={{ padding: 0, marginTop: 40 }}
            hasTrack={false}
          >
            <SplideTrack>
              {carCatalogState.map((car, index) => {
                return (
                  <SplideSlide style={{ margin: "10px 0" }}>
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
                          <Text
                            fontSize="1px"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                            overflow="hidden"
                          >
                            {car.name}
                          </Text>
                        </Flex>

                        <Button
                          borderRadius=""
                          p="5px"
                          m="1px"
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
                        <Link href={`/specification/${car.name}`}>
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
                        </Link>
                      </Box>
                    </Flex>
                  </SplideSlide>
                );
              })}
            </SplideTrack>
          </Splide>
        </Box>
      </Flex>
    </>
  );
};

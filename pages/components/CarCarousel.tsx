/* eslint-disable react/jsx-key */
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarCarousel = () => {
  const SlideData = [
    {
      image: "car1",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      image: "car2",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      image: "car3",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      image: "car4",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      image: "car5",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      image: "car6",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      image: "car7",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
    {
      image: "car8",
      text: "ダミーテキストダミーテキストダミーテキストダミーテキスト",
    },
  ];
  return (
    <Box>
      <Carousel
        infiniteLoop
        autoPlay={true}
        showStatus={false}
        showArrows={false}

      >
        {SlideData.map((carImage) => {
          return (
            <Box>
              <Image
                src={`/img/catalog/top/${carImage.image}.jpg`}
                height={{ base: "180px", md: "300px", lg: "600px" }}
                width="800px"
                alt={"carImage"}
              />
              <Text
                className="legend"
                mb={{ base: "50px", md: "150px", lg: "400px" }}
                style={{ backgroundColor: "transparent", color: "black", }}
                fontWeight="bold"

              >
                {carImage.text}
              </Text>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

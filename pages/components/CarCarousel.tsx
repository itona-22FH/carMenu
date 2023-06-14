/* eslint-disable react/jsx-key */
import { Box, Image, List, Text } from "@chakra-ui/react";
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

  const indicatorStyles = {
    background: "#000",
    display: "inline-block",
    margin: "0 3px",
    borderRadius: 50,
  };
  return (
    <Box>
      <Carousel
        infiniteLoop
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <List
                w={{ base: "10px", md: "30px" }}
                h={{ base: "10px", md: "30px" }}
                style={{ ...indicatorStyles, background: "white" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <List
              w={{ base: "10px", md: "30px" }}
              h={{ base: "10px", md: "30px" }}
              style={{ ...indicatorStyles, opacity: 0.4 }}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
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
                style={{ backgroundColor: "transparent", color: "black" }}
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

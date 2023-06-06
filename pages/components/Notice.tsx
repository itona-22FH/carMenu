import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Notice = () => {
  const noticeData = [
    {
      timeStamp: "2017/01/01",
      text: "タイトルが入ります。ダミーテキストダミーテキストダミーテキスト",
    },
    {
      timeStamp: "2017/01/01",
      text: "タイトルが入ります。ダミーテキストダミーテキストダミーテキスト",
    },
    {
      timeStamp: "2017/01/01",
      text: "タイトルが入ります。ダミーテキストダミーテキストダミーテキスト",
    },
  ];
  return (
    <>
      {noticeData.map((notice) => {
        return (
          <>
            <Flex
              m="5px"
              backgroundImage="/img/icon/arrowRight.png"
              backgroundRepeat="no-repeat"
              backgroundPosition="right 50%"
              backgroundSize="18px"
            >
              <Divider orientation="vertical" w="4px" h="50px" bg="#003657" />
              <Flex flexDirection="column" ml="10px" fontSize="14px">
                <Text color="blackAlpha.600">{notice.timeStamp}</Text>
                <Text color="blackAlpha.600">{notice.text}</Text>
              </Flex>
            </Flex>
            <Divider orientation="horizontal" w="100%" bg="#003657" h="1px" />
          </>
        );
      })}
    </>
  );
};

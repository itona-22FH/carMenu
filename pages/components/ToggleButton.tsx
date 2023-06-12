import React, { useState } from "react";
import styles from "../../styles/toggleButton.module.scss";
import { Flex, FormLabel, Text } from "@chakra-ui/react";

export const ToggleButton = ({ id }: ToggleButtonProps) => {
  return (
    <>
      <Flex mt="20px">
        <FormLabel
          htmlFor="checkbox_toggle"
          fontSize="1px"
          fontWeight="normal"
          m="0"
          mt="4px"
          mr="10px"
          ml="5px"
        >
          AT/MT
        </FormLabel>
        <input
          className={styles.check}
          type="checkbox"
          id={id}
          style={{ display: "none" }}
        />

        <div className={styles.checkbox}>
          <label htmlFor={id} className={styles.slide}>
            <label htmlFor={id} className={styles.toggle}></label>
            <FormLabel
              htmlFor={id}
              fontSize="13px"
              zIndex="100"
              cursor="pointer"
              m="0"
              className={styles.text}
            >
              AT
            </FormLabel>
            <FormLabel
              htmlFor={id}
              fontSize="13px"
              zIndex="100"
              cursor="pointer"
              m="0"
            >
              MT
            </FormLabel>
          </label>
        </div>
      </Flex>
    </>
  );
};

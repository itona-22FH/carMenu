import React, { useState } from "react";
import styles from "../../styles/toggleButton.module.scss";
import { Flex, FormLabel, Text } from "@chakra-ui/react";

export const ToggleButton = ({ id, bgColor, labelColor }: ToggleButtonProps) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => {
      return !prev;
    });
  };

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
          color={labelColor}
        >
          AT/MT
        </FormLabel>
        <input
          className={styles.check}
          type="checkbox"
          id={id}
          style={{ display: "none" }}
          onChange={toggleChecked}
        />

        <div className={styles.checkbox}>
          <label htmlFor={id} className={styles.slide}>
            <label htmlFor={id} className={styles.toggle} style={{backgroundColor:bgColor}}></label>
            <FormLabel
              htmlFor={id}
              fontSize="13px"
              zIndex="100"
              cursor="pointer"
              m="0"
              color={checked ? "gray" : "white"}
            >
              AT
            </FormLabel>
            <FormLabel
              htmlFor={id}
              fontSize="13px"
              zIndex="100"
              cursor="pointer"
              m="0"
              color={checked ? "white" : "gray"}
            >
              MT
            </FormLabel>
          </label>
        </div>
      </Flex>
    </>
  );
};

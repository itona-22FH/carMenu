import React from "react";
import { Link } from "@chakra-ui/react";

export const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <Link
      href="/"
      fontSize={{ base: "0.5em", md: "15px", lg: "25px" }}
      ml={{ base: "30px", lg: "30px" }}
      mb={{base:"10px"}}
      color="white"
    >
      {menuItem}
    </Link>
  );
};

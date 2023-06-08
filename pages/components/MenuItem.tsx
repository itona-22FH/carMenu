import React from "react";
import { Link } from "@chakra-ui/react";

export const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <Link
      href="/"
      fontSize={{ base: "0.5em", md: "20px", lg: "25px" }}
      ml={{ base: "10px", lg: "20px" }}
      color="white"
    >
      {menuItem}
    </Link>
  );
};

import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Copylight } from "../components/Copylight";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Copylight />
    </>
  );
};

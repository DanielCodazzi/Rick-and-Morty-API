import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./ram/components/Navbar";
import { Footer } from "./ram/components/Footer";
import { RAMPage } from "./ram/pages/RAMPage";


const AppRAM = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RAMPage />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRAM;

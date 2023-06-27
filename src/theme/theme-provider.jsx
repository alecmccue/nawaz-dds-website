"use client";

import { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const ThemeContext = createContext({});

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

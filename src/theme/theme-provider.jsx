"use client";

import { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "@/theme";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const ThemeContext = createContext({});

export default function Providers({ children }) {
  return (
    // <ThemeContext.Provider>
    <ThemeProvider theme={THEME}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
    // </ThemeContext.Provider>
  );
}

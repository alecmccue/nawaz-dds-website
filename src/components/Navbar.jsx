"use client";
import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import styled from "styled-components";

const NavbarButtonWrapper = styled.div`
  justify-content: center;
`;

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        <NavbarButtonWrapper>
          <Link href="/about">
            <Button variant="contained">About</Button>
          </Link>

          <Link href="/services">
            <Button variant="contained">Services</Button>
          </Link>

          <Link href="/products">
            <Button variant="contained">Products</Button>
          </Link>
        </NavbarButtonWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

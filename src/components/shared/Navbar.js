"use client";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import Link from "next/link";
import Header from "./Header";

const navItems = [
  { route: "Home", pathaname: "/" },
  { route: "Pages", pathaname: "/pages" },
  { route: "Category", pathaname: "/category" },
  { route: "News", pathaname: "/news" },
  { route: "About", pathaname: "/about" },
  { route: "Contact", pathaname: "/contact" },
];

function Navbar() {
  return (
    <>
      <Header />
      <AppBar className="bg-black" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} alt="site logo" />
            <Box className="w-full text-center">
              {navItems.map((item) => (
                <Link key={item} href={`${item.pathaname}`}>
                  <Button className="text-white">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box className="">
              <Stack
                sx={{
                  "& svg": { color: "white" },
                }}
                direction={"row"}
              >
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <YouTubeIcon/>
                </IconButton>
                <IconButton>
                  <LinkedInIcon/>
                </IconButton>
                <IconButton>
                  <InstagramIcon/>
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;

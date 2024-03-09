

import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const navItems = [
  { route: "Home", pathaname: "/" },
  { route: "Pages", pathaname: "/pages" },
  { route: "Category", pathaname: "/category" },
  { route: "News", pathaname: "/news" },
  { route: "About", pathaname: "/about" },
  { route: "Contact", pathaname: "/contact" },
];
const Footer = () => {
  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
        textAlign={'center'}
          sx={{
            "& svg": { color: "white" },
          }}
          className=""
        >
          
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <YouTubeIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
      
        </Box>
        <Box className="w-full text-center">
          {navItems.map((item) => (
            <Link key={item} href={`${item.pathaname}`}>
              <Button className="text-white">{item.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography textAlign={"center"} variant="body2" color={"gray"}>
          @ 2024 The Dragon News. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

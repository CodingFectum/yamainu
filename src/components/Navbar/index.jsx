import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import styled from "@emotion/styled";
// import logo from "../../images/logo.png";

const Items = styled.div`
  padding-top: 10px;
  // opacity: 0.8;
  font-size: 12px !important;
  font-family: PoppinsLight;
  color: white;
  text-align: center;
`;
const Index = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <AppBar
        position="static"
        style={{
          color: "white",
          backgroundColor: "transparent",
          boxShadow: "none",

          // zIndex: "9999999999999999999999",
        }}
      >
        <Container maxWidth="xl">
          <div
            maxWidth="xl"
            style={{
              // paddingLeft: "20px",
              // paddingRight: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {/* <a href="/#">
              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                style={{ width: 400, paddingTop: 0, paddingBottom: 10 }}
              />
            </a> */}
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              {/* <a href="/#">
              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                style={{ width: 300, paddingTop: 0, paddingBottom: 10 }}
              />
            </a> */}
            </Typography>

            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 50,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                className="mx-5"
                href="/#about"
              >
                <Items>
                  <MenuItem>About</MenuItem>
                </Items>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="mx-5"
                href="/#roadmap"
              >
                <Items>
                  <MenuItem>Roadmap</MenuItem>
                </Items>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="mx-5"
                href="/#tokenomics"
              >
                <Items>
                  <MenuItem>Tokenomics</MenuItem>
                </Items>
              </Link>
            </Box>
            <Box
              sx={{
                justifyContent: "flex-end",
                flexGrow: 1,
                color: "white",
                display: { xs: "none", md: "flex" },
              }}
            >
              {/* <Button>Buy Now</Button> */}
            </Box>
            {/* menu for mobile */}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                style={{ color: "black" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link href="/#about">
                  <MenuItem
                    style={{ color: "black" }}
                    onClick={() => handleCloseNavMenu("/")}
                  >
                    About
                  </MenuItem>
                </Link>
                <Link href="/#roadmap">
                  <MenuItem
                    style={{ color: "black" }}
                    onClick={() => handleCloseNavMenu("/")}
                  >
                    Roadmap
                  </MenuItem>
                </Link>
                <Link href="/#tokenomics">
                  <MenuItem
                    style={{ color: "black" }}
                    onClick={() => handleCloseNavMenu("/")}
                  >
                    Tokenomics
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default Index;

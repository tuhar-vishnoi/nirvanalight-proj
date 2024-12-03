import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import BookNowDialog from "./BookNowDialog";

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "AboutUs", path: "/aboutus" },
    { name: "Horoscope", path: "/horoscope" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "black", color: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              component="div"
              sx={{
                cursor: "pointer",
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: 700,
                textDecoration: "none",
                color: "orange",
                flexGrow: 1,
                fontSize: "32px",
              }}
            >
              Nirvana Light
            </Typography>

            {/* Center Menu (Desktop View) */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    my: 2,
                    color: "white",
                    mx: 1,
                    fontSize: "17px",
                    textTransform: "capitalize",
                    "&:hover": {
                      color: "orange",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Right Button (Desktop View) */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                onClick={handleOpenDialog}
                variant="contained"
                sx={{
                  bgcolor: "orange",
                  color: "black",
                  borderRadius: "30px",
                  padding: "8px 24px",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "white",
                    bgcolor: "darkorange",
                  },
                }}
              >
                Consult Now
              </Button>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        to={item.path}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        {item.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    handleOpenDialog();
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "orange",
                      color: "black",
                      width: "100%",
                      textTransform: "capitalize",
                      "&:hover": {
                        color: "white",
                        bgcolor: "darkorange",
                      },
                    }}
                  >
                    Consult Now
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <BookNowDialog open={openDialog} onClose={handleCloseDialog} />
    </>
  );
};

export default Header;

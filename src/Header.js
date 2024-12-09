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
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorElMobileServices, setAnchorElMobileServices] = useState(null);

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

  const handleServicesHover = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };
  const handleMobileServicesMenu = (event) => {
    setAnchorElMobileServices(event.currentTarget);
  };

  const handleCloseMobileServicesMenu = () => {
    setAnchorElMobileServices(null);
  };

  const services = [
    { id: 1, title: "For Business", route: "/business" },
    { id: 2, title: "For Individual", route: "/individual" },
    { id: 3, title: "Baby name Design", route: "/babyName" },
    { id: 4, title: "Numerology Report", route: "/NumerologyReport" },
  ];

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
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
              {menuItems.map((item) =>
                item.name === "Services" ? (
                  <Button
                    key={item.name}
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
                    onMouseEnter={handleServicesHover}
                  >
                    {item.name}
                  </Button>
                ) : (
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
                )
              )}
              {/* Services Dropdown */}
              <Menu
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                MenuListProps={{
                  onMouseLeave: handleCloseServicesMenu,
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service.id}
                    onClick={() => {
                      handleCloseServicesMenu();
                      navigate(service.route);
                    }}
                    sx={{
                      "&:hover": {
                        color: "orange",
                      },
                    }}
                  >
                    {service.title}
                  </MenuItem>
                ))}
              </Menu>
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
                Contact Now
              </Button>
            </Box>
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
                {menuItems.map((item) =>
                  item.name === "Services" ? (
                    <MenuItem
                      key={item.name}
                      onClick={handleMobileServicesMenu}
                    >
                      <Typography textAlign="center">{item.name}</Typography>
                    </MenuItem>
                  ) : (
                    <MenuItem
                      key={item.name}
                      onClick={() => {
                        handleCloseNavMenu();
                        navigate(item.path);
                      }}
                    >
                      <Typography textAlign="center">{item.name}</Typography>
                    </MenuItem>
                  )
                )}

                {/* Services Submenu in Mobile */}
                <Menu
                  anchorEl={anchorElMobileServices}
                  open={Boolean(anchorElMobileServices)}
                  onClose={handleCloseMobileServicesMenu}
                  sx={{ ml: 2 }}
                >
                  {services.map((service) => (
                    <MenuItem
                      key={service.id}
                      onClick={() => {
                        handleCloseMobileServicesMenu();
                        handleCloseNavMenu();
                        navigate(service.route);
                      }}
                      sx={{
                        "&:hover": {
                          color: "orange",
                        },
                      }}
                    >
                      {service.title}
                    </MenuItem>
                  ))}
                </Menu>

                {/* Consult Now Button in Mobile */}
                <MenuItem onClick={handleOpenDialog}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "orange",
                      color: "black",
                      borderRadius: "30px",
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontWeight: "500",
                      textTransform: "capitalize",
                      width: "100%",
                      "&:hover": {
                        color: "white",
                        bgcolor: "darkorange",
                      },
                    }}
                  >
                    Contact Now
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

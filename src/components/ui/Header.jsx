import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import BlockChainDropDown from "./BlockChainDropDown";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user: currentUser } = useSelector(selectCurrentUser);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let settings = [
    { id: 3, name: "Dashboard", path: "/dashboard" },
    { id: 4, name: "FAQ", path: "/faq" },
  ];

  // Adding Login and Sign Up options only if the user is not logged in
  if (!currentUser) {
    settings.unshift({ id: 1, name: "Login", path: "/login" });
    settings.unshift({ id: 2, name: "Sign Up", path: "/sign_up" });
  }

  // Modify the settings array based on the user's role
  if (currentUser) {
    if (currentUser.role !== "superAdmin") {
      // Filtering out the Dashboard route if the user is not a superAdmin
      settings = settings.filter((setting) => setting.name !== "Dashboard");
    }
  } else {
    // Adding Login and Sign Up options only if the user is not logged in
    settings.unshift({ id: 1, name: "Login", path: "/login" });
    settings.unshift({ id: 2, name: "Sign Up", path: "/sign_up" });
  }

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "5px",
        borderBottom: "0.5px solid rgba(128, 128, 128, 0.5)",
        zIndex: 1000, // Ensure the header is above other content
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <p
              style={{
                color: "#9B1FE9",
                fontSize: "2rem",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Faucets
            </p>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 0, display: { md: "flex" }, mr: 6 }}>
            {" "}
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 6 }}>
              <BlockChainDropDown />
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <div>
                  <Avatar alt="user" src="/static/images/avatar/2.jpg" />
                </div>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <NavLink to={setting.path} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center" underline="none">
                      {setting.name}
                    </Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

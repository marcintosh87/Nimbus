import { Avatar, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/Nimbus-white.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({
  authenticated,
  currentUser,
  setAuthenticated,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logEl, setLogEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const openLog = Boolean(logEl);
  const nav = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAuthenticated(true);
  };
  const handleClickLog = (event) => {
    setLogEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleCloseLog = () => {
    setLogEl(null);
  };

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
    });
    nav("/");
    window.location.reload();
  };

  return (
    <Container className="Navbar-container" sx={{ py: 1 }}>
      <Grid
        container
        sx={{ my: 1 }}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Link to="/">
            <img src={logo} alt="Nimbus Logo" id="logo" />
          </Link>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5}>
          <Link to="/" className="react-links">
            <Button>Gratitude Space</Button>
          </Link>

          {authenticated ? (
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Mood Journal
            </Button>
          ) : null}
          {currentUser && (
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {currentUser && (
                <Link to="addJournal" className="react-links">
                  <MenuItem onClick={handleClose}>New Entry</MenuItem>
                </Link>
              )}

              <MenuItem onClick={handleClose}>View Entries</MenuItem>
            </Menu>
          )}
        </Grid>
        <Grid item xs={1}>
          <Button
            id="basic-button"
            aria-controls={open ? "login-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickLog}
          >
            <Avatar alt="Cindy Baker" src="" />
          </Button>

          <Menu
            id="login-menu"
            anchorEl={logEl}
            open={openLog}
            onClose={handleCloseLog}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {authenticated ? (
              <MenuItem>{`${currentUser.first_name} ${currentUser.last_name}`}</MenuItem>
            ) : null}
            {authenticated ? (
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            ) : (
              <Link to="/sign-in" className="react-links">
                {" "}
                <MenuItem onClick={handleCloseLog}>Log In</MenuItem>
              </Link>
            )}
          </Menu>
        </Grid>
      </Grid>
    </Container>
  );
}

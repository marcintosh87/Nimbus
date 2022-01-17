import { Avatar, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/Nimbus-white.png";

import React from "react";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
          <img src={logo} alt="Nimbus Logo" id="logo" />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5}>
          <Button>Home</Button>
          <Button>Gratitude Wall</Button>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Mood Journal
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>New Entry</MenuItem>
            <MenuItem onClick={handleClose}>View Entries</MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={1}>
          <Avatar alt="Cindy Baker" src="" />
        </Grid>
      </Grid>
    </Container>
  );
}

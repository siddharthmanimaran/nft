import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import * as S from "./style";

function Presenter(props) {
  // const theme = createTheme({
  //   typography: {
  //     // fontFamily: ["Brush Script MT", "Brush Script Std", "cursive"].join(","),
  //   },
  // });

  const { sections, title } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar
          component="nav"
          // variant="dense"
          sx={{
            justifyContent: "space-between",
            // overflowX: "auto",
            backgroundColor: "#4056A1",
            // color: "black",
            // boxShadow: 4,
          }}
        >
          <Link href="/" sx={{ textDecoration: "none", color: "black" }}>
            <S.Header style={{ color: "#EFE2BA" }}>
              <S.Span
                style={{
                  fontSize: "60px",
                  color: "#d79922",
                  fontStyle: "oblique",
                  fontFamily: "Sofia, sans-serif",
                }}
              >
                K
              </S.Span>
              eerthana
            </S.Header>
          </Link>
          <S.Bars>
            <IconButton
              id="demo-positioned-button"
              aria-controls="demo-positioned-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" sx={{ color: grey[900] }} />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </S.Bars>
          <S.Items>
            <S.Button>
              <S.Anchor href="/demo">
                <S.Span>Home</S.Span>
              </S.Anchor>
            </S.Button>
            <S.Button>
              <S.Anchor href="/about">
                <S.Span>About Us</S.Span>
              </S.Anchor>
            </S.Button>
            <S.Button>
              <S.Anchor href="/contact">
                <S.Span>Contact Us</S.Span>
              </S.Anchor>
            </S.Button>
          </S.Items>
        </Toolbar>
      </AppBar>
    </>
  );
}

// Presenter.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Presenter;

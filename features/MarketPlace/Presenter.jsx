import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import * as S from "./style";
import Posts, { items } from "./Data";
import Cards from "../../components/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React from "react";

import Carousel, { CarouselItem } from "../../components/Carousel";

const Presenter = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    borderRadius: "10px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginBottom: 0,
    width: "100%",
    // border: "1",
    // height: "30px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      //   vertical padding + font size from searchIcon,
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      //   height: "20px",
      marginTop: "6px",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Box sx={{ width: "auto" }}>
        <Header />
        <Carousel>
          {items.map((item, i) => (
            <CarouselItem key={i} {...item} />
          ))}
        </Carousel>
        <h3>Market Place</h3>
        <S.Div>
          {/* <div>
        <div>
          <input type="text" placeholder="search" />
        </div>
      </div> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* <p>Search</p> */}

          <a href="#">filter</a>
        </S.Div>
        <div
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              justifyContent="space-around"
              alignItems="flex-start"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Posts.map((post, index) => (
                <Grid
                  item
                  justifyContent="center"
                  alignItems="center"
                  xs={2}
                  sm={4}
                  md={4}
                  key={index}
                >
                  <Cards Posts={post} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>

        <Footer />
      </Box>
    </>
  );
};

export default Presenter;

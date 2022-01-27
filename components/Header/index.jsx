import { AppBar } from "@mui/material";
import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./style";
// import LogoImg from "../assets/logo.png";

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <AppBar>
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <a href="/" style={{ fontSize: "40px" }}>
              <span style={{ fontSize: "60px", color: "#d79922" }}>K</span>
              eerthana
            </a>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink href="activity">
                <span
                  style={{
                    fontSize: "30px",
                    color: "#d79922",
                  }}
                >
                  A
                </span>
                ctivity
              </NavbarLink>
              <NavbarLink href="currentDrops">
                {" "}
                <span
                  style={{
                    fontSize: "30px",
                    color: "#d79922",
                  }}
                >
                  C
                </span>
                urrent Drops
              </NavbarLink>
              <NavbarLink href="verifiedDrops">
                {" "}
                <span
                  style={{
                    fontSize: "30px",
                    color: "#d79922",
                  }}
                >
                  V
                </span>
                erified Drops
              </NavbarLink>
              <NavbarLink href="marketplace">
                <span
                  style={{
                    fontSize: "30px",
                    color: "#d79922",
                  }}
                >
                  M
                </span>
                arket Place
              </NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended href="activity"> Activity</NavbarLinkExtended>
            <NavbarLinkExtended href="/currentDrops">
              {" "}
              Current Dropdown
            </NavbarLinkExtended>
            <NavbarLinkExtended href="verifiedDrops">
              {" "}
              Verified Drops
            </NavbarLinkExtended>
            <NavbarLinkExtended href="marketplace">
              Market Place
            </NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </AppBar>
  );
}

export default Header;

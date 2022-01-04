import styled from "styled-components";

export const Button = styled.div``;
export const Title = styled.h1`
  // position: relative;
  color: #cef0d4;
  font-family: "Sofia", sans-serif;
  font-weight: normal;
  text-shadow: 1px 1px 2px #082b34;
  font-style: oblique;
`;

export const Items = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Anchor = styled.a`
  position: relative;
  z-index: 2;
  display: block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: "#d79922",
  font-weight: bold;
  // font-size: 24px;
  // border-radius: 50%;

  transition: all 1s;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 50%;
    // background: black;
    // transition: all 0.4s;
  }
  :hover {
    // color: White;
    // box-shadow: 1px 1px 25px 10px;
  }

  :hover:after {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Span = styled.span`
  position: relative;
  z-index: 2;
`;

export const Image = styled.img`
  display: inline-block;
  max-height: 56px;
  max-width: 225px;
  padding: 8px 4px 8px 12px;
  vertical-align: middle;
`;

export const Bars = styled.div`
  display: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -30px;
    right: -25px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Header = styled.a`
  position: relative;
  z-index: 2;
  display: block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #d79922;
  font-weight: bold;
  font-size: 24px;

  transition: all 1s;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 50%;
    // background: black;
    // transition: all 0.4s;
  }
  :hover {
    // color: White;
    // box-shadow: 1px 1px 25px 10px;
  }

  :hover:after {
    width: 100%;
  }
`;

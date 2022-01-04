import React from "react";
import sections from "./Data";
import Presenter from "./Presenter";

const Header = () => {
  return <Presenter title="Confluxus" sections={sections} />;
};

export default Header;

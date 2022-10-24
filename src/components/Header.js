import React from "react";
// import { Link } from "@reach/router";
import Home from "../pages/Home";

import "../../src/styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Home/>
      </div>

    </header>
  );
};

export default Header;

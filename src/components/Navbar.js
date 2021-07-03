import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // navbar from bootstrap
    <>
      <nav class="navbar navbar-dark bg-dark  sticky-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Users Profile Assignment
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

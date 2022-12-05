import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrap>
      <Logo>
        <h2>keyring gamble</h2>
      </Logo>
      <Menus>
        <Menu>
          <Link to={"/game/:username"}>
            <li>MY</li>
          </Link>
          <Link to={"/"}>
            <li>LOGOUT</li>
          </Link>
        </Menu>
      </Menus>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
  height: fit-content;
  position: fixed;
  top: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  box-sizing: border-box;
`;

const Logo = styled.div`
  h2 {
    font-size: 2rem;
  }
`;

const Menus = styled.ul`
  list-style: none;
  li {
    float: left;
    margin-left: 30px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Menu = styled.div``;

export default Navbar;

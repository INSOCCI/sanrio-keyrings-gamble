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
          {/* 로과웃 - 아직 토큰 처리 안했음 */}
          <Link to={"/"}>
            <li>LOGOUT</li>
          </Link>

          {/* 유저가 뽑은 키링들 모두 보여주는 곳 */}
          <Link to={"/game/:username"}>
            <li>MY</li>
          </Link>

          {/* 현재 만든 빼빼로 낱개 갯수 표시 */}
          <li>🍟</li>
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

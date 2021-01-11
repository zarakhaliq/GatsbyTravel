import { Link } from "gatsby"

import styled from "styled-components"
import React, { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { Button } from "./Button"

const Header = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to="/">TRAVELIX</NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/trips">Trips</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0.5rem calc((100vw-1300px) / 2);
  z-index: 100;
`
const NavLink = styled(Link)`
  letter-spacing: 1px;
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: silver;
  }
  &.active {
    border-bottom: 3px solid red;
  }
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 769px) {
    display: none;
  }
`

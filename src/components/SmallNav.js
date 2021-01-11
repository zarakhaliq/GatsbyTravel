import React from "react"
import { Link } from "gatsby"
import { Button } from "./Button"
import styled from "styled-components"
import { GrClose } from "react-icons/gr"

const SmallNav = ({ toggle, isOpen }) => {
  return (
    <SmallNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <GrClose />
      </Icon>
      <NavWrapper>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/trips">Trips</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/email">Contact</NavLink>
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/trips">
            Book a Flight
          </Button>
        </NavBtn>
      </NavWrapper>
    </SmallNavContainer>
  )
}

export default SmallNav

const SmallNavContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    background: #fff;
    color: #000;
    padding: 4rem;
    postion: fixed;
    z-index: 999;
    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    transition: 0.3s ease-in-out;
    top: 0;
    left: 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  }
`
const NavWrapper = styled.div`
  color: #000;
`
const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px;) {
    grid-template-rows: repeat(6, 60px);
  }
`
const NavLink = styled(Link)`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  letter-spacing: 1px;
  color: #000;
  text-decoration: none;
  transition: 0.2s ease-out;
  cursor: pointer;
  &:hover {
    color: #f26a2e;
    transition: 0.2s ease-out;
  }
`
const NavBtn = styled.div`
  display: flex;
  justify-content: center;
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
`

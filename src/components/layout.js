import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import "./layout.css"
import { GlobalStyle } from "./styles/GlobalStyles"
import Footer from "./Footer"
import SmallNav from "./SmallNav"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <SmallNav isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} isOpen={isOpen} />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout

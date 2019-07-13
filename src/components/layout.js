import React from "react"
import PropTypes from "prop-types"

import Intro from "./intro"
import Header from "./siteHeader"
import Navigation from "./navigation"
import Post from "./post"
import Pagination from "./pagination"
import Footer from "./footer"
import Copyright from "./copyright"

import "../assets/css/main.css"

const Layout = ({ children, type }) => {
  return (
    <div id="wrapper">
      <Header />
      <Intro />

      <Navigation />
      <div id="main">
        {children}
        <section className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
        <Pagination />
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

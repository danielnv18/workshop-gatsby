import React from "react"
import PropTypes from "prop-types"

import Intro from "./intro"
import Header from "./siteHeader"
import Navigation from "./navigation"
import Post from "./post"
import Pagination from "./pagination"
import Footer from "./footer"
import Copyright from "./copyright"
import { useStaticQuery, graphql } from "gatsby"

import "../assets/css/main.css"

const Layout = ({ children, type }) => {
  const data = useStaticQuery(graphql`
    {
      allNodeArticle(limit: 4) {
        nodes {
          title
          id
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fixed(width: 400) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div id="wrapper">
      <Header />
      <Intro />

      <Navigation />
      <div id="main">
        {children}
        <section className="posts">
          {data.allNodeArticle.nodes.map(article => (
            <Post key={article.id} article={article} />
          ))}
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

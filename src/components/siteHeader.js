import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const SiteHeader = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header id="header">
      <Link to="/" className="logo">
        {data.site.siteMetadata.title}
      </Link>
    </header>
  )
}

export default SiteHeader

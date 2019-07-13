import React from "react"
import Img from "gatsby-image"

const Post = ({ article }) => {
  return (
    <article>
      <header>
        <span className="date">April 14, 2017</span>
        <h2>{article.title}</h2>
      </header>
      <a href="#" className="image fit">
        <Img
          fixed={
            article.relationships.field_image.localFile.childImageSharp.fixed
          }
        />
      </a>
      <p>
        Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis
        magna etiam.
      </p>
      <ul className="actions special">
        <li>
          <a href="#" className="button">
            Full Story
          </a>
        </li>
      </ul>
    </article>
  )
}

export default Post

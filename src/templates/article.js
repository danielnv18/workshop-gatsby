import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getMaxListeners } from "cluster";

const Article = ({ data }) => (
  <Layout>
    <h1>{data.nodeArticle.title}</h1>
  </Layout>
)

export const query = graphql`
  query articlesQuery($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
    }
  }
`



export default Article

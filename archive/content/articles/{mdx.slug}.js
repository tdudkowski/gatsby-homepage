import * as React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../../components/layout"

const ArticlePage = ({ data, location }) => {
  const mdx = (data.mdx)

  const regex = new RegExp('(/)(.*?)/')
  const testo = location.pathname.match(regex)[2]

  return (
    <Layout section={testo}>
      <h2>{mdx.frontmatter.title}</h2>
      <p>ID: {mdx.id}</p>
      <p><Link to={`/${mdx.frontmatter.section}`}>index of {mdx.frontmatter.section}</Link></p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default ArticlePage

export const query = graphql`
query ArticlePagesectionQuery($slug: String!) {
  mdx(slug: { eq: $slug }, fileAbsolutePath: {glob: "**/src/pages/articles/*.mdx" }) {
    id
    slug
    body
    frontmatter {
      title
      section
      subsection
    }
  }
}
`;
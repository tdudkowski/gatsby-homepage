import * as React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../../../components/layout"

const ArticlePage = ({ data, pageContext, location }) => {
  const mdx = (data.mdx)

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const regex = new RegExp('(/)(.*?)/')
  const testo = location.pathname.match(regex)[2]

  return (
    <Layout section={testo} subsection={mdx.frontmatter.subsection}>
      <Breadcrumb
        location={location}
        crumbs={crumbs}
        crumbSeparator=" / "
        crumbLabel={mdx.frontmatter.title}
      />
      <h2>{mdx.frontmatter.title}</h2>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default ArticlePage

export const query = graphql`
query ArticlePageSubsectionQuery($slug: String!) {
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
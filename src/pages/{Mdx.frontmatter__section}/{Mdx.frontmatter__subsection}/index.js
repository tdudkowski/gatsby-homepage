import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../../components/layout"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ArticlesPage = ({ data, pageContext, location }) => {
    const mdx = (data.allMdx)

    const {
        breadcrumb: { crumbs },
    } = pageContext

    // console.log(mdx)
    // const regex = new RegExp('.(.*?)')
    // const regex = new RegExp('(/)(.*?)/')
    const regex = new RegExp('(/)(.*)/')

    const properMDX = data.allMdx.nodes.filter(item => location.pathname.includes(item.frontmatter.subsection))

    return (
        <Layout section={properMDX[0].frontmatter.section} subsection={properMDX[0].frontmatter.subsection}>
            {/* <IndexSubsection subsection={location.pathname} /> */}

            <Breadcrumb
                location={location}
                crumbs={crumbs}
                crumbSeparator=" / "
                crumbLabel={properMDX[0].frontmatter.title}
            />
            <h2>{properMDX[0].frontmatter.title}</h2>
            <MDXRenderer>{properMDX[0].body}</MDXRenderer>
        </Layout>
    )
}

export default ArticlesPage

export const query = graphql`
    query IndexTestTrue {
        allMdx(filter: {frontmatter: {comment: {eq: "index"}}}) {
            nodes {
              slug
              frontmatter {
                title
                comment
                subsection
                section
              }
              body
              id
            }
          }
  }
`;
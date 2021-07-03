import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ArticlesPage = ({ data, location }) => {

    const regex = new RegExp('.(.*)')
    // const regex = new RegExp('(/)(.*?)')
    const properMDX = data.allMdx.nodes.filter(item => location.pathname.includes(item.frontmatter.section))

    return (
        <Layout section={location.pathname.match(regex)[1]} subsection={properMDX[0].frontmatter.section}>
            <h2>{properMDX[0].frontmatter.title}</h2>
            <MDXRenderer>{properMDX[0].body}</MDXRenderer>

            {/* <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
                    <li key={id}>
                        <Link to={`/${frontmatter.section}/${frontmatter.subsection}/${slug}`}>{frontmatter.title}</Link>
                        <span>{frontmatter.id} - {slug}</span>
                    </li>
                ))}
            </ul> */}
        </Layout>
    )
}

export default ArticlesPage

export const query = graphql`
    query AllArticlesQuery {
        allMdx(filter: {frontmatter: {comment: {eq: "index-section"}}}) {
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

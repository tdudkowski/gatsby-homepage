import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Sitemap = ({ data }) => {
    return (
        <Layout>
            <section className="section-meta">
                <h2>Mapa strony</h2>
                <p>To są wszystkie opublikowane tu artykuły, wkrótce to uporządkuję.</p>
                <ul>
                    {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
                        <li key={id}>
                            <Link to={`/${frontmatter.section}/${frontmatter.subsection && frontmatter.subsection + "/"}${slug}`}>{frontmatter.title}</Link>
                            {/*<span>{frontmatter.id} - {slug}</span>*/}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default Sitemap

export const query = graphql`
    query AllArticlesIndexQuery {
        allMdx(
            filter: {fileAbsolutePath: {glob: "**/src/pages/articles/*.mdx" }} ) {
                nodes {
                id
                frontmatter {
                    title
                    section
                    subsection
                }
            slug
        }
     }
     mdx {
        slug
        frontmatter {section}}
  }
`;
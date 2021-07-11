import * as React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby";

const NotFoundPage = ({ data }) => {
    return (
        <Layout>
            <section className="section-meta">
                <h2>404</h2>

                <p>Strona nie została znaleziona, sprawdź proszę czy w poniższych linkach jest to czego szukasz. To są wszystkie opublikowane tu artykuły, wkrótce to uporządkuję.</p>
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

export default NotFoundPage

export const query = graphql`
    query AllArticles404IndexQuery {
        allMdx(
            filter: {fileAbsolutePath: {glob: "**/src/content/pagearticles/*.mdx" }} ) {
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
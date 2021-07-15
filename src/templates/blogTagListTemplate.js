import * as React from "react";
import { Link, graphql } from "gatsby";
import LayoutBlog from "../components/layout-blog"

const blogPage = ({ data, location }) => {

    const tag = location.pathname.slice(10)

    const filteredPosts = [...data.allMdx.nodes].filter(item => item.frontmatter.tags.includes(tag))

    return (
        <LayoutBlog>
            <article>
                <h2>Posty z tagiem <span>{tag}</span></h2>
                <section>
                    {filteredPosts.map(({ id, frontmatter, slug }) => (
                        <li key={id}>
                            <Link to={`/blog/${slug}`}>{frontmatter.title}</Link>
                            <span> - {frontmatter.subsection}</span>
                        </li>
                    ))}
                </section>
            </article>

        </LayoutBlog>
    );
};

export default blogPage

export const query = graphql`
query AllTags {
     allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/content/blogposts/*.mdx" } }
      sort: { order: ASC, fields: frontmatter___date }
      ) {
              nodes {
                  frontmatter {
            title
            section
            subsection
            tags
                     }
                     slug
                     id
         }
      }
    }
`;


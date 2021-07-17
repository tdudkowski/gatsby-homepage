import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import LayoutFB from "../components/layout-fb"
import 'gatsby-remark-vscode/styles.css';
import SEO from "../components/seo";
// import { useSiteMetadata } from "../hooks/useSiteMetadata";

const blogFBPost = ({ data }) => {
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title: pageTitle, date, date1945, img } = frontmatter;
  const headerTitle = `Festung Breslau, ${frontmatter.date1945} | ${frontmatter.title}`
  return (
    <LayoutFB sub="post">
      <SEO title={headerTitle} image={img.childImageSharp.gatsbyImageData.images.fallback.src} defer={false} />
      <h2 className="post-header"><div>{frontmatter.date1945}</div><br /> {pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="post">
        <MDXRenderer>{body}</MDXRenderer>
        <p className="tags"><strong>Tagi:</strong> {frontmatter.tags}</p>
        <hr />
        <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      </section>
    </LayoutFB>
  );
};

export default blogFBPost

export const query = graphql`
  query FBPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        date1945
        tags
        img {
          childImageSharp {
             gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                )
             }
          }
       }
      slug
    }
  }
`;


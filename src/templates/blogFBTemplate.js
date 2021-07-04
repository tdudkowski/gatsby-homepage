import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Helmet } from 'react-helmet'
import LayoutFB from "../components/layout-fb"
import 'gatsby-remark-vscode/styles.css';
// import SEO from "react-seo-component";
// import { useSiteMetadata } from "../hooks/useSiteMetadata";

const blogFBPost = ({ data }) => {
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title: pageTitle, date, date1945, cover } = frontmatter;
  const headerTitle = `Festung Breslau, ${frontmatter.date1945} | ${frontmatter.title}`
  return (
    <LayoutFB sub="post">
      <Helmet title={headerTitle} defer={false} />
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
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        date1945
        tags
              }
      slug
    }
  }
`;


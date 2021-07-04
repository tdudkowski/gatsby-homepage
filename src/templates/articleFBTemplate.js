import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from 'react-helmet'
import LayoutFB from "../components/layout-fb"
// import SEO from "react-seo-component";
// import { useSiteMetadata } from "../hooks/useSiteMetadata";

const articleFB = ({ data }) => {
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title: pageTitle, date, cover } = frontmatter;
  const headerTitle = `Festung Breslau 1945 | ${pageTitle}`
  return (
    <LayoutFB sub="article">
      <Helmet title={headerTitle} defer={false} />
      <h2 className="post-header">{pageTitle}</h2>
      <p>Aktualizacja: {frontmatter.date}</p>
      <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      <section className="article">
        <MDXRenderer>{body}</MDXRenderer>
        <hr />
        <p><Link to="../../">Powrót do strony głównej Bloga</Link></p>
      </section>
    </LayoutFB>
  );
};

export default articleFB

export const query = graphql`
  query ArticleBySlug($slug: String!) {
   mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
             }
      slug
    }
  }
`;

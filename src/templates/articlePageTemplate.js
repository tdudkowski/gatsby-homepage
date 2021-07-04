import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from 'react-helmet'
import LayoutPage from "../components/layout"
// import SEO from "react-seo-component";
// import { useSiteMetadata } from "../hooks/useSiteMetadata";

const articlePage = ({ data }) => {

    const { frontmatter, id, body, slug } = data.mdx;

    return (
        <LayoutPage section={frontmatter.section} subsection={frontmatter.subsection}>

            <MDXRenderer>{body}</MDXRenderer>

        </LayoutPage>
    );
};

export default articlePage

export const query = graphql`
  query ArticlePageBySlug($slug: String!) {
   mdx( slug: { eq: $slug } ) {
      id
      body
      slug
      frontmatter {
        title
        section
        subsection
      }
    }
  }
`;

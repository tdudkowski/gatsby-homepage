import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LayoutBlog from "../components/layout-blog"

const blogPage = ({ data }) => {

   const { frontmatter, id, body, slug } = data.mdx;

   const tagsArray = [...frontmatter.tags.split(",")]

   return (
      <LayoutBlog data={data}>
         <h2>{frontmatter.title}</h2>
         {frontmatter.date ? <p>Data publikacji: {frontmatter.date}</p> : null}
         {frontmatter.edited ? <p>Ostatnia edycja: {frontmatter.edited}</p> : null}
         <MDXRenderer>{body}</MDXRenderer>
      </LayoutBlog>
   );
};

export default blogPage

export const query = graphql`
  query BlogpostBySlug($slug: String!) {
   mdx( slug: { eq: $slug } ) {
      id
      body
      slug
      frontmatter {
        title
        section
        subsection
        date(formatString: "YYYY-MM-DD")
        edited(formatString: "YYYY-MM-DD")
        tags
        image {
           childImageSharp {
              gatsbyImageData(
                 width: 200
                 placeholder: BLURRED
                 formats: [AUTO, WEBP]
                 )
              }
           }
      }
   }
}
`;

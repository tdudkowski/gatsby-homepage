import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from 'react-helmet'
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LayoutBlog from "../components/layout-blog"
import SEO from "../components/seo";


const blogPage = ({ data, location }) => {

   const path = location.pathname
   const { frontmatter, id, body, slug } = data.mdx;
   const { title: pageTitle, date, edited, image } = frontmatter;
   const headerTitle = `dygresje.info / blog: ${frontmatter.title}`

   const tagsArray = [...frontmatter.tags.split(",")]

   return (
      <LayoutBlog data={data} path={path}>
          <SEO title={headerTitle} image={image.childImageSharp.gatsbyImageData.images.fallback.src} defer={false} />
         <Helmet title={headerTitle} image={image} defer={false} />
         <h2>{frontmatter.title}</h2>
         {date ? <p>Data publikacji: {date}</p> : null}
         {edited ? <p>Ostatnia edycja: {edited}</p> : null}
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
                 width: 600
                 placeholder: BLURRED
                 formats: [AUTO, WEBP]
                 )
              }
           }
      }
   }
}
`;

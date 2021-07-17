import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import LayoutBlog from "../../components/layout-blog"
import { Helmet } from 'react-helmet'

const StyledSection = styled.section`
display:flex;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  margin:1rem;
  width: 300px;
  height: 5rem;
  border:1px solid #eed;
  background: url(${props => props.background}) no-repeat top center;
  background-size:contain;
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  & a {background-color: rgba(51,51,51,.8); color:#ddd; display:block; font-size:1.2rem; text-align:center; padding: .5rem; margin:auto 0;}
`;

const IndexBlog = ({ data, location }) => {

  const headerTitle = `dygresje.info / blog - wpisy`
  const path = location.pathname

  return (<LayoutBlog path={path}>
    <Helmet title={headerTitle} defer={false} />
    <article>

      <h3>Lista wpisów:</h3>

      <StyledSection>
        {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
          <StyledDiv key={id} background={frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}>
            <Link to={`/blog/${slug}`}>{frontmatter.title}</Link>
          </StyledDiv>
        ))}
      </StyledSection>

    </article>
  </LayoutBlog>)
}

export default IndexBlog

export const query = graphql`
query AllBlogPosts {
     allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/content/blogposts/*.mdx" } }
      sort: { order: ASC, fields: frontmatter___date }
      ) {
              nodes {
                  frontmatter {
            title
            section
            subsection
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
                     slug
                     id
                     body
        }
      }
    }
`;
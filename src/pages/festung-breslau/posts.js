import React from 'react'
import { graphql, Link } from "gatsby"
// import Img from "gatsby-plugin-image"
import LayoutFB from "../../components/layout-fb"
import SEO from "../../components/seo"
// import BlogFBList from "../../templates/blogFBListTemplate"

const Posts = ({ pageContext, data }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext
    // console.log("DATA", data)

    // let post = Array.from(data.allMdx)
    // let featuredImgFluid = data.img.childImageSharp.fluid || null
    // console.log("POST: ", post)

    return (
        <LayoutFB>
            <SEO title="Festung Breslau" />
            <h2>Archiwum wpisów</h2>
            <ul>
                {data.allMdx.nodes.map(({ id, frontmatter, slug }) => (
                    <li key={id} className="post-list">
                        <p><span>{frontmatter.date1945}:</span></p>
                        <p><Link to={`/festung-breslau/blog/${slug}`}>{frontmatter.title}</Link></p>
                        <p><strong>Tagi:</strong> {frontmatter.tags}</p>
                    </li>
                ))}
            </ul>
            <div className="remote">
                {/* <p>Na stronie jest do 10 wpisów bloga - poprzednie wpisy: <Link to="/festung-breslau/1">[_1_]</Link> | <Link to="/festung-breslau/2">[_2_]</Link>
                </p> */}
            </div>
        </LayoutFB>)
}

export default Posts

// AllArticles($currentDate: Date!)
// SITE_INDEX_QUERY
// , date: { lte: $currentDate }

// query BlogPostQuery($slug: String!) {
//   allGhostPost(filter: { slug: { eq: $slug } })
// filter: {  frontmatter: { published: { eq: true }, date: { lte: $currentDate } }}
// sort: { fields: [frontmatter___date], order: DESC }
// DATA VALUES IN NODE.JS 2021-01-29 2021-02-09T00:00:00.000Z
// DATA VALUES IN NODE.JS 2021-01-29 2021-02-09

export const query = graphql`
query AllPosts {
  allMdx(
    filter: { fileAbsolutePath: { glob: "**/src/pages/festung-breslau/posts/*.mdx" }, frontmatter: {published:{ eq: true} } }
    sort: { fields: [frontmatter___date], order: DESC }
     ) {
        nodes {
            id
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              date1945
              tags
            }
            fields {
              currentDate
              slug
            }
            slug
            }
           }
  }
`;
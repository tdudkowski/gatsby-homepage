import React from 'react'
import { graphql, Link } from "gatsby"
// import Img from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LayoutFB from "../../components/layout-fb"
// import SEO from "../../components/seo"
// import BlogFBList from "../../templates/blogFBListTemplate"

const FBIndexPage = ({ data }) => {
  // const {
  //   breadcrumb: { crumbs },
  // } = pageContext
  // console.log("DATA", data)

  // let post = data.allMdx
  // let featuredImgFluid = data.img.childImageSharp.fluid || null
  // console.log("POST: ", post)
  // const image = getImage(data.frontmatter.img)

  return (
    <LayoutFB>
      {/* <SEO title="Festung Breslau" /> */}

      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <section key={id} className="posts post">
          <h4>{frontmatter.date1945}</h4>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.date} - {frontmatter.relativeDate}</p>
          <div className="contentStream">
            <p>{excerpt}</p>
            <figure className="figure" className="imgThumbnail">
              <GatsbyImage image={getImage(frontmatter.img)} alt="ilustracja" />
              {/* <Img fluid={frontmatter.img.childImageSharp} alt="ilustracja" width="300" /> */}
            </figure>
          </div>
          {/* <p>{slug}</p> */}
          <p>Cały wpis: <Link to={`blog/${slug}`}>{frontmatter.title}</Link></p>

        </section>
      ))}

      <div className="remote">
        <p>Na stronie jest do 10 wpisów bloga</p>
        <ul>
          <li>poprzednie wpisy: <Link to="/festung-breslau/1">[_1_]</Link> | <Link to="/festung-breslau/2">[_2_]</Link> | <Link to="/festung-breslau/3">[_3_]</Link> | <Link to="/festung-breslau/4">[_4_]</Link> | <Link to="/festung-breslau/5">[_5_]</Link> | <Link to="/festung-breslau/6">[_6_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/7">[_7_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/8">[_8_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/9">[_9_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/10">[_10_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/11">[_11_]</Link></li>
          <li><Link to="/festung-breslau/posts">Archiwum wpisów</Link></li>
        </ul>
      </div>
    </LayoutFB>)
}

// AllArticles($currentDate: Date!)
// SITE_INDEX_QUERY
// , date: { lte: $currentDate }

// query BlogPostQuery($slug: String!) {
//   allGhostPost(filter: { slug: { eq: $slug } })
// filter: {  frontmatter: { published: { eq: true }, date: { lte: $currentDate } }}
// sort: { fields: [frontmatter___date], order: DESC }
// DATA VALUES IN NODE.JS 2021-01-29 2021-02-09T00:00:00.000Z
// DATA VALUES IN NODE.JS 2021-01-29 2021-02-09

export default FBIndexPage

export const query = graphql`
query AllArticles($skip: Int!=0 ) {
  allMdx(
    filter: { fileAbsolutePath: { glob: "**/src/pages/festung-breslau/posts/*.mdx" }, frontmatter: {published:{ eq: true} } }
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 10
    skip: $skip   
  ) {
        nodes {
            id
            excerpt(pruneLength: 750)
            frontmatter {
              title
              date(formatString:"YYYY-MM-DD")
              relativeDate:  date(fromNow: true locale: "de-DE")
              published
              date1945
              img {
                childImageSharp {
                  gatsbyImageData(
                    width: 400
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            fields {
              currentDate(formatString:"YYYY-MM-DD")
              slug
            }
            slug
            }
          pageInfo {
            currentPage
          }
    }
  }
`;
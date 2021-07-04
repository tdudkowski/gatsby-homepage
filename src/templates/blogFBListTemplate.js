import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import LayoutFB from "../components/layout-fb"
// import SEO from "react-seo-component";
// import { useSiteMetadata } from "../hooks/useSiteMetadata";

const BlogFBList = ({ data }) => {

  // const image = getImage(data.frontmatter.img)

  return (
    <LayoutFB sub="post">
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <section key={id} className="posts post">
          <h4>{frontmatter.date1945}</h4>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.date} - {frontmatter.relativeDate}</p>
          <div className="contentStream">
            <p>{excerpt}</p>
            <figure className="figure imgThumbnail">
              <GatsbyImage image={getImage(frontmatter.img)} alt="ilustracja" />
            </figure>
          </div>
          <p>Cały wpis: <Link to={`/festung-breslau/blog/${slug}`}>{frontmatter.title}</Link></p>
        </section>
      ))}
      <div className="remote">
        <p>Na stronie jest do 10 wpisów bloga - od najnowszych:</p>

        <ul>
          <li><Link to="/festung-breslau">pierwsza strona [_0_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/1">[_1_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/2">[_2_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/3">[_3_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/4">[_4_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/5">[_5_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/6">[_6_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/7">[_7_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/8">[_8_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/9">[_9_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/10">[_10_]</Link> | <Link activeClassName="menuLinkActive" to="/festung-breslau/11">[_11_]</Link></li>
          <li><Link to="/festung-breslau/posts">Archiwum wpisów</Link></li>
        </ul>
      </div>
    </LayoutFB>
  );
};

export default BlogFBList

export const query = graphql`
query AllListsArticles($skip: Int!=0) {
  allMdx(
    filter: { fileAbsolutePath: { glob: "**/src/pages/festung-breslau/posts/*.mdx" }}
    sort: { fields: [frontmatter___date], order: DESC }
    limit: 10
    skip: $skip
  ) {
        nodes {
            id
            excerpt(pruneLength: 750)
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              relativeDate:  date(fromNow: true locale: "de-DE")
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
              currentDate
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


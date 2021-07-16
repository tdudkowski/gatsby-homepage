import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./navigation"
import Footer from "./footer"
import ToC from "./toc"
import "./layout-fb.css"
import "./layout.css"
import { Helmet } from "react-helmet";
import SEO from "../components/seo";

const StyledHeader = styled.header`
    background-color: rgba(51,51,51,.9);
    & a > h2 {margin:0; font-size:3.5rem; text-align:center; overflow:hidden; font-family:Alegreya, sans-serif; color: rgba(250,250,250,.6);}
  `;

const StyledMain = styled.main`
display:flex;
flex-direction: column;
  article {padding:.5rem;}
  blockquote {color: #443; font-style: oblique; position:relative;}
  blockquote::before {position: absolute;
    content: '"';
    /* content: open-quote; */
    //color: rgba(255, 238, 204, .5);
    color: rgba(55, 38, 4, .8);
    left: -2rem;
    top:-1rem;
    font-size: 5rem;
    width:50px;}
  & article {background: url(${props => props.background}) no-repeat top center; background-size:200px;}
  & article h2 { font-family:Alegreya, sans-serif; font-size:2.5rem; color:#333;}
  & article h3 { font-family:Alegreya, sans-serif; border-bottom:1px solid #ddc; margin: 2rem 0; font-size:2rem; color:#444;}
  & p > code, & li > code {border:1px solid rgba(200,200,200, .4); padding:2px 4px; white-space: nowrap;}
  @media (min-width:900px) {
    flex-direction: row-reverse;
    aside {flex-basis: 22rem}
    aside > section {padding: .5rem; }
    aside .tagsDiv {padding:.5rem; margin:1rem 0; background-color: #ffd;}
    aside .tagsDiv ul {list-style-type:none; display:flex; padding-left:0;}
    aside .tagsDiv ul a {display:block; margin: 0 1rem; padding:.5rem;}
    article {flex:1; padding:1rem;}
}
`;

const LayoutBlog = ({ children, data, path }) => {

    let tagsArray
    if (data !== undefined) {
        const { frontmatter, id, body, slug } = data.mdx
        tagsArray = [...frontmatter.tags.split(",")]
    }
    const headerTitle = `blog - strona główna`

    return (
        <div className="container">
            <SEO title={headerTitle} defer={false} />

            <StyledHeader>
                <Navigation />
                <Link to="/blog"><h2>Blog</h2></Link>
            </StyledHeader>
            <StyledMain background={data ? data.mdx.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src : null}>
                <aside>
                    {path === "/blog/" || path === "/blog" ? null : <section>
                        <h3>Menub</h3>
                        <Link to="/blog">powrót na stronę główną bloga</Link>
                    </section>}
                    {data === undefined ? null :
                        <>
                            <section>
                                <div className="tagsDiv">
                                    <h4>Tagi:</h4>
                                    <ul>{tagsArray.map(tag => <li key={tag}><Link to={`/blog/tag/${tag.trim()}`}>{tag.trim()}</Link></li>)}</ul>
                                </div>

                            </section>
                            <ToC />
                        </>
                    }
                </aside>
                <article className="content-container">
                    {children}
                </article>
            </StyledMain>
            <Footer />
        </div>)
}

export default LayoutBlog
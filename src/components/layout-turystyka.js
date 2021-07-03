import * as React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./navigation"
import Footer from "./footer"
import MenuTurystyka from "./menu-turystyka"
import ToC from "./toc"
import "./layout.css"

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
@media (min-width:900px) {
    flex-direction: row;
    aside {flex-basis: 22rem}
    article {flex:1; padding:1rem;}
}
`;

const Layout = ({ children, section, subsection }) => {
console.log("Z LAYOUTU " + subsection)
    return (
        <>
            <header>
                <Navigation />
            </header>
            <StyledMain>
                <aside>
                    <MenuTurystyka subsection={subsection} />
                    <ToC />
                </aside>
                <article className="content-container">
                    {children}
                </article>
            </StyledMain>
            <Footer />
        </>)
}

export default Layout
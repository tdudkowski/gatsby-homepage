import * as React from "react"
import styled from "styled-components"
import Navigation from "./navigation"
import Footer from "./footer"
import MenuIT from "./menu-it"
import ToC from "./toc"
import "./layout.css"

const StyledMain = styled.main`
display:flex;
flex-direction: column;
  article {padding:.5rem;}
  blockquote {color: #443; font-style: oblique; position:relative;}
  blockquote::before {position: absolute;
    content: '"';
    color: rgba(55, 38, 4, .5);
    left: -2rem;
    top:-1rem;
    font-size: 5rem;
    width:50px;}
  @media (min-width:900px) {
    flex-direction: row;
    aside {flex-basis: 20rem}
    article {flex:1; padding:1rem; max-width:calc(100vw - 20rem);}
    @media (min-width:1300px) {
      article {flex:1; padding:1rem; max-width:calc(1300px - 20rem);}
    }
        //article > pre {max-width: 100%; }
}
`;

const Layout = ({ children, section, subsection }) => {

  return (
    <>
      <header>
        <Navigation />
      </header>
      <StyledMain>
        <aside>
          <MenuIT subsection={subsection} />
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
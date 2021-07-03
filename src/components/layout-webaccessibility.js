import * as React from "react"
import styled from "styled-components"
import Navigation from "./navigation"
import Footer from "./footer"
import MenuIT from "./menu-it"
import ToC from "./toc"
import "./layout.css"

const StyledWrapper = styled.div`
& a {color: #332}
& a:hover {text-decoration:underline;}
& ul {list-style-type:circle;}

& a.active, & .currentInnerAnchor a, .dark & .currentInnerAnchor a {
color: #ddc;
background-color: #331;
}
`;

const StyledHeader = styled.header`
background-color:transparent;
display:flex;
flex-wrap:wrap;
background-color:#ddc;
border-bottom:2px solid #997;

body.dark & {background-color:#ddc;}
h2 {color:#443;}

& h2 a, .dark & h2 a {background-color:transparent;  color:#331;}
& h2 a:hover, body.dark & h2 a:hover {background-color:transparent; }

& ul {display:flex; flex-direction:row; background-color: rgba(51,51,51,.2); list-style-type:none; padding-left:0;}
& ul li {display:inline-block;}
& ul li a, body.dark & ul li a {display:block; width:fit-content; background-color:transparent; color: #332;  margin:2px; padding: 3px .3rem; font-size:1rem;}
& ul li a:hover, body.dark & ul li a:hover { color:#330; text-decoration:underline; background-color: rgba(51,51,51,.2);}

@media (min-width: 850px) {
flex-direction:row;
flex-wrap:nowrap;
justify-items: space-between;

    /* & h2 {display:inline-block;} */
    & ul {flex-direction:row; margin-left:auto; }
    & ul li a {font-size:1.2rem; line-height:1.2rem; padding: 5px 1rem;}

& h2::before {}
}
`;

const StyledMain = styled.main`
display:flex;
flex-direction: column;
  flex: 1;
  & aside a, .dark & aside a {background-color: #ffe; color:#332;}
  & aside a:hover, .dark & aside a:hover, .dark & aside ul.automenu a:hover {background-color: #eed; color:#552; text-decoration:underline;}
  & aside nav.menu-it ul {display:flex; flex-direction:row; flex-wrap:wrap; list-style-type:none; padding-left:0;}
  & aside ul {  }
  & aside nav.menu-it ul li a {margin: 0 .3rem; padding:5px 1rem;}

  & aside h4, html body.dark & aside h4 {background-color: #ddc; color:#332; border-radius:0;}
  article {padding:.5rem;}
  blockquote {color: #443; font-style: oblique; position:relative;}
  blockquote::before {position: absolute;
    content: '"';
    color: rgba(55, 38, 4, .5);
    left: -2rem;
    top:-1rem;
    font-size: 5rem;
    width:50px;}
  @media (min-width:800px) {
    flex-direction: row;
    aside {flex-basis: 22rem}
    article {flex:1; padding:1rem; max-width:calc(1300px - 20rem);}
    //article > pre {max-width: 100%; }
}
  @media (min-width: 850px) {
    flex-direction:row;
    & aside {  width:12rem;  max-width:12rem;}
    & aside nav.menu-it ul {flex-direction:column; s}
    & article {  flex: 1; border-left:2px dotted #997;}

    & aside nav ul {flex-direction:column; }

  }

  @media (min-width: 1000px) {
    flex-direction:row;
    flex-wrap:nowrap;
  }
`;

const StyledArticle = styled.article`
display:flex;
flex-direction:column;
padding: 0 1rem;
word-wrap: break-word;

& h2, & h3, & h4, & ul, & ol, & p, .dark & h2, .dark & h3, .dark & h4, .dark & ul, .dark & ol, .dark & p, .dark & strong {color:#443;}

& a,.dark & a {color: #00f;}

& a:hover, .dark & a:hover {color:#441; text-decoration:underline; background-color: #ffc;}

& h3 {border-bottom:1px solid #998;}
& h2, & h3, & h4 { margin: .4rem;}

& p a:hover, & ul a:hover { }

@media (max-width:850px) {
& pre {max-width:calc(850px - 8rem);}
& ol pre {max-width:calc(850px - 12rem);}
}

@media (min-width:850px)  {
& pre {max-width:calc(850px - 17rem); margin:1rem 0; }
& ol pre {max-width:calc(850px - 21rem);}
}

@media (min-width: 1000px)  {
& pre {max-width:calc(1000px - 20rem);}
& ol pre {max-width:calc(1000px - 24rem);}
}

@media (min-width: 1100px){
& pre {max-width:calc(1100px - 20rem);}
& ol pre {max-width:calc(1100px - 24rem);}
}
@media (min-width: 1200px){
& pre {max-width:calc(1200px - 20rem);}
& ol pre {max-width:calc(1200px - 24rem);}
}
`;

const StyledFooter = styled.footer`

& p { color:#332;}

& ul {  display:flex;flex-direction: row; flex-wrap:wrap; }

& ul {list-style-type: none;
display: flex;
flex-direction:row;
flex-wrap:wrap;
margin: 0;
}

& ul li {
flex: 1;
}

& ul a, .dark & ul a  {
display: block;
padding: 0 1rem;
text-decoration: none;
background-color:rgba(51,51,10,.1);
border-radius:5px;
color:#554;
max-width:9rem;
text-align: center;
margin:5px;
margin-bottom:1rem;
/* height:2rem; */
}

& ul a:hover, .dark & ul a:hover {
text-decoration: underline;
background-color:rgba(51,51,10,.2);
color: #440;
}

@media (min-width:800px) {
flex-direction: row;

}
}
`;

const Layout = ({ children, section, subsection }) => {

    return (
        <>
            <StyledHeader>
                <Navigation />
            </StyledHeader>
            <StyledMain>
                <aside>
                    <MenuIT subsection={subsection} />
                    <ToC />
                </aside>
                <StyledArticle className="content-container">
                    {children}
                </StyledArticle>
            </StyledMain>
            <Footer />
        </>)
}

export default Layout
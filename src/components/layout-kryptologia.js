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
& ul {list-style-type:circle; }

& a.active, & .currentInnerAnchor a, .dark & a.active, .dark & .currentInnerAnchor a  {
color: #551;
background-color: #ddc;
}
`;

const StyledHeader = styled.header`
background-color: #ffe;
nav {
display:flex;
flex-direction:column;
justify-items:stretch;}

& div {win-width:20rem; border:1px solid #443; margin:2px; padding:2px; background-color: #ffe;}
& div a, .dark & div a {padding:.3rem 3px; margin:2px; background-color: #eed; color:#554;}
& div a:hover, body.dark & div a:hover {background-color: #ddc; color:#442; }
@media(min-width:900px) {
  nav {flex-direction: row}
}  
`;

const StyledMain = styled.main`
flex: 1;
display:flex;
flex-direction: column;
font-family: Georgia, 'Times New Roman', Times, serif;

  & aside a {display:block; box-shadow:2px 2px 2px #ddc; text-shadow:0 0 0 #ddc; margin:3px 0; background-color: #ffe;  color: #221; font-weight:bold; padding: 3px 0 2px 2rem; border:3px solid #443; border-radius:25px; text-decoration:none;}
  & aside a:hover {box-shadow:2px 2px 6px #aa9; text-shadow:2px 2px 6px #ddc; background-color: #fff; border:3px solid #110; text-decoration:underline;}

  & aside section ul { list-style-type:none;  }
    & ul.automenu li a {font-weight:normal; text-align:left;}

  & section.sectionAutomenu ul li a {border:none; border-radius:0;}
  & section.sectionAutomenu ul li a:hover {border:none; text-shadow:none; background-color: #eed;}

  body.dark & aside section.toc h4.toctitle {background-color: #fff; }
  .active, & aside .currentInnerAnchor a {background-color: #ddc;}
  @media (min-width: 900px) {
    flex-direction: row;
    aside {flex-basis: 22rem}
    //& article {  flex: 1; }
   & aside nav ul {flex-direction:column; }
  }

  @media (min-width: 1000px) {
    flex-direction:row;
    flex-wrap:nowrap;
  }

`;

const StyledArticle = styled.article`
padding: 0 1rem;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
word-wrap: break-word;
  flex:1;
  
  blockquote {color: #443; font-style: oblique; position:relative;}
  blockquote::before {position: absolute;
    content: '"';
    color: rgba(55, 38, 4, .5);
    left: -2rem;
    top:-1rem;
    font-size: 5rem;
    width:50px;}

& p, & h2, & h4, & h3, h5, & li, & dl { color:#443; }
.dark & a, & a  {color: #00f;}
.dark & a:hover, & a :hover {text-decoration:underline; color:#33d; }

& h5 {margin:.5rem 0; font-size:1rem; color:#661; }
  @media(min-width:900px)
  {max-width:calc(100vw - 23rem); }
@media(min-width:1300px) {
   max-width:calc(1300px - 23rem); 
}
`;

const StyledFooter = styled.footer`
display:flex;
flex-direction:column;

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
import * as React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Navigation from "./navigation"
import Footer from "./footer"
import MenuIT from "./menu-it"
import ToC from "./toc"
import "./layout.css"

const StyledWrapper = styled.div`

@media (min-width:850px) {
border:10px solid #665;
border-radius:30px 30px 0 0;
margin-top:5px;
}
`;

const StyledHeader = styled.header`
background-color: #eed;
display:flex;
& h2 a  {font-size:4rem; font-weight:bold; padding:0; color:#554; line-height:2.6rem; text-shadow: 1px 1px 5px #ff0; display:block; text-decoration:none;}
& h2 a:hover {background-color:rgba(250,250,12,.3) ;color:#551; text-decoration:underline;  text-shadow: 1px 1px 4px #f00;}

& div > a, html body.dark & div > a {background-color: transparent; color:#665; padding: 0 4px; line-height:1rem;}
& div > a:hover, html body.dark & div > a:hover {background-color: transparent; color:#661;}

@media (min-width:850px) {
flex-direction:row;
& h2 { margin:0; padding:0 3rem; height:2.6rem; }
& div {border-bottom: 3px solid #998; height:1.6rem;}
& div > a, .dark & div > a { padding: 0 1rem;; line-height:1.6rem;}
border-bottom:10px solid #665;
border-radius:20px 20px 0 0;
  nav {
    flex-direction: row;
    justify-content: space-between;
  }
}
`;

const StyledMain = styled.main`
display:flex;
flex-direction: column;
  flex: 1;
  background-color: #FFE;

  h2, h3, h4, ul {color:#556}
  & h3 {margin:0;}
  & aside h3 a {margin: 1rem 1rem .2rem 0; text-align:right; padding-right:3rem;}
  & aside ul {padding-left:0; margin:0 1rem 1rem 1rem;}
  & aside a {display:block; background-color: #887; color:#dda; padding:.3rem; margin:2px 0; text-decoration:none;}
  & aside a:hover {text-decoration: underline;}
  
  & a {color: #332}
  & a:hover {text-decoration:underline;}
  & ul {list-style-type:circle;}

  & a.active, & .currentInnerAnchor a, .dark & a.active, .dark & .currentInnerAnchor a  {
    color: #ccd;
    background-color: #665;
  }
  
  & .toc h4, .dark & .toc h4 {background-color: rgba(51,51,51, .4); color:#665; border-radius:0; margin-right:1rem;}
  & .toc ul {margin-left:0; list-style-type:none;}
  
  @media (min-width: 850px) {
    flex-direction:row;
    & aside { flex-basis:18rem; }
    article {
      flex: 1;
      padding: 1rem;
      max-width: calc(100vw - 20rem);
    }
     }
  @media (min-width:1300px) {
      article {max-width:calc(1300px - 20rem);}
    }   
`;

const StyledArticle = styled.article`
display:flex;
flex-direction:column;
padding: 0 1rem;
word-wrap: break-word;
  blockquote {color: #443; font-style: oblique; position:relative;}
  blockquote::before {position: absolute;
    content: '"';
    color: rgba(55, 38, 4, .5);
    left: -2rem;
    top:-1rem;
    font-size: 5rem;
    width:50px;}

& p, ul, ol {color:#332;}
& a, .dark & a {color:#00f;}
h3 {margin-top:2rem;}

`;

const StyledFooter = styled.footer`
background-color: #eed;
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

const StyledUl = styled.ul`
display:flex;
flex-wrap:wrap;
article & {list-style-type:none;}
padding-left:0;

& a {list-style-type:none;}

& li {margin:1rem; flex:1;}

& a {display:block; width: 5rem; padding:1rem 2rem; text-align:center; border:3px solid rgba(51,51,51,.4); text-decoration:none; font-weight:bold;}
article & a:hover { border:3px solid rgba(51,51,51,.7); color: #331; background-color:rgba(251,251,51,.6); text-decoration:underline;}
`;

const Layout = ({ children, section, subsection }) => {

    return (
        <StyledWrapper>
           <StyledHeader>
               <h2><Link to="/it/cms">CMS</Link></h2>
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
        </StyledWrapper>)
}

export default Layout
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

& a.active, & .currentInnerAnchor a  {
color: #cda92c;
background-color: #34343a;
}
`;

const StyledHeader = styled.header`
background-color: #ccb;

& h2 a, .dark & h2 a {background-color:transparent; color:#6d392c; }

& h2 {color:#665; font-size:1.2rem;}

@media (min-width: 850px) {

flex-basis: 6rem;
margin: 0 2rem 0 15rem;

& h2 { padding: 0 0 1rem 2rem;
position: relative;
font-size: 2rem;z-index:20;}

& h2::before {
position: absolute;
content: "";
top: 0;
left: -1rem;
width: calc(100% + 2rem);
height: 2.5rem;
border: 1px solid #000;
z-index: 10;}
}
`;

const StyledMain = styled.main`
  flex: 1;
  display: flex;
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

  & aside ul {list-style-type: none;
    padding-left: 2rem;
    margin-top: 0;
    background-color: #ddc;
  }
  & aside ul li {display:block; width:100%;}

  & aside h3 {
    margin-bottom:0;
    background-color:#ff0;
    font-size:1.3rem;
    text-align:right;
    padding:5px 2rem;
  }

  & aside h4 {
    border-width:0;
    border-radius:0;
    background-color:transparent;
  }

  & aside nav ul {display:flex; flex-wrap:wrap; padding-left:0; margin-bottom:0;}

  & aside nav ul li {flex:1; }

  & aside nav ul li a {text-align:center; }

  & aside nav h3 a {padding:3px; background-color: transparent; color:#332;}

  & aside nav h4 { color:#332; margin-top:0;}

  & aside nav ul li a {display: block;
    text-decoration: none;
    background-color:transparent;
    color:rgb(85,26,239);
    background-color:#ddc;
  }

  & aside ul li a:hover {text-decoration: underline;
    background-color: #ccb;
    color: #332;}
  /* d2b384 */

  & .toc h4.toctitle {background-color:#ff8;}

  & .toc a {
    display: block;
    padding: 2px;
    margin:3px 0;
  }

  & .toc a:hover {color:#cda92c ;}

  & .toc ul {
    list-style-type: circle;
    padding-left: 0;
  }

  & .toc ul li {
    display:list-item;
  }
  
  @media (min-width:800px) {
    flex-direction: row;
    aside {flex-basis: 22rem}
    article {flex:1; padding:1rem; max-width:calc(1300px - 20rem);}
    //article > pre {max-width: 100%; }
}

  @media (min-width: 850px) {
    flex-direction:row;
    align-items:stretch;

    & aside {flex-basis: 15rem;
      margin-top: -6rem;
      position: sticky;
      align-self: flex-start;
      top: -12rem;;
    }

    & article {  flex: 1;
      border-left: 3px dashed #ccb;
      padding-left: 1.5rem;}

    & aside nav {   box-shadow: 0 0 4px 2px rgba(51, 51, 51, 0.3);
      margin-right: 2rem;
      border-radius: 3%;}

    & aside nav ul {flex-direction:column; }

    & aside h3 {
      font-size: 1.3rem;
      text-align: right;
      padding: 5px 2rem;
      /* margin: 0 0 1rem 0; */
      background-color: yellow;
      color:#443;
      border: 1px solid rgba(51, 51, 51, 0.6);
      border-width: 1px 1px 0 1px;
      margin-bottom: 0;
    }

    & aside h4 {  background-color: yellow;
      color:#332;
      border: 1px dashed #665;
      width: 70%;
      margin: 0 0 0 -10%;
      padding: 2px 0.5rem;
      text-align: right;
      transform: rotate(-0.06rad) skew(-0.312rad);
      z-index: 100;
      box-shadow: -2px 2px 4px #bba;}

    & aside ul {      padding-left: 0;
      list-style-type: none;
      margin: 0 0 1rem 0;
      z-index: -10;
    }

    & aside ul li {
      border: 1px solid rgba(251, 251, 21, 0.9);
      border-width: 0 1px;
      display:block; width:100%;
    }

    & aside a {
      display: block;
      text-decoration: none;
      font-weight: bold;
      padding: 3px 2rem;
      height: 1.4rem;
      line-height: 1.4rem;
      margin: 0;
      border: 2px dotted transparent;
      position: relative;
    }

    & aside .active {
      background-color: #bba;
      border: 2px dotted #332;
      /* width: 110%; */
      /* margin-left: -7%; */
      /* padding-left: calc(10% + 2rem); */
      color:#661;
    }

    & aside .active::after {
      position: absolute;
      content: "";
      top: 0;
      left: 100%;
      width: 0;
      height: 0;
      border-width: 0;
      border-style: solid;
      border-width: 14px 0 14px 28px;
      border-color: transparent transparent transparent #bba;
    }

    & .toc {
      flex-basis:10rem;
      /* position: sticky;
      align-self: flex-start;
      bottom:0;
      min-width: 10rem; */
    }
  }

  @media (min-width: 1000px) {
    flex-direction:row;
    flex-wrap:nowrap;
  }

  @media (min-width:1200px) {
  }  
`;

const StyledArticle = styled.article`
display:flex;
flex-direction:column;
padding: 0 1rem;
position: relative;
word-wrap: break-word;

& h2 {color:#441;}
& ol.breadcrumb__list { background-color:rgba(250,250,51,.2); color:#665; max-width:80%; }
& ol.breadcrumb__list a {color:#332; padding:10px 3px;}

& p, & h4, & li, & dl {color:#332}
& p a, & ul a {color:#00f;}
& p a:hover, & ul a:hover {color:#009;text-decoration:underline;}

/* &  pre {  overflow-x: auto;  } */
/* & pre code {    display: block;   } */

@media (max-width:1000px) {
& > pre.language-css {
/*
margin:1rem 0; */
max-width:550px !important;
}
}

@media (min-width: 800px) {
/* & .content-container pre {max-width:800px;} */
}
`;

const StyledFooter = styled.footer`
min-height: 2rem;
display: flex;
flex-direction: column;

& a { color: #442;}

& p {margin: 0;
padding: 0.5rem 1rem;
color:#443}

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
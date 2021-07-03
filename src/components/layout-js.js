import * as React from "react"
import styled, {createGlobalStyle} from "styled-components"
import Navigation from "./navigation"
import Footer from "./footer"
import MenuIT from "./menu-it"
import ToC from "./toc"
import "./layout.css"

const StyledHeader = styled.header`
flex-basis: 5rem;
background-color: #000;
nav {background-color: #000;}
color: #fff;
& h2 {padding: 1rem 0 1rem 4rem;
    margin: 0;}
& nav a, .dark & > h2 > a {background-color:transparent; color:#cda92c}
& nav a:hover, .dark & > h2 > a:hover {background-color:transparent; color:#ddda2c}
`;

const StyledMain = styled.main`
display:flex;
flex-direction: column;
  article {padding:.5rem; max-width:100%;}
  blockquote {color: #443; font-style: oblique; position:relative;}
  blockquote::before {position: absolute;
    content: '"';
    color: rgba(55, 38, 4, .5);
    left: -2rem;
    top:-1rem;
    font-size: 5rem;
    width:50px;}
  section.sectionAutomenu {display:none;}
  pre {max-width:100%;}

  flex: 1;
  border-left: 10px solid #333;
  background-color: #202021;
  position: relative;

  & aside { color: #cdcdcd; position: relative;}
  & aside ul {list-style-type: none;
       padding-left: 0;
       margin-top: 0;}
  & aside h4 {
       margin: 0;
       color:#cdcdcd;
       background-color: #333;
       padding: 4px 1.5rem;
       line-height: 1.2rem;
       border-top: 3px solid #454545;
       border-bottom: 3px solid #0d0d0d;
         }
  & aside h3 {padding: 1rem;
    margin: 0;
    background-color: #202021;}
   & aside a, .dark & aside a {display: block;
       text-decoration: none;
       padding: 5px 1rem;
       margin-left: 1.5rem;
   background-color:transparent;
   color:#cdcdcd;
   }
   & aside a:hover {text-decoration: underline;
       color: #d2b384; background-color:transparent;}

  & a.active, & .currentInnerAnchor a, .dark & .currentInnerAnchor a {
    color: #cda92c;
    background-color: #34343a;
  }
  
   @media (min-width: 700px) {
       ::before {
         position: absolute;
         content: "";
         top: 0;
         height: 100%;
         left: calc(1.5rem - 1px);
         border-left: 1px solid #575757;
   }
     
  @media (min-width:900px) {
    flex-direction: row;
    flex-wrap:nowrap;
    aside {flex-basis: 16rem;}
    article {flex:1; padding:1rem; max-width:calc(100vw - 22rem); display:flex;}
    section.articleContent {max-width:calc(100vw - 24rem);}
       //article > pre {max-width: 100%; }

 border-left: 1rem solid #333;
       
& aside {flex-basis:11rem;
         position: sticky;
         top: -4.5rem;
         //align-self: flex-start;
         align-self: start;
       }
       & aside h4 {height: 1.5rem;
         font-size: 1.2rem;
         line-height: 1.2rem;
         text-align:right;
         margin-right:0;
         padding: 4px .5rem;}
       & aside li {display:block;
         //width:100%;
       }
     }
     @media (min-width:1300px) {
       border-left: 3rem solid #333;
     }
`;

const StyledArticle = styled.article`
display:flex;
flex-direction:column;
background-color: #181818;
color: #d5d5d5;
word-wrap: break-word;

& a {color:#c48a71 ; line-height:1.3rem;}

& .content-container {
    padding: 0 1rem;
    position: relative;
}

& .content-container > h3 {color: #828282; }
& .content-container > h4 {color: #ca8e74; }
& .content-container pre {  overflow-x: auto;  }
& .content-container pre code { display: block; }

& section.sectionAutomenu h4, .dark & section.sectionAutomenu h4 { background-color: #333;
    color: #ddd;
    margin: 0;
    border-radius: 3px 3px 0 0;
    padding: 0.5rem;}

& section.sectionAutomenu a {
    display: block;
    padding: 2px;
    /* color: rgb(80,80,80); */
    color: #999;
    margin:3px 0;
  }
& section.sectionAutomenu a:hover, .dark & section.sectionAutomenu a:hover {color:#cda92c ; background-color:transparent;}

& section.sectionAutomenu ul {

    list-style-type: circle;
    padding-left: 2rem;
    /* margin-left: 2rem; */
}
& section.sectionAutomenu ul li {
 display:list-item;
}

@media (min-width: 900px) {
   flex-direction:row;
   flex:1;
   & section.sectionAutomenu {
      //flex-basis:10rem;
      position: sticky;
      top: 10px;
      align-self: flex-start;
      min-width: 10rem;
      border: 1px solid #090909;
      box-sizing: border-box;
      border-radius: 3px;
      margin: 1rem;
    }
   & .content-container {flex:1; }
   & .content-container pre {max-width:calc(900px - 20rem);}
}

@media (min-width: 1024px) {
    & .content-container > h2 {
      position: sticky;
      top: 0;
      display: block;
      /* align-self: flex-start; */
      background-color: #181818;
      margin: 1rem 0 2rem 0;
      padding-bottom: 1rem;
      z-index: 10;
    }
    & .content-container > h2::after {
      display: block;
      position: absolute;
      content: "";
      top: 100%;
      width: 100%;
      height: 30px;
      background-color: rgba(25, 25, 25, 0.3);
    }
    & .content-container pre {max-width:calc(1000px - 30rem);}
  section.articleContent {flex:1; max-width:calc(100vw - 28rem);}
  section.sectionAutomenu {display:block; flex-basis: 8rem; position:sticky; top:0; align-self: flex-start}
  section.sectionAutomenu hr {display:none;}
}
  
@media (min-width: 1100px) {
    & .content-container pre {max-width:calc(1100px - 30rem);}
    }

@media (min-width:1300px) {

    article {flex:1; padding:1rem; max-width:calc(1300px - 20rem);}
    section.articleContent {flex:1; max-width:calc(1300px - 28rem);}
  }  
`;

const StyledFooter = styled.footer`
    min-height: 2rem;
    display: flex;
    flex-direction: column;
    background-color: #007acd;
    color: #f8fbfe;

& a { color: #f8fbfe;}

& p {margin: 0;
    padding: 0.5rem 1rem;}

& ul {list-style-type: none; }

& ul a, .dark & ul a {
    display: block;
    padding: 0 1rem;
    text-decoration: none;
    background-color:transparent;
    /* height:2rem; */
  }
& ul a:hover, .dark & ul a:hover {
    text-decoration: underline;
    background-color:transparent;
    color: #f8fbfe;
  }
@media (min-width:800px) {
    flex-direction: row;

    & section:nth-of-type(2) {
      flex: 1;
      border-left: 1px solid #f8fbfe;
    }

    & ul {
      display: flex;
      flex-wrap:wrap;
      margin: 0;
    }
    & ul li {
      flex: 1;
      text-align: center;
    }
}
`;

const ToTop = styled.div`
@media (max-width:900px) {display:none;}
width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* z-index: -100; */
& div {width: 9.5rem;
    height: 3rem;
    background-color: #2d2d30;
    box-shadow: 0 0 4px #141414;
    position: absolute;
    bottom: 2.5rem;
    right: 0.5rem;
    z-index: 100;
    text-align: right;
    /* margin-top: -10rem; */}
& button { background-color: #0e639c;
    color: #fff;
    padding: 0.6rem;
    border: none;
    margin: 0.5rem;}
& button:focus {outline: 0;outline: none;
  border: none;}
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

                </aside>
                <StyledArticle className="content-container">
                    <section className="articleContent">
                        {children}
                    </section>
                    <ToC />
                </StyledArticle>
            </StyledMain>
            <Footer />
            <ToTop>
                <div><a href="#top"><button type="button">Na górę strony</button></a></div>
            </ToTop>
        </>)
}

export default Layout
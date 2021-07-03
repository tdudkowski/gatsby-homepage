import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";
import { Helmet } from 'react-helmet'
// import { MDXRenderer } from "gatsby-plugin-mdx"
import "./layout-fb.css"
// import 'gatsby-remark-vscode/styles.css'
import background from "../pages/festung-breslau/img/header-blur.jpg"

// bgcolor rgb(68, 21, 0) #441500
// txt color rgb(255, 238, 204) #fec
// link color rgb(255, 136, 102) #f86
// link hover rgb(255, 204, 119) #fc7

const StyledContainer = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
 background: rgba(68, 21, 0, .9) url(${background}) no-repeat;
  background-size: 100% auto;
    /* background-image: url(${background}); */
  display: flex;
  flex-direction: column;
  a {text-decoration: none; padding:.4rem;}
  a:hover {text-decoration: underline;}
  p, ul {margin:.5rem;}
  ul {padding-left:0;}
.dark & {background-color: rgba(68, 21, 0, .4) ;}
& a {     color: #ff8866; background-color:transparent;}
& a:hover {     color: rgb(255, 204, 119); background-color:transparent;}
`;

const StyledHeader = styled.header`
display:flex;
flex-direction:column;

& .headerNavbar {list-style-type:none; display:flex; padding-left:0; margin:0; background-color: rgba(250, 250, 250, .3); flex-direction:column;}
& .headerNavbar li {flex:auto;}
.dark & .headerNavbar li a, & .headerNavbar li a {display:block; padding:.5rem 1rem; font-weight:bold; color:#4d5d53; text-decoration:none;  background-color: transparent; font-size:1.2rem;}
& .headerNavbar li a:hover {text-decoration:underline;}

.dark & h1, & h1 { padding: .5rem 3rem;
            margin: 1rem 0 0 0;
            text-align: center;
            font-size: 2.5rem;
            color: #4d5d53;
            font-family: 'UnifrakturMaguntia', cursive;
            background-color: rgba(250, 250, 250, .3);}
.dark & h1 a, & h1 a, .dark & h1 a:hover, & h1 a:hover {color: #4d5d53; background-color: transparent;}
& a.menuLinkActive {pointer-events: none;}
& h2 {font-size:1.6rem;  
    padding: 3px 1rem;
            max-width: 400px;
            margin: 10px auto;
            text-align: center;
            font-family: 'UnifrakturMaguntia', cursive;
            background-color: #222;
            border: 2px solid #ccc;
            color: #ccc;
            border-radius:0; }
@media (min-width:600px) {
& h2 {font-size:2rem;
    padding: 3px 1rem;
    border: 3px solid #ccc;}
}
@media (min-width:600px) {& .headerNavbar {flex-direction:row; width:33rem;}}
@media (min-width:900px) {
& h2 {padding: 3px 3rem;}
}
`;

const StyledMain = styled.main`
    flex: 1;
            display: flex;
            flex-direction: column;

.dark & a.menuLinkActive, & a.menuLinkActive {color:#ff0; pointer-events: none;}

& aside {    background-color: rgba(68, 21, 0, .9);
position:relative; color: rgba(255, 238, 204, .7);}

& aside h2 {background-color: #222; 
color:#ccc;
/* color:rgb(255, 238, 204); */
}

& aside h3 { 
    color:  rgb(255, 238, 204);
    margin:2px .5rem;
    padding:8px 2px;
}

& aside .about {display: inline-block;
            border: 3px solid #333;
            border-width: 3px 0;
            /* font-family: 'UnifrakturMaguntia', cursive; */
            font-family: 'Times New Roman', Times, serif;
            padding: 4px;
            margin: 0;
            margin-top: -.5rem;
            background-color: #ddd;
            color:  #222;
            box-shadow: 0 0 2px 4px rgba(250,250,250,.3)
            }

& aside ul {   padding-left: 0;
            list-style-type: none;
            margin: .5rem 1rem .5rem .5rem;}
.dark & aside a { color: #ff8866; background-color:transparent;}
.dark & a:hover,  & a:hover {     color: rgb(255, 204, 119); background-color:transparent;}

@media (min-width:900px) {
flex-direction: row;
    
& aside {
                max-width: 22rem;
                position:sticky;
                top:0;
            }
& article {flex:1}}

@media (min-width:1200px) {
    & aside { position:sticky;
                top:0;}
            }
`;

const StyledArticle = styled.article`
padding:.5rem 1rem 1rem 1rem;
  li {margin:.5rem;}
.dark & a {color:#f86;}

& p > span.gatsby-resp-image-wrapper {display:inline-block; position:relative; border: 3px solid #ddd; padding:2rem 1rem; background-color: #111;}
& span + em {display:inline-block; position:relative; border: 1px solid #ddd; width:100%; padding:1rem 0; padding-left:1rem; background-color: #555; margin-bottom:1rem;}

& em {font-style:italic; color: rgba(255, 238, 204, .7); }

& .post, & .article { max-width: 45rem;
            background-color: rgb(68, 21, 0);
            color: rgb(255, 238, 204);
            padding: 1rem;
            padding-top: 0;
            margin-top: 0;
            border-top: 2px solid gray;
        margin-bottom:2rem;}

& .post h3, & .article h3 { border-bottom: 1px solid rgba(255, 238, 204, .5);}

& .article h4, & .post h4 {color: rgba(250, 250, 250, .6); border-bottom: 1px solid rgba(255, 238, 204, .2); margin:0;}
& .article h5 {color: rgba(250, 250, 102, .5);}

& section.post-list > h4 {display:inline-block; 
border: 3px solid #333;
            border-width: 3px 0;
            /* font-family: 'UnifrakturMaguntia', cursive; */
           font-size:1rem;
            padding: 10px;
            margin-left:-1rem;
            margin-top: -1rem;
            background-color: #ddd;
            box-shadow: 0 0 2px 4px rgba(250,250,250,.3);
            }

& h2 {  margin: 0 .5rem;
  padding:.5rem 1rem;
            font-weight:500;
            font-style:italic;
            /* text-transform:uppercase;  */
            /* font-family: 'Times New Roman', Times, serif; */
            font-family: 'Alegreya', serif;
            background-color: rgba(250,250,250,.1);
            border-bottom: 2px solid #887;
            border-radius:0 0 0 0;
            }
& h3 { display: inline-block;
            padding: 5px 1rem;
            font-size: 1rem;
            margin: .5rem;
            margin-left: 0;
            background-color: rgba(250, 250, 250, .1);
            color: #999;
            position: relative;}

& h3::after { position: absolute;
            content: "";
            border-bottom: 1px solid rgba(250, 250, 250, .1);
            width: 50%;
            left: 0;
            top: 100%;}

& ul {  list-style-type: circle;}

& blockquote { position: relative;
            color: rgba(255, 238, 204, .7);
            font-style:italic;
        margin-left:1rem;}

& blockquote::before { position: absolute;
content: '"';
                       /* content: open-quote; */
                       color: rgba(255, 238, 204, .5);
            left: -1.5rem;
            top:-1rem;
            font-size: 5rem;
            width:40px;}

 & h3::after {
                width: 10rem;
            }
& .post-header {border:1px solid #eee;  border-width:2px 0; background-color: rgba(250, 250, 250, .3);            color:  #222; border-radius:0;  font-family: 'Times New Roman', Times, serif; text-transform:uppercase; font-weight:100;}
& .post-header div, & .posts h4 {display:inline-block; 
border: 3px solid #333;
            border-width: 3px 0;
            /* font-family: 'UnifrakturMaguntia', cursive; */
           font-size:1rem;
            padding: 10px;
            margin-left:-1rem;
            margin-top: -1rem;
            background-color: #ddd;
            box-shadow: 0 0 2px 4px rgba(250,250,250,.3);
            color: #333;
}

& div.contentStream {display:flex; flex-direction:column;}
& p.tags {margin-top:2rem; padding:.5rem; background-color:rgba(250, 250, 250, .1); border:1px solid #dde; border-width:1px 0;}

& .remote {border:1px solid rgba(200,200,200,.4); }
& .remote p, & .remote li {color:#bba; padding:.2rem .5rem;}
& .remote ul {list-style-type:circle;}
& .remote li {margin:10px;}
& .remote li:nth-of-type(1) a {border:1px solid rgba(200,200,200,.4); border-radius:5px; display:inline-block; padding:1px 5px; margin:.5rem 0;}
& .remote li:nth-of-type(1) a:hover {box-shadow: 2px 2px 4px rgba(251,251,51,.4);}

& .post-list { background-color: rgb(68, 21, 0); color: rgb(255, 238, 204);}
& .post-list p:nth-of-type(1) span {color:#333; background-color:rgb(255, 238, 204,.6); padding:.3rem;}
& .post-list a { background-color:rgb(255, 238, 204,.8); text-transform:uppercase; padding: .2rem 1rem; border:2px solid #ddc; border-width:2px 0; color:#332;}

table { width:100%; margin: 1rem 0;}
th {background-color: rgba(51,51,51,.6);}
table, th, td  {border: 1px solid rgba(250,250,250,.3); padding:5px; min-width:3rem;  border-collapse: collapse;}

@media (min-width:500px) {      
/* & blockquote {margin-top:1rem;} */
& div.contentStream { flex-direction:row;}
& div.contentStream > p {flex:1}
& div.contentStream > figure.imgThumbnail {display:block; flex-basis:150px; height:100%; margin:0; padding:0;}
& blockquote {margin-left:2rem;}
& blockquote::before {left:-2rem;}
                       }
@media (min-width: 1200px) {
                & .post, & .article {
                margin-left: 2rem;
            }
            & .post-list h4 {
                margin-left: -2.5rem;
            }
& h3::after {
                width: 40rem;
            }
        }

`;

const StyledFooter = styled.footer`
 background-color: #222;
            color: #ddd;
& a {padding:.5rem;}
.dark & a, .dark & a:hover {background-color:transparent;}
`;

const LayoutFB = ({ children, sub, data }) => {

    let menu

    switch (sub) {
        case 'post':
            menu = <nav><ul><li><Link to="/festung-breslau">Festung Breslau - strona główna</Link></li></ul></nav>
            break;
        case 'article':
            menu = <nav><ul><li><Link to="/festung-breslau">Festung Breslau - strona główna</Link></li></ul></nav>
            break;
        case 'subpage':
            menu = <nav><ul><li><Link to="/festung-breslau">Festung Breslau - strona główna</Link></li></ul></nav>
            break;
        default:
            menu = <nav><ul><li><Link to="/festung-breslau">Festung Breslau - strona główna</Link></li></ul></nav>
            console.log("sth another")
    }

    const menuArticlesArray = [{ slug: "panstwo-hitlerowskie", title: "Państwo hitlerowskie" }, { slug: "ostfront", title: "O przyczynie wojny na wschodzie" }, { slug: "stan-wojny", title: "Stan wojny na początku 1945" }, { slug: "armia-czerwona", title: "Armia Czerwona 1945" }, { slug: "drezno-bombardowanie", title: "Drezno bombardowanie 13-15 lutego 1945" }, { slug: "depesza-eisenhowera", title: "Depesza Eisenhowera (SCAF 252)" }, { slug: "wojna-na-pacyfiku", title: "Wojna na Pacyfiku 1945" }]

    // , {slug: "waffen-ss", title: "Waffen SS"}
    // , {slug: "wroclaw-zydzi", title: "Wrocławscy Żydzi 1933-45"}

    const menuArmeeArray = [{ slug: "front-niemiecki-1945", title: "Front niemiecki w Polsce w 1945" }, { slug: "armia-niemiecka", title: "Armia niemiecka 1918-45" }, { slug: "ss", title: "SS" }, { slug: "volkssturm", title: "Volkssturm" }, { slug: "wunderwaffe", title: "Wunderwaffe" }, { slug: "vergeltungswaffe", title: "Vergeltungswaffe: od V1 do V4" }, { slug: "kapitulacja", title: "Kapitulacja - Dzień Zwycięstwa" }]

    const menuSlaskArray = [{ slug: "wojsko-dlnslask", title: "Wojsko na Dolnym Śląsku 1740-1945" }, { slug: "groß-rosen", title: "Obóz koncentracyjny Groß-Rosen (1940-45)" }, { slug: "klasztor-augustianow", title: "Klasztor augustianów" }, { slug: "grupa-drobnera", title: "Grupa inicjatywna Drobnera" }, { slug: "zoo", title: "Wrocławski Ogród Zoologiczny (1865 - 1945)" }, { slug: "szczepin-bitwa", title: "Bitwa pancerna na Szczepinie 18 IV 1945" }]

    const menuBiosArray = [{ slug: "adolf-bertram", title: "Arcybiskup Adolf Bertram (1859-1945)" }, { slug: "hanna-reitsch", title: "Kapitan Hanna Reitsch (1912-79)" }, { slug: "iwan-polbin", title: "Generał Iwan Połbin (1905-45)" }, { slug: "sophie-scholl", title: "Sophie Scholl (1921-43)" }, { slug: "werner-molders", title: "Podpułkownik Werner Mölders (1913-41)" }]

    const menuArticles = menuArticlesArray.map(article => (<li key={article.slug}><Link activeClassName="menuLinkActive" to={`/festung-breslau/article/${article.slug}`}>{article.title}</Link></li>))

    const menuArmee = menuArmeeArray.map(article => (<li key={article.slug}><Link activeClassName="menuLinkActive" to={`/festung-breslau/article/${article.slug}`}>{article.title}</Link></li>))

    const menuSlask = menuSlaskArray.map(article => (<li key={article.slug}><Link activeClassName="menuLinkActive" to={`/festung-breslau/article/${article.slug}`}>{article.title}</Link></li>))

    const menuBios = menuBiosArray.map(bio => (<li key={bio.slug}><Link activeClassName="menuLinkActive" to={`/festung-breslau/article/${bio.slug}`}>{bio.title}</Link></li>))


    return (
        <StyledContainer>
            <Helmet title="Festung Breslau 1945 | dygresje.info" defer={false}>
                <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@500&family=Roboto&display=swap" rel="stylesheet" />
            </Helmet>
            <StyledHeader>
                <ul className="headerNavbar">
                    <li><Link to="/">dygresje.info strona główna</Link></li>
                    <li><a href="https://www.facebook.com/dygresje.info">/ facebook</a></li>
                    <li><Link to="/kontakt">/ kontakt</Link></li>
                </ul>
                <h1><Link activeClassName="menuLinkActive" to="/festung-breslau">Festung Breslau 1945 täglich</Link></h1>
                <h2>wojenna kronika zagłady</h2>
            </StyledHeader>
            <StyledMain>
                <aside>
                    {/* <h2>Menu</h2> */}
                    <h3>Impressum</h3>
                    <div className="about">
                        <p>Blog wojenny. Codzienna relacja z bitwy o Wrocław. W tle wydarzenia z całego świata.<br />
                            119 dni końca wojny: od 12 stycznia do 10 maja 1945.</p>
                    </div>
                    <ul>
                        <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/blog">Blog Wojenny - edycja 2021</Link></li>
                        <li><Link activeClassName="menuLinkActive" to="/festung-breslau/posts">Archiwum wpisów</Link></li>
                        <li><Link activeClassName="menuLinkActive" to="/festung-breslau/article/bibliografia">Bibliografia</Link></li>
                    </ul>
                    <h3>Artykuły</h3>

                    <ul>
                        {menuArticles}
                    </ul>

                    <h3>Armia niemiecka</h3>

                    <ul>
                        {menuArmee}
                    </ul>

                    <h3>Dolny Śląsk</h3>

                    <ul>
                        {menuSlask}
                    </ul>

                    <h3>Biografie</h3>

                    <ul>
                        {menuBios}
                    </ul>
                </aside>

                <StyledArticle className="content-container">{children}</StyledArticle>

            </StyledMain>
            <StyledFooter>
                <p>Festung Breslau 1945 täglich @ die <a href="https://www.gatsbyjs.com/">GatsbyJS</a> Ausgabe 2021</p>
                <p><Link to="/">dygresje.info</Link> | <Link to="/festung-breslau">Festung Breslau 1945 täglich</Link></p>
            </StyledFooter>
        </StyledContainer >

    )
}

export default LayoutFB


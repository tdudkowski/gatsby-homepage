import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const IndexSubHeader = styled.div`
ul {display:flex; flex-direction:column; list-style-type:none; padding-left:0; margin:.5rem 0;}
ul li {flex:1; text-align:center; box-shadow: 0 0 4px #bba; margin:5px;}
ul li:hover {box-shadow:0 0 4px #882;}
ul li a {display:block; padding:.6rem 5px;}
@media (min-width:911px) {
  ul{flex-direction:row;}
    }
`;

const Main = styled.div`
display:flex;
flex-direction:column-reverse;
div.facebook {flex-basis:400px;}
div.content {flex:1; display:flex; flex-direction:column;}
div.content > div {flex:1; margin:5px; border:1px solid rgba(150,150,150,.3); }
div.content ul {list-style-type:circle; padding-left:1rem;}
div.content header {border-bottom:1px solid rgba(150,150,150,.3);}
div.content header h3 {background-color: #443; color:#ddc; padding:10px; margin:0;}
div.content h4 {padding: .5rem 5px; margin:0; background-color: #eed;}
div.content header p {display:block; flex:1; padding-left:1rem; }
p, ul {margin:5px;}
@media (min-width:911px) {
    flex-direction:row;
    }
@media (min-width:1076px) {
    div.content {flex-direction:row;}
    }
`;

const SectionHorizontal = styled.div`
display:flex;
flex-direction: column;
div {flex:1;}
div ul {padding-left:0;}
`;

const IndexPage = ({ section }) => {

    return (
        <Layout section={section}>
            <IndexSubHeader>
                <ul>
                    <li>
                        <Link to="/blog">Blog (wkrótce!)</Link>
                    </li>
                    <li>
                        <Link to="/festung-breslau">Festung Breslau 1945 täglich / ostatnie 120 dni wojny</Link>
                    </li>
                    <li>
                        <a href="https://github.com/tdudkowski/t4">Materiały na stronę o Akcji T4: github.com/tdudkowski/t4</a>
                    </li>
                </ul>
            </IndexSubHeader>
            <Main>
                <div className="facebook">

                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdygresje.info&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        title="facebook"
                        className="facebook"
                        width="400"
                        height="500"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
                <div className="content">
                    <div className="turystyka">
                        <header>
                            <h3>Turystyka</h3>
                            <p><Link to="/turystyka/">przejdź do /Turystyka</Link></p>
                        </header>
                        <SectionHorizontal>
                            <div>
                                <h4>Licencje</h4>
                                <ul>
                                    <li>przewodnik miejski wrocławski</li>
                                    <li>pilot wycieczek</li>
                                    <li>przewodniki górski sudecki</li>
                                    <li>First Certificate in English (FCE)</li>
                                </ul>
                                <h4>Usługi</h4>
                                <ul>
                                    <li>Pilotaż: Polska, Brandenburgia, Saksonia i Czechy.</li>
                                    <li>Oprowadzanie: Dolny Śląsk, Drezno, Miśnia, Berlin, Poczdam i Praga.</li>
                                </ul>
                                <p>Należę do Stowarzyszenia <a href="https://przewodnicy.org/">TUiTAM</a> - <a href="https://www.facebook.com/stowarzyszenieTUiTAM">facebook</a></p>
                            </div>
                            <div>
                                <h4>Artykuły</h4>
                                <ul>
                                    <li><Link to="/turystyka/brandenburgia">Brandenburgia i Berlin</Link></li>
                                    <li><Link to="/turystyka/saksonia">Saksonia i Drezno</Link></li>
                                    <li><Link to="/turystyka/dolny-slask">Dolny Śląsk</Link></li>
                                    <li>Czechy i Praga (wkrótce)</li>
                                </ul>
                            </div>
                        </SectionHorizontal>
                    </div>
                    <div className="it">
                        <header>
                            <h3>IT</h3>
                            <p><Link to="/it/">przejdź do /IT</Link></p>
                        </header>
                        <p>Social media: <a href="https://tdudkowski.github.io">Github</a> | <a href="https://codepen.io/tdudkowski">Codepen</a></p>
                        <p>Po kilku latach przerwy wróciłem robienia stron www. Oto część mojej dawnej strony: witryna o XHTML1/CSS i kilka dłuższych tekstów:</p>
                        <SectionHorizontal>
                            <div>
                                <h4>2005</h4>
                                <ul>
                                    <li><a href="http://tdudkowski.usermd.net/redesign/">XHTML/CSS redesign? [2005]</a></li>
                                    <li><Link to="/it/kryptologia">Kryptologia praktycznie</Link></li>
                                    <li><Link to="/it/historia">Historia kryptologii, komputerów i internetu</Link></li>
                                    <li><Link to="/it/internet">Internet, FTP, LAMP,</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4>Teraz napisane</h4>
                                <ul>
                                    <li><Link to="/it/js/">JavaScript</Link>: Node.js, React, Express.js, Next.js, MongoDB, GatsbyJS, git i Github, Markdown, Odnośniki JS</li>
                                    <li><Link to="/it/css">CSS</Link> w tej chwili głównie Flexbox</li>
                                    <li><Link to="/it/cms">CMS</Link>: Drupal, WordPress, Mediawiki</li>
                                    <li><Link to="/it/web-accessibility">Web Accessibility</Link></li>
                                    <li><Link to="/it/internet/internet-links">Odnośniki</Link></li>
                                </ul>
                            </div>
                        </SectionHorizontal>
                    </div>
                    <div className="priv">
                        <header>
                            <h3>Misc</h3>
                            <p><Link to="/misc/">przejdź do /Misc</Link></p>
                        </header>
                        <SectionHorizontal>
                            <div>
                                <p>Z założenia miało tu być wszystko niepasujące ani do /turystyka, ani do /IT. Rezultat jest taki, że można to podzielić na dwie części:</p>
                                <ul>
                                    <li><Link to="/misc/deutsch">Deutsch</Link>
                                        <ul>
                                            <li><Link to="/misc/deutsch/deutsche-sprache">Język niemiecki</Link> odnośniki</li>
                                            <li><Link to="/misc/deutsch/deutsche-kino">Niemcy filmowo</Link> opowiedziana kinem historia Niemiec i filmy w Niemczech kultowe</li>
                                            <li><Link to="/misc/deutsch/deutsche-musik">Muzyka niemiecka</Link> przegląd bardzo subiektywny</li>
                                        </ul>
                                    </li>
                                    <li><Link to="/misc/francais">Français</Link>
                                        <ul>
                                            <li><Link to="/misc/francais/francais-mot">Język francuski</Link> odnośniki</li>
                                            <li><Link to="/misc/francais/francais-mot">Lingua franca</Link> czyli elementy francuskiego, które każdy zna</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>Oraz</p>
                                <ul>
                                    <li>Wiedza, nie panika. Główne źródła informacji: <Link to="/misc/koronawirus">Koronawirus</Link></li>
                                    <li><Link to="/misc/wroclawscy-argonauci">"Wrocławscy Argonauci"</Link></li>
                                </ul>
                            </div>
                        </SectionHorizontal>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export default IndexPage

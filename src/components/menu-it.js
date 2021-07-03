import * as React from "react"
import { Link } from "gatsby"

const TurystykaMenu = ({ subsection }) => {

    const MenuJS = () => {

        return (
            <nav>
                <ul>
                    <li><Link to="/it" activeClassName="active">IT</Link></li>
                    <li><Link to="/it/js" activeClassName="active">JS</Link></li>
                </ul>
                <h4>JavaScript</h4>
                <ul>
                    <li><Link to="/it/js/js-odnosniki" activeClassName="active">Odnośniki</Link></li>
                    <li><Link to="/it/js/js-odnosniki-zagadnienia" activeClassName="active">Zagadnienia</Link></li>
                </ul>
                <h4>backend / Node</h4>
                <ul>
                    <li><Link to="/it/js/nodejs" activeClassName="active">Node.js</Link></li>
                    <li><Link to="/it/js/mongodb" activeClassName="active">MongoDB</Link></li>
                    <li><Link to="/it/js/express" activeClassName="active">Express.js</Link></li>
                </ul>
                <h4>React</h4>
                <ul>
                    <li><Link to="/it/js/react" activeClassName="active">React</Link> </li>
                    <li><Link to="/it/js/react-hooks" activeClassName="active">React hooks</Link> </li>
                    <li><Link to="/it/js/react-links" activeClassName="active">React odnośniki</Link> </li>
                    <li><Link to="/it/js/nextjs" activeClassName="active">Next.js</Link></li>
                    <li><Link to="/it/js/gatsby" activeClassName="active">GatsbyJS</Link></li>
                </ul>
                <h4>Inne</h4>
                <ul>
                    <li><Link to="/it/js/git" activeClassName="active">git, Github</Link></li>
                    <li><Link to="/it/js/markdown" activeClassName="active">Markdown</Link></li>
                </ul>
            </nav>)
    }

    const MenuCSS = () => {

        return (<nav>
            <h4>CSS Flexbox</h4>
            <ul>
                <li><Link to="/it/css/flex-rules">Zasady</Link></li>
                <li><Link to="/it/css/flex-examples">Przykłady</Link></li>
                <li><Link to="/it/css/flex-links">Odnośniki</Link></li>
            </ul>
            <h4>CSS Grid</h4>
            <ul>
                <li><Link to="/it/css/grid-links">Odnośniki</Link></li>
            </ul>
            <h4>CSS</h4>
            <ul>
                <li><Link to="/it/css/css-links">Odnośniki</Link></li>
            </ul>
            <h4>HTML</h4>
            <ul>
                <li><Link to="/it/css/html-links">Odnośniki</Link></li>
            </ul>
        </nav>)
    }

    const MenuCMS = () => {

        return (
            <nav>
                <h4>CMS</h4>
                <ul>
                    <li><Link to="/it/cms/drupal" activeClassName="active">Drupal</Link></li>
                    <li><Link to="/it/cms/wordpress" activeClassName="active">WordPress</Link></li>
                    <li><Link to="/it/cms/mediawiki" activeClassName="active">Mediawiki</Link></li>
                </ul>
            </nav>)
    }

    const MenuKryptologia = () => {

        return (<ul>
            <li><Link to="/it" activeClassName="active">IT</Link></li>
            <li><Link to="/it/kryptologia/kryptologia-wstep" activeClassName="active">Wstęp</Link></li>
            <li><Link to="/it/kryptologia/kryptologia-asymetryczna" activeClassName="active">Kryptografia asymetryczna</Link></li>
            <li><Link to="/it/kryptologia/kryptologia-pgpgpg" activeClassName="active">PGP / GPG</Link></li>
            <li><Link to="/it/kryptologia/kryptologia-steganografia" activeClassName="active">Steganografia</Link></li>
            <li><Link to="/it/kryptologia/kryptologia-kryptoanaliza" activeClassName="active">Kryptoanaliza</Link></li>
            <li><Link to="/it/kryptologia/kryptologia-aneks" activeClassName="active">Aneks</Link></li>
        </ul>)
    }

    const MenuWA = () => {

        return (<ul>
            <li><Link to="/it" activeClassName="active">IT</Link></li>
            <li><Link to="/it/web-accessibility/wa-odnosniki" activeClassName="active">Web Accessibility</Link></li>
        </ul>)
    }

    const MenuInternet = () => {

        return (<ul>
            <li><Link to="/it" activeClassName="active">IT</Link></li>
            <li><Link to="/it/internet/internet-net" activeClassName="active">Sieć</Link></li>
            <li><Link to="/it/internet/internet-internet" activeClassName="active">TCP/IP</Link></li>
            <li><Link to="/it/internet/internet-dns" activeClassName="active">DNS</Link></li>
            <li><Link to="/it/internet/internet-adresowanie" activeClassName="active">Adresowanie</Link></li>
            <li><Link to="/it/internet/internet-dodatki" activeClassName="active">Dodatki</Link></li>
            <li><Link to="/it/internet/internet-ftp" activeClassName="active">FTP</Link></li>
            <li><Link to="/it/internet/internet-lamp" activeClassName="active">LAMP</Link></li>
            <li><Link to="/it/internet/internet-links" activeClassName="active">Odnośniki</Link></li>
        </ul>)
    }

    const MenuHistoriaIT = () => {

        return (<ul>
            <li><Link to="/it" activeClassName="active">IT</Link></li>
            <li><Link to="/it/historia/historiait-kryptologia" activeClassName="active">Historia kryptologii</Link></li>
            <li><Link to="/it/historia/historiait-komputery" activeClassName="active">Historia komputerów</Link></li>
            <li><Link to="/it/historia/historiait-internet" activeClassName="active">Historia Internetu</Link></li>
        </ul>)
    }

    const MenuIT = () => {

        return (<ul>
            <li><Link to="/it/js" activeClassName="active">JS</Link></li>
            <li><Link to="/it/css" activeClassName="active">CSS</Link></li>
            <li><Link to="/it/cms" activeClassName="active">CMS</Link></li>
            <li><Link to="/it/kryptologia" activeClassName="active">Kryptologia</Link></li>
            <li><Link to="/it/web-accessibility" activeClassName="active">Web Accessibility</Link></li>
            <li><Link to="/it/historia" activeClassName="active">Historia IT</Link></li>
            <li><Link to="/it/internet" activeClassName="active">Internet, LAMP, FTP</Link></li>
        </ul>)
    }

    let menu

    switch (subsection) {
        case 'js':
            menu = <MenuJS />
            break;
        case 'cms':
            menu = <MenuCMS />
            break;
        case 'cms/':
            menu = <MenuCMS />
            break;
        case 'css':
            menu = <MenuCSS />
            break;
        case 'kryptologia':
            menu = <MenuKryptologia />
            break;
        case 'web-accessibility':
            menu = <MenuWA />
            break;
        case 'it':
            menu = <MenuIT />
            break;
        case 'internet':
            menu = <MenuInternet />
            break;
        case 'historia':
            menu = <MenuHistoriaIT />
            break;
        default:
            menu = <strong>ERR</strong>
    }

    return (
        <section>
            {menu}
        </section>
    )
}

export default TurystykaMenu
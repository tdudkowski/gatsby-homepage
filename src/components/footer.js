import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  
& ul {display:flex; flex-direction: column; padding-left:0; margin:0 auto;}
& ul li {list-style-type:none; flex:1;}
& ul li a {display:block; text-align:center; text-decoration:none; padding:10px 2rem;}
& ul li a:hover {text-decoration:underline;}
  @media (min-width: 900px) {& ul { flex-direction:row;}}
`;

const Footer = () => {

    return (
        <StyledFooter className="footer">
            <hr />
            <nav>
                <ul>
                    <li><Link to="/">/home</Link></li>
                    <li><Link to="/turystyka">/turystyka</Link></li>
                    <li><Link to="/it">/IT</Link></li>
                    <li><Link to="/misc">/misc</Link></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><Link to="/o-mnie">O mnie</Link></li>
                    <li><Link to="/o-stronie">O stronie</Link></li>
                    <li><Link to="/sitemap">Mapa strony</Link></li>
                    <li><Link to="/hosting">Hosting (MyDevil.net)</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>

                </ul>
            </nav>
        </StyledFooter>)
}
export default Footer
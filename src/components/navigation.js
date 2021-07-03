import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.nav`
  background-color: #eed;
  display:flex;
  flex-direction: column; 
& div a {display:block; padding:1rem; font-family: "Andale Mono"; font-weight: bold; text-decoration: none;}
& div a:hover {text-decoration: underline;} 
& ul {display:flex; flex-direction: column; padding-left:0; margin:0;}
& ul li {list-style-type:none;}
& ul li a {display:block; text-align:center; text-decoration:none; padding:1rem 3rem; margin:0 .5rem;}
& ul li a:hover {text-decoration:underline;}
  @media(min-width:900px) {
    flex-direction: row;
    justify-content: space-between;
 & ul {flex-direction: row;}   
  }
`;

const Navigation = () => {

    return (
        <StyledNav>
            <div><Link to="/">Tadeusz Dudkowski Homepage<br/>dygresje.info</Link></div>
            <ul>
                <li><Link to="/turystyka">/turystyka</Link></li>
                <li><Link to="/it">/it</Link></li>
                <li><Link to="/misc">/misc</Link></li>
                <li><Link to="/kontakt">kontakt=>@</Link></li>
            </ul>
        </StyledNav>
    )
}

export default Navigation
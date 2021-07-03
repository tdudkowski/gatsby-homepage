import * as React from "react"
import { Link } from "gatsby"

const MiscMenu = () => {

    return (
        <section>
            <h4>Deutsch</h4>
            <ul>
                {/*<li><Link to="/misc/deutsch" activeClassName="active">Deutsch Język niemiecki</Link></li>*/}
                <li><Link to="/misc/deutsch/deutsche-sprache" activeClassName="active">Język niemiecki - odnośniki</Link></li>
                <li><Link to="/misc/deutsch/deutsche-internet" activeClassName="active">Media niemieckie - odnośniki</Link></li>
                <li><Link to="/misc/deutsch/deutsche-kino" activeClassName="active">Opowiedziana kinem historia Niemiec i filmy w Niemczech kultowe</Link></li>
                <li><Link to="/misc/deutsch/deutsche-musik" activeClassName="active">Muzyka niemiecka - subiektywny przegląd</Link></li>
            </ul>
            <h4>Francais</h4>
            <ul>
                {/*<li><Link to="/misc/francais" activeClassName="active">Français Język francuski</Link></li>*/}
                <li><Link to="/misc/francais/francais" activeClassName="active">Język francuski - odnośniki</Link></li>
                <li><Link to="/misc/francais/francais-internet" activeClassName="active">Media francuskie - odnośniki</Link></li>
                <li>Nie znasz języka francuskiego? <Link to="/misc/francais/francais-mot" activeClassName="active">Oto elementy, które każdy zna.</Link></li>
            </ul>
            <h4>Inne</h4>
            <ul>
                {/*<li><Link to="/misc/koronawirus" activeClassName="active">Koronawirus</Link></li>*/}
                <li><Link to="/turystyka/dolny-slask/wroclawscy-argonauci" activeClassName="active">"Wrocławscy Argonauci"</Link></li>
            </ul>
        </section>
    )
}

export default MiscMenu
import * as React from "react"
import { Link } from "gatsby"

const TurystykaMenu = ({ subsection }) => {

    const MenuBiB = () => {
        return (<section>
            <ul>
                <li><Link to="/turystyka">Turystyka</Link></li>
                <li><Link to="/turystyka/brandenburgia" className="active">Brandenburgia i Berlin</Link></li>
                <li><Link to="/turystyka/saksonia">Saksonia i Drezno</Link></li>
                <li><Link to="/turystyka/dolny-slask">Dolny Śląsk</Link></li>
            </ul>
            <h4>Brandenburgia i Berlin</h4>
            <ul>
                <li><Link to="/turystyka/brandenburgia/historia-berlina" activeClassName="active">Historia Berlina</Link></li>
                <li><Link to="/turystyka/brandenburgia/historia-brandenburgii" activeClassName="active">Historia Brandenburgii</Link></li>
                <li><Link to="/turystyka/brandenburgia/berlin-obiekty" activeClassName="active">Berlin - obiekty</Link></li>
                <li><Link to="/turystyka/brandenburgia/reichstag" activeClassName="active">Reichstag</Link></li>
                <li><Link to="/turystyka/brandenburgia/wieza-telewizyjna" activeClassName="active">Wieża Telewizyjna</Link></li>
                <li><Link to="/turystyka/brandenburgia/brama-brandenburska" activeClassName="active">Brama Brandenburska</Link></li>
                <li><Link to="/turystyka/brandenburgia/brandenburgia-kalendarium" activeClassName="active">Kalendarium</Link></li>
                <li><Link to="/turystyka/brandenburgia/brandenburgia-ksiazki-i-odnosniki" activeClassName="active">Ksiażki i odnośniki</Link></li>
            </ul>
        </section>)
    }

    const MenuSiD = () => {
        return (<section>
            <ul>
                <li><Link to="/turystyka">Turystyka</Link></li>
                <li><Link to="/turystyka/brandenburgia">Brandenburgia i Berlin</Link></li>
                <li><Link to="/turystyka/saksonia" className="active">Saksonia i Drezno</Link></li>
                <li><Link to="/turystyka/dolny-slask">Dolny Śląsk</Link></li>
            </ul>
            <h4>Saksonia i Drezno</h4>
            <ul>
                <li><Link to="/turystyka/saksonia/historia-saksonii" activeClassName="active">Historia Saksonii</Link></li>
                <li><Link to="/turystyka/saksonia/historia-drezna" activeClassName="active">Historia Drezna</Link></li>
                <li><Link to="/turystyka/saksonia/drezno-obiekty" activeClassName="active">Drezno - obiekty</Link></li>
                <li><Link to="/turystyka/saksonia/zwinger" activeClassName="active">Zwinger</Link></li>
                <li><Link to="/turystyka/saksonia/frauenkirche" activeClassName="active">Frauenkirche</Link></li>
                <li><Link to="/turystyka/saksonia/droga-czerwonej-flagi" activeClassName="active">Droga Czerwonej Flagi</Link></li>
                <li><Link to="/turystyka/saksonia/sztuka" activeClassName="active">Saksonia - sztuka</Link></li>
                <li><Link to="/turystyka/saksonia/saksonia-co-zobaczyc" activeClassName="active">Saksonia - co zobaczyć?</Link></li>
                <li><Link to="/turystyka/saksonia/saksonia-ksiazki-i-odnosniki" activeClassName="active">Saksonia - książki i odnośniki</Link></li>
                <li><Link to="/turystyka/saksonia/saksonia-kalendarium" activeClassName="active">Saksonia - kalendarium</Link></li>
            </ul>
        </section>)
    }

    const MenuDS = () => {
        return (<section>
            <ul>
                <li><Link to="/turystyka">Turystyka</Link></li>
                <li><Link to="/turystyka/brandenburgia">Brandenburgia i Berlin</Link></li>
                <li><Link to="/turystyka/saksonia">Saksonia i Drezno</Link></li>
                <li><Link to="/turystyka/dolny-slask" className="active">Dolny Śląsk</Link></li>
            </ul>
            <h4>Dolny Śląsk</h4>
            <ul>
                <li><Link to="/turystyka/dolny-slask/dolny-slask-bibliografia" activeClassName="active">Bibliografia</Link></li>
                <li><Link to="/turystyka/dolny-slask/dolny-slask-odnosniki" activeClassName="active">Odnośniki</Link></li>
                <li><Link to="/turystyka/dolny-slask/hlasko" activeClassName="active">Marek Hłasko - sudecka baza ludzi umarłych</Link></li>
                <li><Link to="/turystyka/dolny-slask/worcell" activeClassName="active">Henryk Worcell - zaklęte rewiry Ziemi Kłodzkiej</Link></li>
                <li><Link to="/turystyka/dolny-slask/wielki-cmentarz" activeClassName="active">Wrocławski Wielki Cmentarz</Link></li>
                <li><Link to="/turystyka/dolny-slask/wroclawscy-argonauci" activeClassName="active">"Wrocławscy Argonauci"</Link></li>
            </ul>
        </section>)
    }

    const MenuTurystyka = () => {

        return (<ul>
            <li><Link to="/turystyka/brandenburgia" activeClassName="active">Brandenburgia i Berlin</Link></li>
            <li><Link to="/turystyka/saksonia" activeClassName="active">Saksonia i Drezno</Link></li>
            <li><Link to="/turystyka/dolny-slask" activeClassName="active">Dolny Śląsk</Link></li>
        </ul>)

    }

    let menu

    switch (subsection) {
        case 'brandenburgia':
            menu = <MenuBiB />
            break;
        case 'dolny-slask':
            menu = <MenuDS />
            break;
        case 'saksonia':
            menu = <MenuSiD />
            break;
        case 'turystyka':
            menu = <MenuTurystyka />
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
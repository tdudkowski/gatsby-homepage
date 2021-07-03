import * as React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <section className="section-meta">
            <h2>Hosting</h2>

            <p>Przeniosłem się na hosting do MyDevil.net, głównym powodem był MongoDB i Node.js w ofercie. Tego nie było w poprzednim hostingu, którego z różnymi uczuciami używałem przez poprzednie 10 lat. Podsunowując ofertę <a href="https://www.mydevil.net/oferta.html">Mojego Diabła MyDevil.net / Oferta hostingowa</a>, zobaczmy co dostajemy w najtańszej wersji (MD1):</p>

                <ul>
                    <li>20 GB SSD</li>
                    <li>Node.js</li>
                    <li>Bazy danych: MySQL, postgreSQL, MongoDB</li>
                    <li>Python, git</li>
                    <li>Let's encrypt</li>
                    <li>... i wiele, wiele innych</li>
                </ul>
            <p>Wszystko to za 200 zł / rok, przy czym kolejne przedłużenia są coraz tańsze, aż do 140 zł. Jeżeli szukasz hostingu to jest trochę wyższa cena za dużo większe konto podstawowe. Inni dostawcy oferują sporo mniejsza pojemność i tylko dwa rodzaje baz za ~150 zł.</p>

            <p>Możesz mieć konto na Moim Diable w tej cenie, wystarczy skorzystać z linku afiliacyjnego dającego 20% zniżki</p>

            <p>Ty dostajesz pełne konto za 20% niższą cenę</p>
            <p>Ja dostaję 20% Twojej pierwszej wpłaty do portfelu konta</p>
            <p>Jest to win-win situation, zatem zapraszam - <a href="http://www.mydevil.net/pp/D021IEO0NN">Mój link afiliacyjny</a> (ewentualnie kod do wpisania w panelu: D021IEO0NN).</p>
</section>
        </Layout>
    )
}

export default ContactPage
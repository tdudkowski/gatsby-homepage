import * as React from "react"
import Layout from "../components/layout"

const AboutMe = () => {
    return (
        <Layout>
            <section className="section-meta">
            <h2>Tadeusz Dudkowski / O mnie</h2>

            <h3>IT</h3>
                <ul>
            <li>Dobra znajomość standardów WWW: HTML, CSS.</li>
            <li>Web Accessibility (dostępność treści internetowych) – prowadzenie szkoleń. Współautor tłumaczenia na język polski specyfikacji WCAG 1.0.</li>
            <li>Obsługa serwerów WWW (Apache), znajomość systemu operacyjnego Linux (Slackware, Ubuntu).</li>
            <li>Budowa i utrzymanie witryn opartych na CMS (podstawowa znajomość PHP) i bazach danych (MySQL): głównie Drupal. Także Node.js, React i Gatsby.</li>
            <li>Dobra znajomość Mediawiki, zasad Wikipedii i formatowania wikikodu. Redaktor polskiej Wikipedii.</li>
            <li>Projektowanie interfejsu aplikacji webowych.</li>
            <li>Dobra znajomość programów biurowych, grafiki rastrowej oraz zagadnień DTP.</li>
            <li>Znajomość technik ochrony danych i kryptografii.</li>
            <li>ODO.</li>
                </ul>

            <h3>Turystyka</h3>
                <ul>
       <li>2017 licencja państwowa - przewodnik górski sudecki klasy III</li>
       <li>2015 szkolenie pilockie w Paryżu, wyjazdy studyjne do Drezna i Berlina</li>
       <li>2013 zdany Cambridge ESOL First Certificate in English / Council of Europe Level B2</li>
       <li>2012 licencja państwowa - pilot wycieczek</li>
       <li>2011 licencja państwowa - przewodnik miejski wrocławski</li>
</ul>

           <h3>Inne</h3>
        <ul>
            <li>Prowadzenie fanpage’ów na Facebooku</li>
<li>Pisanie artykułów.</li>
<li>        Szkolenia (np. ODO, historia Wrocławia, Web Accessibility).</li>
<li>        Geofizyka: georadar i elektroporówka.</li>
        </ul>
    <h3>        Przynależność do stowarzyszeń</h3>
        <ul>
            <li>Stowarzyszenie TUiTAM</li>
        </ul>
            <h3>Języki obce</h3>
<ul>
<li>angielski - FCE</li>
<li>niemiecki - podstawowa znajomość</li>
<li>rosyjski - podstawowa znajomość</li>
</ul>
        <p>Zainteresowania: historia, kultura, wojskowość, kosmos, biegi długodystansowe i na orientację, podróże, uczenie się nowych rzeczy, czytanie książek. Uczę się języka niemieckiego.</p>
            </section>
        </Layout>
    )
}

export default AboutMe
import * as React from "react"
import Layout from "../components/layout"

const AboutSite = () => {
    return (
        <Layout>
            <section className="section-meta">
                <h2>O stronie</h2>

                <p>Czym ma być ta witryna? Najkrótszą odpowiedzią jest, że..., hmm, w zasadzie wszystkim. Wszystkim w miarę możliwości i wszystkim po trochu. Jest to strona prywatna czyli są tu rzeczy, które ja uważam za interesujące i mogące być przydatne innym. Nie ma jakiejś konkretnej linii wiodącej. Stąd rozbicie na trzy niemające ze sobą związku części: turystyka, IT (dawniej mówiło się: webmastering) i tzw. "różne".</p>

                <p>Są to jednocześnie:</p>
                <ul>
                    <li>opublikowane notatki</li>
                    <li>przywrócenie mojej dawnej strony www</li>
                    <li>reklama</li>
                    <li>nawiązanie kontaktu</li>
                    <li>etc...</li>
                </ul>

                <p>Dział niemiecki w opublikowanym zakresie jest kompletny, może dodam jakieś miasta, czy może zarys politycznej historii Niemiec, na pewno lepsze zdjęcia. Ale to co jest to i tak za dużo, kto ma tyle czasu, żeby to czytać. Mam pomysł na serię artykułów o Berlinie i Dreźnie ale to tylko jeśli będę miał czas, żeby je napisać. Może teraz pora na Budapeszt, Wiedeń, Pragę i Paryż.</p>
                {/*<p>Instrukcje obiektów turystycznych będą powstawać stopniowo.</p>*/}
                <p>IT początkowo to były głównie Drupal, Mediawiki, WordPress i CSS. Do tego stara strona o XHTML i CSS2 oraz artykuł o kryptografii. W tym roku postanowiłem jednak całość czasu nauki przeznaczyć na JavaScript, React i Gatsby'ego. Dlatego część JS staje się najwazniejsza.</p>
                <p>Dział trzeci, prywatny, jak widać z braku czasu składa się głównie z dwóch zestawów odnośników, które zebrałem lurkując na Facebooku grupy związane z językiem niemieckim (którego się uczę) i francuskim (którego chciałbym się zacząć uczyć).</p>
                <p>Ponadto:</p>

                <ul>
                    <li>Nie biorę odpowiedzialności za zastosowanie jakiejkolwiek zawartej tu informacji.</li>
                    <li>Jestem autorem całej treści tej witryny (chyba że wyraźnie zaznaczyłem że jest inaczej).</li>
                    <li>Użyłem zdjęć własnych, oznaczonych jako public domain, oraz starych map mających ponad 70 lat.</li>
                    <li>Starałem się nie naruszyć niczyich dóbr, jeśli jednak uważasz inaczej - proszę o kontakt.</li>
                </ul>

                <p>Pierwsza wersja powstała na Drupalu w 2018. Potem przeniosłem całą treść na Gatsby'ego (data instalacji na Netlify: 22 października 2020). Trochę w pośpiechu bo jednocześnie przenosiłem się na inny hosting. Był to mój pierwszy poważniejszy kontakt z Gatsby'm, więc nie wyszło optymalnie. W międzyczasie, od stycznia do maja 2021, przeniosłem na tę stronę cały blog wojenny Festung Breslau 1945. To jest już trzecia wersja, także Gatsby, ale tym razem treść zawarta jest w plikach .mdx w jednym katalogu, a cała strona ma o wiele prostszą strukturę, co jest o wiele łatwiejsze do utrzymania i rozwoju.</p>

                <p>Do zrobienia jest przede wszystkim blog. Pierwsza dłuższa seria wpisów (ok 10) będzie dotyczyła Gastby HOWTO. Druga niemieckiej maszyny szyfrującej Enigma. Poza tym:</p>

                <ul>
                    <li>Zróżnicowanie designu poszczególnych działów, lepsza organizacja treści.</li>
                    <li>Wdrożyć Web Accessibility.</li>
                    <li>UI, SEO, design, część ilustracyjna...</li>
                    <li>... treść, więcej treści, a lot of treść</li>
                </ul>
            </section>
        </Layout>
    )
}

export default AboutSite
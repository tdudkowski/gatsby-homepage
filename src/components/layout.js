import * as React from "react"
import LayoutTurystyka from "./layout-turystyka"
import LayoutIT from "./layout-it"
import LayoutMisc from "./layout-misc"
import LayoutCMS from "./layout-cms"
import LayoutCSS from "./layout-css"
import LayoutJS from "./layout-js"
import LayoutKryptologia from "./layout-kryptologia"
import LayoutWebAccessibility from "./layout-webaccessibility"
import LayoutERR from "./layout-err"
import SEO from "./seo"
import "./layout.css"

const Layout = ({ data, children, section, subsection }) => {

    let Layout;

    switch (section) {
        case "turystyka":
            Layout = LayoutTurystyka
            break;
        case "turystyka/":
            Layout = LayoutTurystyka
            break;
        case "it":
            Layout = LayoutIT
            break;
        case "it/":
            Layout = LayoutIT
            break;
        case "misc":
            Layout = LayoutMisc
            break;
        case "misc/":
            Layout = LayoutMisc
            break;
        default:
            Layout = LayoutERR
    }

    switch (subsection) {
        case "css":
            Layout = LayoutCSS
            break;
        case "cms":
            Layout = LayoutCMS
            break;
        case "js":
            Layout = LayoutJS
            break;
        case "kryptologia":
            Layout = LayoutKryptologia
            break;
        case "web-accessibility":
            Layout = LayoutWebAccessibility
            break;
    }


    const headerTitle = `${section !== undefined ? section : " Strona główna"}`

    return (
        <div className="container">
            <SEO title={headerTitle} defer={false} />
            <Layout children={children} section={section} subsection={subsection} />
        </div>)
}

export default Layout
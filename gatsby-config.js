require("dotenv").config({
    // path: `.env.${process.env.GA_ID}`,
    path: `.env`, // or '.env'
})

module.exports = {
    siteMetadata: {
        title: `Tadeusz Dudkowski Homepage :// `,
        titleTemplate: `Tadeusz Dudkowski | http://dygresje.info`,
        author: `Tadeusz Dudkowski`,
        description: `Tadeusz Dudkowski strona domowa: turystyka, Niemcy, Brandenburgia, Saksonia, Berlin, Drezno; programowanie, IT, HTML, CSS, JavaScript, React, GatsbyJS; Deutsch, Francais`,
        url: "https://dygresje.info",
        siteUrl: `https://dygresje.info/`,
        image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
        twitterUsername: "@tdudkowski",
        facebookFanpage: "https://www.facebook.com/dygresje.info",
    },
    pathPrefix: "/gatsby-homepage",
    plugins: [
        "dotenv",
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `article`,
                path: `${__dirname}/src/pages/articles`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `index`,
                path: `${__dirname}/src/pages/indexes`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `image`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `post`,
                path: `${__dirname}/src/pages/festung-breslau/posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `article`,
                path: `${__dirname}/src/pages/festung-breslau/articles`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/pages/festung-breslau/img`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [".mdx", ".md"],
                gatsbyRemarkPlugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            withWebp: true,
                            maxWidth: 800,
                            backgroundColor: false,
                            linkImagesToOriginal: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {

                            theme: {
                                default: 'Default Dark+',
                                parentSelector: {
                                    // Any CSS selector will work!
                                    'html[data-theme=dark]': 'Monokai Dimmed',
                                    'html[data-theme=light]': 'Quiet Light'
                                }
                            },
                            inlineCode: {
                                marker: '•',
                                theme: {
                                    default: 'Default Light+',
                                    dark: 'Default Dark+'
                                }
                            }

                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
                // useAutoGen: required 'true' to use autogen
                useAutoGen: true,
                // autoGenHomeLabel: optional 'Home' is default
                autoGenHomeLabel: `Strona główna`,
                // exlude: optional, include this array to overwrite paths you don't want to
                // generate breadcrumbs for.
                exclude: [
                    `/dev-404-page/`,
                    `/404/`,
                    `/404.html`,
                    `/offline-plugin-app-shell-fallback/`,
                    `/blog/`,
                ],
                // crumbLabelUpdates: optional, update specific crumbLabels in the path
                crumbLabelUpdates: [
                    {
                        pathname: '/turystyka',
                        crumbLabel: 'Turystyka'
                    },
                    {
                        pathname: '/turystyka/brandenburgia',
                        crumbLabel: 'Brandenburgia'
                    },
                    {
                        pathname: '/turystyka/saksonia',
                        crumbLabel: 'Saksonia'
                    },
                    {
                        pathname: '/turystyka/dolny-slask',
                        crumbLabel: 'Dolny Śląsk'
                    },
                    {
                        pathname: '/it',
                        crumbLabel: 'IT'
                    },
                    {
                        pathname: '/it/js',
                        crumbLabel: 'JavaScript'
                    },
                    {
                        pathname: '/it/kryptologia',
                        crumbLabel: 'Kryptologia'
                    },
                    {
                        pathname: '/it/internet',
                        crumbLabel: 'Internet'
                    },
                    {
                        pathname: '/it/historia',
                        crumbLabel: 'Historia IT'
                    },
                    {
                        pathname: '/it/web-accessibility',
                        crumbLabel: 'Web Accessibility'
                    },
                    {
                        pathname: '/it/kryptologia',
                        crumbLabel: 'Kryptologia'
                    },
                    {
                        pathname: '/it/css',
                        crumbLabel: 'CSS'
                    },
                    {
                        pathname: '/it/cms',
                        crumbLabel: 'CMS'
                    },
                    {
                        pathname: '/misc',
                        crumbLabel: 'Misc'
                    },
                    {
                        pathname: '/misc/deutsch',
                        crumbLabel: 'Deutsch'
                    },
                    {
                        pathname: '/misc/francais',
                        crumbLabel: 'Français'
                    }
                ],
                // trailingSlashes: optional, will add trailing slashes to the end
                // of crumb pathnames. default is false
                trailingSlashes: false,
                // usePathPrefix: optional, if you are using pathPrefix above
                // usePathPrefix: '/blog',
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                // options: {
                //     trackingId: process.env.GA_ID,
                //     head: true,
                //     anonymize: true,
                // },
                trackingIds: [
                    process.env.GA_ID,  // Google Analytics / GA
                    // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    // optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dygresje.info Homepage`,
                short_name: `dygresje.info`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                description: `Dygresje.info - Tadeusz Dudkowski Homepage`,
                lang: `pl`,
                icons: [
                    {
                        "src": "src/images/icon-192.png",
                        "sizes": "192x192",
                        "type": "image/png",
                        "purpose": "maskable"
                    },
                    {
                        "src": "src/images/icon-512.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable"
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/sitemap/`, `/kontakt/*`],
            },
        },
    ],
}
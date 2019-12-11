let activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
    path: `.env.${activeEnv}`
})

console.log(`This WordPress Endpoint is used: '${process.env.WORDPRESS_URL}'`)

module.exports = {
    siteMetadata: {
        title: `Make Me Pretty, Make Me Laugh`,
        description: `Makeup tips, inappropriate jokes, and inside stories from the beauty industry.`,
        author: `Jeremy Beth Michaels`,
        handle: `@jeremythegirl`,
        url: `https://makemeprettymakemelaugh.com`,
        image: `images/mmpmml_share_image.jpg`,
        instagramUrl: `https://www.instagram.com/jeremythegirl/`,
        amazonUrl: `https://www.amazon.com/Make-Me-Pretty-Laugh/dp/1543984711/`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },

        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'WPGraphQL',
                fieldName: 'wpgraphql',
                url: `https://mmpmml.net/graphql`
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // replace "UA-XXXXXXXXX-X" with your own Tracking ID
                trackingId: 'UA-154416639-1'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Make Me Pretty, Make Me Laugh`,
                short_name: `MMPMML`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `assets/favicon/icon.png` // This path is relative to the root of the site.
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}

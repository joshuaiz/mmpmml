import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { slugify } from '../../utils'

import Header from '../header'
import Footer from '../footer'
import './layout.css'
import '../../fonts/fonts.css'
import '../../styles/base.scss'
import shareImage from '../../images/mmpmml_share_image.jpg'

const Layout = ({ children }) => {
    console.log('Layout', children)
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                    url
                    image
                    handle
                    amazonUrl
                    instagramUrl
                }
            }
        }
    `)

    // console.log('siteMetadata', data)
    const meta = data.site.siteMetadata

    const slug = slugify(children[0].props.title)

    let isPost

    if (children[2]) {
        isPost = children[2].props.className || null
    }

    return (
        <Fragment>
            <Helmet>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />

                <meta property="og:url" content={meta.url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={shareImage} />
                <meta
                    property="og:image:alt"
                    content="Illustration of woman with blonde wavy hair winking"
                />
                <meta property="og:description" content={meta.description} />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:locale" content="en_US" />
                <meta property="article:author" content={meta.author} />

                <meta name="twitter:card" content={meta.description} />
                <meta name="twitter:creator" content={meta.handle} />
                <meta name="twitter:url" content={meta.url} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={shareImage} />
                <meta
                    name="twitter:image:alt"
                    content="Illustration of woman with blonde wavy hair winking"
                />
                <body
                    className={`${isPost ? 'post-single' : ''} ${slug}-page`}
                />
            </Helmet>
            <div className="container">
                <Header siteTitle={data.site.siteMetadata.title} />
                <div className="content">
                    <div className="inner-content">
                        <main>{children}</main>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout

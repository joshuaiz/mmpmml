import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Testimonials from '../components/testimonials'
import Amazon from '../../assets/amazon.svg'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query HERO {
            wpgraphql {
                pages(where: { id: 6 }) {
                    nodes {
                        home_page {
                            heroBackground {
                                altText
                                mediaItemUrl
                            }
                            heroWoman {
                                altText
                                mediaItemUrl
                            }
                            heroHeading
                            heroSubhead
                            heroContent
                            heroAuthor
                            heroCta {
                                target
                                title
                                url
                            }
                            gallery {
                                altText
                                mediaItemUrl
                            }
                        }
                    }
                }
            }
        }
    `)

    // console.log("data", data)

    const fields = data.wpgraphql.pages.nodes[0].home_page
    // console.log('fields', fields)

    return (
        <Layout>
            <SEO title="Home" />
            <div className="home-page">
                <div className="hero-outer">
                    <div className="hero-inner">
                        <div className="hero-background">
                            {fields.heroBackground && (
                                <img
                                    src={fields.heroBackground.mediaItemUrl}
                                    alt={fields.heroBackground.altText}
                                />
                            )}
                        </div>
                        <div className="hero-woman">
                            {fields.heroWoman && (
                                <img
                                    src={fields.heroWoman.mediaItemUrl}
                                    alt={fields.heroWoman.altText}
                                />
                            )}
                        </div>
                        <div className="hero-content">
                            <h2>{fields && fields.heroHeading}</h2>
                            <h3>{fields && fields.heroSubhead}</h3>
                            <h4>By {fields && fields.heroAuthor} </h4>
                            <div className="cta">
                                <a
                                    href={fields && fields.heroCta.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Amazon />

                                    <button className="button">
                                        {fields.heroCta.title}
                                    </button>
                                </a>
                            </div>
                            <p>
                                <span className="social-handle">
                                    Follow:{' '}
                                    <a
                                        href="https://www.instagram.com/jeremythegirl/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        @jeremythegirl
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="extra-background-outer">
                    <div className="extra-background-inner"></div>
                </div>
                <div className="home-testimonials">
                    <h2>Testimonials</h2>
                    <Testimonials />
                </div>
                <div className="gallery-outer">
                    <div className="gallery-inner">
                        <h2>Reactions to the book on Instagram</h2>
                        <ul className="gallery-images">
                            {fields.gallery &&
                                fields.gallery.map((image, index) => (
                                    <li key={index}>
                                        <img
                                            src={image.mediaItemUrl}
                                            alt={image.altText}
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className="cta-outer">
                    <div className="cta">
                        <a
                            href={fields && fields.heroCta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Amazon />

                            <button className="button">
                                {fields.heroCta.title}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

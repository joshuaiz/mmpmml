import React from 'react'
import Parser from 'html-react-parser'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

import './post.scss'

const Post = ({ pageContext }) => {
    const post = pageContext.post

    const banner = post.post_fields.banner
    const content1 = post.post_fields.postContent1
    const content2 = post.post_fields.postContent2
    const content3 = post.post_fields.postContent3
    const postImage = post.post_fields.postImage
    const callout = post.post_fields.calloutQuote

    console.log('in Post', post)

    return (
        <Layout>
            <SEO title={post.title} />
            {banner && (
                <div className="post-banner-outer">
                    <div className="post-banner-inner">
                        <img src={banner.mediaItemUrl} alt={banner.altText} />
                    </div>
                </div>
            )}
            <article className="single-post">
                <header className="article-header">
                    <h1 className="post-title">{post.title}</h1>
                </header>

                <section className="entry-content">
                    {content1 && (
                        <div className="post-content post-content-1">
                            {Parser(content1)}
                        </div>
                    )}
                    {postImage && (
                        <div className="post-content-image">
                            <img
                                className="post-image"
                                src={postImage.mediaItemUrl}
                                alt={postImage.altText}
                            />
                        </div>
                    )}
                    {content2 && (
                        <div className="post-content post-content-2">
                            {Parser(content2)}
                        </div>
                    )}
                    {callout && (
                        <div className="callout-quote">
                            <blockquote>{Parser(callout)}</blockquote>
                        </div>
                    )}
                    {content3 && (
                        <div className="post-content post-content-3">
                            {Parser(content3)}
                        </div>
                    )}
                </section>
            </article>
        </Layout>
    )
}

export default Post

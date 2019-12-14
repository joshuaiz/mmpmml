import React from 'react'
import { Link } from 'gatsby'
import Parser from 'html-react-parser'
import Image from '../../components/image'
import { blogURI } from '../../../globals'

const PostEntry = ({ post }) => {
    const { uri, title, featuredImage, excerpt } = post

    const ex = post.post_fields.postContent1

    console.log('PostEntry', post)

    return (
        <li className="list-post nostyle">
            <div className="list-image">
                <Link to={`${blogURI}/${uri}/`}>
                    <Image image={featuredImage} />
                </Link>
            </div>
            <div className="list-post-content">
                <h2 style={{ marginBottom: '5px' }}>
                    <Link to={`${blogURI}/${uri}/`}>{title}</Link>
                </h2>

                {ex ? (
                    <div className="post-excerpt">{Parser(ex)}</div>
                ) : (
                    <div className="post-excerpt">{Parser(excerpt)}</div>
                )}
                <p className="read-more">
                    <Link to={`${blogURI}/${uri}/`}>Read more &rarr;</Link>
                </p>
            </div>
        </li>
    )
}

export default PostEntry

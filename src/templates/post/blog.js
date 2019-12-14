import React from 'react'
import Layout from '../../components/layout'
import PostEntry from '../../components/postentry'
import Pagination from '../../components/pagination'
import SEO from '../../components/seo'

const Blog = ({ pageContext }) => {
    const {
        nodes,
        pageNumber,
        hasNextPage,
        itemsPerPage,
        allPosts
    } = pageContext

    return (
        <Layout>
            <SEO title="Blog" description="Blog posts" keywords={[`blog`]} />
            <h1>Blog Posts</h1>
            <ul className="post-list nostyle">
                {nodes &&
                    nodes.map(post => (
                        <PostEntry key={post.postId} post={post} />
                    ))}
            </ul>

            <Pagination
                pageNumber={pageNumber}
                hasNextPage={hasNextPage}
                allPosts={allPosts}
                itemsPerPage={itemsPerPage}
            />
        </Layout>
    )
}

export default Blog

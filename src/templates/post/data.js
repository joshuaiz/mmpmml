const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    content
    link
    featuredImage {
      sourceUrl
    }
    post_fields {
      calloutQuote
      postContent1
      postContent2
      postContent3
      postImage {
        altText
        mediaItemUrl
      }
      banner {
        altText
        mediaItemUrl
      }
    }
    categories {
      nodes {
        name
        slug
        id
      }
    }
    tags {
      nodes {
        slug
        name
        id
      }
    }
    author {
      name
      slug
    }
  }
`

const BlogPreviewFragment = `
  fragment BlogPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    uri
    date
    slug
    excerpt
    content
    featuredImage {
      sourceUrl
    }
    post_fields {
      postContent1
      postImage {
        altText
        mediaItemUrl
      }
      banner {
        altText
        mediaItemUrl
      }
    }
    author {
      name
      slug
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.BlogPreviewFragment = BlogPreviewFragment

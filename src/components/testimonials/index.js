import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Parser from "html-react-parser"

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query TESTIMONIALS {
            wpgraphql {
                testimonials {
                    nodes {
                        testimonial_fields {
                            quote
                            quoteAuthor
                            quoteAuthorTitle
                        }
                    }
                }
            }
        }
    `)

    // console.log("testimonials", data)

    const testimonials = data.wpgraphql.testimonials.nodes

    return (
        <div className="testimonials">
            <ul className="testimonials-list">
                {testimonials &&
                    [...testimonials].reverse().map((t, index) => {
                        const fields = t.testimonial_fields
                        return (
                            <li key={index + fields.quoteAuthor}>
                                <div className="testimonial-quote">
                                    {fields.quote}
                                </div>
                                <div className="quote-author">
                                    &mdash;&nbsp;
                                    <span className="author">
                                        {fields.quoteAuthor}
                                    </span>
                                    <br />
                                    <span className="author-title">
                                        {Parser(fields.quoteAuthorTitle)}
                                    </span>
                                </div>
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Testimonials

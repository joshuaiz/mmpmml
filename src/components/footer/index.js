import React, { useState, useEffect } from 'react'
import Instagram from '../../../assets/instagram.svg'
import './footer.scss'

const Footer = () => {
    const [state, setState] = useState()
    const [submitted, setSubmitted] = useState(false)

    function encode(data) {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&')
    }

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state
            })
        })
            .then(setSubmitted(true))
            .catch(error => alert(error))
    }

    useEffect(() => {
        if (submitted) {
            setTimeout(() => {
                setSubmitted(false)
            }, 4000)
        }
    }, [submitted])

    return (
        <footer>
            <div className="inner-footer">
                {!submitted ? (
                    <div className="email-form">
                        <h3>Enter your email to get updates from Jeremy!</h3>
                        <p className="small">
                            We respect your privacy and don't share or sell
                            email addresses to anyone.
                        </p>
                        <form
                            name="email"
                            method="post"
                            //   action="/thanks/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={handleSubmit}
                        >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <p hidden>
                                <label>
                                    Don’t fill this out:{' '}
                                    <input
                                        name="bot-field"
                                        onChange={handleChange}
                                    />
                                </label>
                            </p>
                            <div className="form-wrap">
                                <p>
                                    <label>
                                        Your email:
                                        <br />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email@youremail.com"
                                            onChange={handleChange}
                                        />
                                    </label>
                                </p>
                                <p>
                                    <button
                                        className="button blue-button"
                                        type="submit"
                                    >
                                        Get Updates
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="submitted">
                        <h3>Thank you! Your email has been submitted.</h3>
                    </div>
                )}

                <div className="social-links">
                    <a
                        href="https://www.instagram.com/jeremythegirl/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram />
                        <span className="social-handle">@jeremythegirl</span>
                    </a>
                </div>

                <p className="copyright">
                    © {new Date().getFullYear()} Make Me Pretty, Make Me
                    Laugh/Jeremy Beth Michaels. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer

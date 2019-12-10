import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./header.scss"

const Header = ({ siteTitle }) => (
    <header className="header">
        <div className="inner-header">
            <h1 className="site-title">
                <Link to="/">{siteTitle}</Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string
}

Header.defaultProps = {
    siteTitle: ``
}

export default Header

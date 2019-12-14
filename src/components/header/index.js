import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

import Heart from '../../../assets/heart.svg'
import Menu from '../menu'

const Header = ({ siteTitle }) => (
    <header className="header">
        <div className="inner-header">
            <div className="home-icon">
                <Link to="/">
                    <Heart />
                </Link>
            </div>
            <h1 className="site-title">
                <Link to="/">{siteTitle}</Link>
            </h1>
            <Menu />
        </div>
    </header>
)

export default Header

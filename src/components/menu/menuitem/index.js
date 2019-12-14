import React from 'react'
import { CreateLocalLink } from '../../../utils'
import UniversalLink from '../universallink'

const MenuItem = ({ menuItem, wordPressUrl }) => {
    return (
        <li className="menu-item">
            <UniversalLink
                style={{ marginRight: '20px' }}
                to={CreateLocalLink(menuItem, wordPressUrl)}
            >
                {menuItem.label}
            </UniversalLink>
        </li>
    )
}

export default MenuItem

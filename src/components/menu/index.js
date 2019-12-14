import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import MenuItem from '../menu/menuitem'

/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`
    fragment MenuItem on WPGraphQL_MenuItem {
        id
        label
        url
        title
        target
    }

    query GETMAINMENU {
        wpgraphql {
            menuItems(where: { location: MAIN_NAV }) {
                nodes {
                    ...MenuItem
                }
            }
            generalSettings {
                url
            }
        }
    }
`

const Menu = () => {
    return (
        <StaticQuery
            query={MENU_QUERY}
            render={data => {
                if (data.wpgraphql.menuItems) {
                    const menuItems = data.wpgraphql.menuItems.nodes
                    const wordPressUrl = data.wpgraphql.generalSettings.url

                    return (
                        <nav className="primary-menu">
                            <ul className="main-menu">
                                {menuItems &&
                                    menuItems.map(menuItem => (
                                        <MenuItem
                                            key={menuItem.id}
                                            menuItem={menuItem}
                                            wordPressUrl={wordPressUrl}
                                        />
                                    ))}
                            </ul>
                        </nav>
                    )
                }
                return null
            }}
        />
    )
}

export default Menu

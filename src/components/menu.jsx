//import {Link} from 'react-dom'

import React from 'react'

const Menu = ({title, address, className, onClick}) => {
    return (
        <a href={address} className={className} onClick={onClick} >
            <p>{title}</p>

        </a>
    )
}

export default Menu

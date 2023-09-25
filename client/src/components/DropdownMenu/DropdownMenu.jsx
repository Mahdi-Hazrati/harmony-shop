import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

import "./DropdownMenu.scss"

const DropdownMenu = ({ children, title }) => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    return (
        <div className="dropdown-menu">
            <div className="title" onClick={() => { setIsMenuActive(!isMenuActive) }}>
                <span>{title}</span>
                {isMenuActive ? <IoIosArrowUp className="icon" /> : <IoIosArrowDown className="icon" />}
            </div>
            <ul className={`list ${isMenuActive ? "active-dropdown-menu" : "deactive-dropdown-menu"}`}>
                {children}
            </ul>
        </div>
    )
}

export default DropdownMenu
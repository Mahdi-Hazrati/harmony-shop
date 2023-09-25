import React from 'react'
import Top from "./Top"
import Main from "./Main"
import Bottom from "./Bottom"
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <Top />
            <Main />
            <Bottom />
        </div>
    )
}

export default Header
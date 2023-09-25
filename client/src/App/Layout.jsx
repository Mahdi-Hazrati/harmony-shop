import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

import React from 'react'

const Layout = ({className}) => {
    return (
        <div className={className}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
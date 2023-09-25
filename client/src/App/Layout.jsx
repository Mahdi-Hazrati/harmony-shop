import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"

import React from 'react'

const Layout = ({className}) => {
    return (
        <div className={className}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
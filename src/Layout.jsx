import React from 'react'
import Navigation from './Components/Navigation'
import Header from './Components/Header'
import Footer from './Components/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Navigation />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout

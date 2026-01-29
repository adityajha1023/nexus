import React from 'react'
import Navigation from './components/Navigation.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
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

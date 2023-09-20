import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
    return (
        <section className='max-w-screen'>
            <Outlet />
        </section>
    )
}

export default Content
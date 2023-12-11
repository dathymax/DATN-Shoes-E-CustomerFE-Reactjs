import { Outlet } from 'react-router-dom'

const Content = () => {
    return (
        <section
            className='max-w-screen'
            style={{ minHeight: "calc(100vh - 112px", background: "#FAFAFA" }}
        >
            <Outlet />
        </section>
    )
}

export default Content
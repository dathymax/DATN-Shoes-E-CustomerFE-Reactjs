import React, { useEffect } from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const Layout = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Header />
            <Content />
            <Footer />
        </main>
    );
};

export default Layout;

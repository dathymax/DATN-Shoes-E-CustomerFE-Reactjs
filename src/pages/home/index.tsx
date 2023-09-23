import React from "react";
import "./index.css";
import HomePageHero from "./components/Hero";
import HomePageBestSelling from "./components/BestSelling";
import HomePageCategories from "./components/Categories";
import Native from "../../assets/images/Native.png";
import HomePageGallery from "./components/Gallery";

const HomePage = () => {
    return (
        <div>
            <HomePageHero />
            <div className="container m-auto py-10">
                <HomePageBestSelling />
                <div className="h-[70px]"></div>
                <HomePageCategories />
                <div className="h-[70px]"></div>
                <img
                    src={Native}
                    alt="Native"
                    className="rounded-lg w-full object-cover"
                />
                <div className="h-[70px]"></div>
                <HomePageBestSelling />
                <div className="h-[70px]"></div>
                <HomePageBestSelling />
                <div className="h-[70px]"></div>
                <HomePageGallery />
            </div>
        </div>
    );
};

export default HomePage;

import { Button } from "antd";
import ArrowRight from "../../../assets/images/ArrowRight.png";

const HomePageHero = () => {
    return (
        <div className="home__hero text-white">
            <div className="container m-auto h-full pt-16">
                <p className="home__hero-sneakers text-[96px]">Sneakers -</p>
                <p className="text-[96px]">Flash Sale</p>
                <p className="text-[20px] mt-4">
                    Be different with the Nike shoe collection
                </p>
                <div className="h-[60px]"></div>
                <Button
                    href="/products"
                    type="primary"
                    style={{ width: "290px", height: 50 }}
                >
                    <p className="h-full flex items-center justify-center gap-3">
                        Explore now
                        <img
                            src={ArrowRight}
                            alt="ArrowRight"
                            className="mt-[2px]"
                        />
                    </p>
                </Button>
            </div>
        </div>
    );
};

export default HomePageHero;

import Gallery1 from "../../../assets/images/gallery/Gallery1.png";
import Gallery2 from "../../../assets/images/gallery/Gallery2.png";

const HomePageGallery = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-medium">Gallery</h3>
                <span className="text-primary text-[12px]">View more</span>
            </div>

            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-5">
                    <img
                        src={Gallery1}
                        alt="Gallery"
                        className="w-full rounded-lg object-cover h-[490px]"
                    />
                </div>
                <div className="col-span-7">
                    <img
                        src={Gallery2}
                        alt="Gallery"
                        className="w-full rounded-lg object-cover h-[490px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePageGallery;

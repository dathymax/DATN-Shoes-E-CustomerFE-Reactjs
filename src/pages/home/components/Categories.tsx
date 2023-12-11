import ProductCategory, {
    IProductCategory,
} from "../../../components/product/category";
import Nike from "../../../assets/images/category/Nike.png";
import Adidas from "../../../assets/images/category/Adidas.png";
import Converse from "../../../assets/images/category/Converse.png";
import Puma from "../../../assets/images/category/Puma.png";
import Reebok from "../../../assets/images/category/Reebok.png";
import ASICS from "../../../assets/images/category/ASICS.png";

const HomePageCategories = () => {
    const categories: IProductCategory[] = [
        {
            name: "Nike",
            quantity: 1230,
            image: Nike,
        },
        {
            name: "Adidas",
            quantity: 1230,
            image: Adidas,
        },
        {
            name: "Converse",
            quantity: 1230,
            image: Converse,
        },
        {
            name: "Puma",
            quantity: 1230,
            image: Puma,
        },
        {
            name: "Reebok",
            quantity: 1230,
            image: Reebok,
        },
        {
            name: "ASICS",
            quantity: 1230,
            image: ASICS,
        },
    ];

    return (
        <div>
            <h2 className="mb-5 font-medium">Categories</h2>
            <div className="grid grid-cols-12 gap-5">
                {categories.map((category) => {
                    return (
                        <div key={category.name} className="col-span-4">
                            <ProductCategory
                                name={category.name}
                                quantity={category.quantity}
                                image={category.image}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePageCategories;

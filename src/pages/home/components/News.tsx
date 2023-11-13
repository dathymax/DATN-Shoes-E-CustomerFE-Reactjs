import News1 from "../../../assets/images/news/News1.png";
import News2 from "../../../assets/images/news/News2.png";
import News3 from "../../../assets/images/news/News3.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import dayjs from "dayjs";
import { DATE_FORMAT, TIME_FORMAT } from "../../../constants";

const HomePageNews = () => {
    const news = [
        {
            id: 1,
            img: News1,
            href: "/",
            date: new Date(),
            time: new Date(),
            title: "Where to hunt number 23: Noah x PUMA Pro Star 'White and Green'",
        },
        {
            id: 2,
            img: News2,
            href: "/",
            date: new Date(),
            time: new Date(),
            title: "Where to hunt number 23: Noah x PUMA Pro Star 'White and Green'",
        },
        {
            id: 3,
            img: News3,
            href: "/",
            date: new Date(),
            time: new Date(),
            title: "Where to hunt number 23: Noah x PUMA Pro Star 'White and Green'",
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-medium">News</h3>
                <Link to={"/"} className="text-[12px] text-primary">
                    View more
                </Link>
            </div>

            <div className="grid grid-cols-12 gap-5">
                {news.map((news) => {
                    return (
                        <Link
                            to={news.href}
                            key={news.id}
                            className="col-span-4"
                        >
                            <img
                                src={news.img}
                                alt="News image"
                                className="rounded-lg w-full object-cover"
                            />
                            <p className="text-gray-400 text-[12px] my-3">
                                {dayjs(news.date).format(DATE_FORMAT)} |{" "}
                                {dayjs(news.time).format(TIME_FORMAT)}
                            </p>
                            <p className="font-bold mb-3">{news.title}</p>
                            <p className="text-black flex items-center gap-2 text-[13px]">
                                See more <AiOutlineArrowRight />
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePageNews;

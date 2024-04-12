import { Helmet } from "react-helmet";
import Estates from "../../components/estates/Estates";
import Slider from "./slider/Slider";
import Review from "../../components/review/Review";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EstateHive | Home</title>
            </Helmet>
            <Slider></Slider>
            <Estates></Estates>
            <div className="overflow-hidden">
                <Review></Review>
            </div>

        </div>
    );
};

export default Home;
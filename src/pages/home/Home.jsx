import { Helmet } from "react-helmet";
import Estates from "../../components/estates/Estates";
import Slider from "./slider/Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>EstateHive | Home</title>
            </Helmet>
           <Slider></Slider>
           <Estates></Estates>

        </div>
    );
};

export default Home;